import { auth } from "auth";
import Link from "next/link";
import FormSignIn from "./FormSignIn";
import FormSignOut from "./FormSignOut";

async function Navbar() {
  const session = await auth();

  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link href="/" className="text-white text-lg font-bold">
        Home
      </Link>
      <div>
        {session && session.user ? (
          <div className="flex gap-4 items-center">
            <p>{session.user.name}</p>
            <FormSignOut />
          </div>
        ) : (
          <FormSignIn />
        )}
      </div>
    </div>
  );
}

export default Navbar;
