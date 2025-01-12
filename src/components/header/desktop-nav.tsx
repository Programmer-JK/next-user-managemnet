"use client";

import Link from "next/link";

const DesktopNav = () => {
  return (
    <div className="flex flex-row items-center justify-end">
      <div className="flex flex-row items-center gap-5">
        <search>검색</search>
        <Link href="/mypage">마이페이지</Link>
        <Link href="/login">로그인</Link>
      </div>
    </div>
  );
};

export default DesktopNav;
