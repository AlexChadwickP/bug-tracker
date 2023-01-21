import * as Dialog from "@radix-ui/react-dialog";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { createColumnHelper } from "@tanstack/table-core";
import { useState } from "react";
import { useForm } from "react-hook-form";
import AuthenticatedLayout from "../layouts/AuthenticatedLayout";
import { sb } from "../supabaseClient";
import { Contact } from "../types/sbWrapper";

export default function Contacts() {
  const [contacts, setContacts] = useState([]);

  sb.from("contacts")
    .select()
    .then((data) => {
      if (JSON.stringify(contacts) !== JSON.stringify(data.data))
        setContacts(data.data as any);
    });

  return (
    <AuthenticatedLayout>
      <h1 className="text-2xl font-extrabold">Contacts</h1>
      <p className="text-sm text-gray-600">
        Manage all your contacts in one place
      </p>

      <div className="mt-10 mb-10">
        <AddContactDialog />
      </div>

      <ContactsTable contacts={contacts} />
    </AuthenticatedLayout>
  );
}

function AddContactDialog() {
  type ContactFormInputs = {
    first_name: string;
    last_name?: string;
    email_address?: string;
    phone_number?: string;
  };

  const { register, handleSubmit } = useForm<ContactFormInputs>();

  const addContact = handleSubmit(async (data) => {
    alert(JSON.stringify(data));

    const user = await sb.auth.getUser();

    try {
      await sb.from("contacts").insert({
        first_name: data.first_name,
        last_name: data.last_name,
        email_address: data.email_address,
        phone_number: data.phone_number,
        user_id: user.data.user?.id,
      });
    } catch (err) {
      alert("Something went wrong.");
      console.error(err);
    }
  });

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="rounded-md px-2 py-1 border border-blue-600 text-blue-600 font-bold">
          Add new contact
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-gray-700 opacity-50 inset-0 fixed h-screen w-full" />
        <Dialog.Content className="bg-white rounded-md shadow-sm p-10 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Dialog.Title className="text-xl font-extrabold mb-4">
            Add new contact
          </Dialog.Title>
          <form onSubmit={addContact}>
            <div className="flex space-x-2 mb-2">
              <label className="block">
                First Name*
                <input
                  type="text"
                  className="block rounded-md"
                  {...register("first_name")}
                />
              </label>
              <label className="block">
                Last Name
                <input
                  type="text"
                  className="block rounded-md"
                  {...register("last_name")}
                />
              </label>
            </div>
            <label className="block">
              Email Address
              <input
                type="email"
                className="block rounded-md w-full"
                {...register("email_address")}
              />
            </label>
            <label className="block">
              Phone Number
              <input
                type="tel"
                className="block rounded-md w-full"
                {...register("phone_number")}
              />
            </label>
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-blue-600 text-white mt-4 font-bold hover:bg-blue-500"
            >
              Add
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function ContactsTable({ contacts }: { contacts: Contact[] }) {
  const columnHelper = createColumnHelper<Contact>();

  const columns = [
    columnHelper.accessor("first_name", {
      header: "First Name",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("last_name", {
      header: "Last Name",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("email_address", {
      header: "Email Address",
      cell: (info) => (
        <a
          href={`mailto:${info.getValue()}`}
          className="text-blue-500 hover:text-blue-700 hover:underline"
        >
          {info.getValue()}
        </a>
      ),
    }),
    columnHelper.accessor("phone_number", {
      header: "Phone Number",
      cell: (info) => (
        <a
          href={`tel:${info.getValue()}`}
          className="text-blue-500 hover:text-blue-700 hover:underline"
        >
          {info.getValue()}
        </a>
      ),
    }),
  ];

  const table = useReactTable({
    data: contacts,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="w-full text-left">
      <thead className="uppercase text-xs font-bold">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id} className="text-gray-700">
            {headerGroup.headers.map((header) => (
              <th key={header.id} className="px-4 py-2">
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr
            key={row.id}
            className="border-b border-gray-400 hover:bg-gray-100"
          >
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="px-4 py-2">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
