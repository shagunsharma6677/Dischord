import { redirect } from "next/navigation";
import { getSession, login, logout } from "../lib";

export default async function Page() {
  const session = await getSession();
  return (
    <section className="flex justify-center items-center flex-col space-y-10">
      <form
        action={async (formData) => {
          "use server";
          await login(formData);
          redirect("/");
        }}
        className="border-spacing-5 border-gray-50 flex flex-col items-center"
      >
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 text-black"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          {" "}
          Login
        </button>
      </form>
      <form
        action={async () => {
          "use server";
          await logout();
          redirect("/");
        }}
        className="flex flex-col items-center"
      >
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-red-600 focus:outline-none focus:bg-red-600"
          type="submit"
        >
          Logout
        </button>
      </form>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </section>
  );
}
