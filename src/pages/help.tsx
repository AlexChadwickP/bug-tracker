import AuthenticatedLayout from "../layouts/AuthenticatedLayout";

export default function Help() {
  return (
    <AuthenticatedLayout>
      <div className="flex justify-center">
        <div className="w-1/2">
          <h1 className="text-2xl font-extrabold">SoloGig Help</h1>
          <h3 className="mt-2 text-xl font-semibold">What is SoloGig?</h3>
          <p>
            SoloGig is a platform for solo musicians to manage their data. It
            allows you to manage upcoming gigs, setlists and contacts, all
            within the same space!
          </p>
          <h3 className="mt-2 text-xl font-semibold">Why SoloGig?</h3>
          <p>
            There is a lack of tools out there for musicians to be able to
            manage their data, so we thought a dedicated tool for solo musicians
            was the best way forwards. As it uses a web interface, it also
            allows you to access your data from every device!
          </p>
          <h3 className="mt-2 text-xl font-semibold">Is my data secure?</h3>
          <p>
            Your data will always be secure. All of the data submitted to us is
            stored in a PostgreSQL database, with Row-Level Security (RLS)
            enabled, meaning you, and only you can access your data.
            Additionally, we make use of Spotify's authentication solution,
            meaning logging in is both simple and secure.
          </p>
          <h3 className="mt-2 text-xl font-semibold">
            What if I want total control over my SoloGig?
          </h3>
          <p>
            <a
              href="https://github.com/AlexChadwickP/SoloGig"
              className="text-blue-500 hover:underline hover:text-blue-700"
            >
              SoloGig is an open source project.
            </a>{" "}
            Everyone has access to view the source code, and everyone is free to
            "fork" it or clone it to build on top of it, or simply to have their
            own copy of it. We also use{" "}
            <a
              href="https://supabase.com/"
              className="text-blue-500 hover:underline hover:text-blue-700"
            >
              Supabase
            </a>{" "}
            as our backend provider, which in itself is also open source and
            makes use of open source software. Supabase allows you to self-host
            it, and although the process can be a bit complicated, it is not
            impossible. If you're interested in finding out more about hosting
            your own SoloGig, please refer to the documentation in the{" "}
            <a
              href="https://github.com/AlexChadwickP/SoloGig"
              className="text-blue-500 hover:underline hover:text-blue-700"
            >
              GitHub repository
            </a>
            .
          </p>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
