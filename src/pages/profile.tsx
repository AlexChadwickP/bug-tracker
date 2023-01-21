import dayjs from "dayjs";
import { useState } from "react";
import AuthenticatedLayout from "../layouts/AuthenticatedLayout";
import { sb } from "../supabaseClient";

export default function Profile() {
  const [emailAddress, setEmailAddress] = useState("");
  const [createdOn, setCreatedOn] = useState("");

  sb.auth.getUser().then((user) => {
    setEmailAddress(user.data.user?.email || "");
    setCreatedOn(user.data.user?.created_at || "");
  });

  return (
    <AuthenticatedLayout>
      <p className="m-4 text-2xl font-extrabold">Profile</p>
      <div className="m-4">
        <table>
          <tr className="border-b border-b-gray-600">
            <td className="w-1/2 text-sm text-gray-600">Email Address: </td>
            <td>{emailAddress}</td>
          </tr>
          <tr className="border-b border-b-gray-600">
            <td className="w-1/2 text-sm text-gray-600">Registration Date:</td>
            <td>{dayjs(createdOn).format("DD/MM/YYYY")}</td>
          </tr>
        </table>
      </div>
    </AuthenticatedLayout>
  );
}
