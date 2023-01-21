import { useForm } from "react-hook-form";
import { sb } from "../supabaseClient";

type LogInForm = {
  email_address: string;
};

export default function Login() {
  const { register, handleSubmit } = useForm<LogInForm>();

  const submit = handleSubmit(async ({ email_address }) => {
    try {
      await sb.auth.signInWithOAuth({
        provider: "spotify",
      });
      alert("Check your email for a login link");
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  });

  return (
    <div className="flex justify-center items-center h-screen bg-blue-600">
      <div className="bg-white shadow-md p-16 rounded-lg">
        <h1 className="text-2xl font-extrabold">Log In</h1>
        <form onSubmit={submit}>
          <button
            type="submit"
            className="block mt-4 px-2 py-1 border border-black hover:text-gray-700 hover:border-gray-700 hover:cursor-pointer font-bold rounded-md shadow-sm"
          >
            Using Spotify
          </button>
        </form>
      </div>
    </div>
  );
}
