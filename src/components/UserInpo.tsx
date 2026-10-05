"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const UserInpo = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div>
      {user ? (
        // Logged In User
        <div className="flex items-center gap-3">
          {/* User Profile */}
          <div className="flex items-center gap-2">
           <Link href={'/profile'}>
            <div className="avatar">
              <div className="w-10 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-base-100">
                <img
                  src={user?.image as string}
                  alt={user.name || "User profile"}
                />
              </div>
            </div>
           </Link>

            <div className="hidden sm:block">
              <h2 className="text-sm font-semibold text-gray-800">
                {user.name}
              </h2>

              <p className="text-xs text-gray-500">
                Welcome back!
              </p>
            </div>
          </div>

          {/* Sign Out Button */}
          <Link href={"/signIn"}>
          <button
            onClick={handleSignOut}
            className="btn btn-sm md:btn-md rounded-lg bg-red-600 px-4 text-white border-none hover:bg-red-700 transition-colors"
          >
            সাইন আউট
          </button>
          </Link>
        </div>
      ) : (
        // Logged Out User
        <div className="flex items-center gap-2">
          {/* Sign In */}
          <Link href="/signIn">
            <button className="btn btn-sm md:btn-md rounded-lg border border-gray-300 bg-white px-4 text-gray-700 hover:bg-gray-100 hover:text-black transition-colors">
              সাইন ইন
            </button>
          </Link>

          {/* Sign Up */}
          <Link href="/signUp">
            <button className="btn btn-sm md:btn-md rounded-lg bg-red-600 px-4 text-white border-none hover:bg-red-700 transition-colors">
              সাইন আপ
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInpo;
