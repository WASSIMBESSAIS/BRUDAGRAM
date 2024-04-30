import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Header() {
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
        <button className="text-sm font-semibold text-blue-500">Log In</button>
      </div>
    </div>
  );
}
