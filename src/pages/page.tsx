import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-blue-600">
          Chadwick Software Bug Tracker
        </h1>
        <p className="text-2xl text-gray-500">
          Modern open-source bug tracking software
        </p>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-xl m-6 hover:bg-blue-500 hover:cursor-pointer">
          <Link to="/login">Log In</Link>
        </button>
      </div>
    </div>
  );
}
