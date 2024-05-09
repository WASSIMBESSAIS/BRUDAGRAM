"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, useSession, signOut } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();
  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-30 p-3">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/*logo*/}
        <Link href="/" className="hidden lg:inline-flex">
          <Image
            src="/BRUDAGRAM.jpg"
            width={96}
            height={96}
            alt="BRUDAGRAM logo"
          />
        </Link>

        <Link href="/" className="lg:hidden">
          <Image
            src="/BROUDAS_GAMING.png"
            width={50}
            height={50}
            alt="BRUDAGRAM logo"
          />
        </Link>

        {/*search input*/}

        <input
          type="text"
          placeholder="search"
          className="bg-gray-50 border 
         border-gray-200 rounded text-sm w-full py-2 px-4 max-w-[210px]"
        />

        {/*menu items*/}

        {session ? (
          <img
            src={session.user.image}
            alt={session.user.name}
            className="h-10 w-10 rounded-full cursor-pointer"
            onClick={signOut}
          />
        ) : (
          <button
            onClick={() => signIn()}
            className="text-sm font-semibold text-blue-500"
          >
            Log In
          </button>
        )}
      </div>
    </div>
  );
}
