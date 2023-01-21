import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

export default function AuthenticatedLayout({ children }: PropsWithChildren) {
  // TODO: Logic to check that user is authenticated
  return (
    <div>
      <NavigationMenu.Root className="shadow-md p-2" orientation="vertical">
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <NavigationMenu.Link>
              <Link
                to="/dashboard"
                className="text-blue-600 font-bold px-2 py-1 mx-2 rounded-md hover:bg-blue-50"
              >
                Dashboard
              </Link>
            </NavigationMenu.Link>
            <NavigationMenu.Link>
              <Link
                to="/profile"
                className="text-blue-600 font-bold px-2 py-1 mx-2 rounded-md hover:bg-blue-50"
              >
                Profile
              </Link>
            </NavigationMenu.Link>
            <NavigationMenu.Link>
              <Link
                to="/contacts"
                className="text-blue-600 font-bold px-2 py-1 mx-2 rounded-md hover:bg-blue-50"
              >
                Contacts
              </Link>
            </NavigationMenu.Link>

            <NavigationMenu.Link>
              <Link
                to="/help"
                className="text-blue-600 font-bold px-2 py-1 mx-2 rounded-md hover:bg-blue-50"
              >
                Help
              </Link>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
      <div className="m-4">{children}</div>
    </div>
  );
}
