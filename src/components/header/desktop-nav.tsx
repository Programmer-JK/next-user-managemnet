"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const DesktopNav = () => {
  const { data: session } = useSession();
  return (
    <div className="flex flex-row justify-end">
      {session && session.user ? (
        <div className="flex flex-row items-center gap-5">
          <Image
            src={session.user.image}
            width={500}
            height={500}
            alt={""}
          ></Image>
          <div className="w-full px-2 py-1 rounded-xl hover:bg-blue-200 whitespace-nowrap">
            {session.user.name}
          </div>
          <Link
            href="/mypage"
            className="w-full px-2 py-1 rounded-xl hover:bg-blue-200 items-center whitespace-nowrap"
          >
            마이페이지
          </Link>
          <button
            className="w-full px-2 py-1 rounded-xl hover:bg-blue-200 whitespace-nowrap"
            onClick={() => signOut()}
          >
            로그아웃
          </button>
        </div>
      ) : (
        <button
          className="px-2 py-1 rounded-xl hover:bg-blue-200"
          onClick={() => signIn()}
        >
          로그인
        </button>
      )}
    </div>
  );
};

export default DesktopNav;
