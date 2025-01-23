"use client";

import Link from "next/link";
import MobileNav from "./mobile-nav";
import DesktopNav from "./desktop-nav";

const Header = () => {
  return (
    <>
      <header
        className={
          "font-semibold py-5 px-8 text-black bg-white w-full fixed z-50 flex flex-row items-center justify-between"
        }
      >
        <Link href="/">
          <p className="text-lg font-black whitespace-nowrap">
            NEXT 사용자 관리 시스템
          </p>
        </Link>
        <div className="block md:hidden">
          <MobileNav />
        </div>
        <div className="hidden md:block w-full">
          <DesktopNav />
        </div>
      </header>
    </>
  );
};

export default Header;
