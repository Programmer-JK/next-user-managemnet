import { useState } from "react";
import Link from "next/link";
import { Cross, Menu, X } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [{ href: "/mypage", text: "마이페이지" }];
  const { data: session } = useSession();

  return (
    <div className="relative">
      <button onClick={toggleMenu}>
        {!isOpen && <Menu width="2rem" height="2rem" className=" text-black" />}
      </button>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-30
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={toggleMenu}
      />
      {/* 드로워 메뉴 */}
      <div
        className={`
          fixed top-0 right-0 h-screen w-3/5 
          bg-aniviolet3 z-40
          transform transition-all ease-in-out duration-300
          ${isOpen ? "translate-x-0" : "translate-x-full"}
    `}
      >
        <div className="flex justify-end">
          <button onClick={toggleMenu} className="m-5">
            <X width="2rem" height="2rem" strokeWidth={2.25} color="white" />
          </button>
        </div>
        {/* 닫기 버튼 */}
        {session && session.user ? (
          <div>
            <div className="flex flex-col items-center mb-8">
              <div className="w-16 h-16 bg-white rounded-full mb-3" />
              <div className="text-white text-2xl">{session.user.name}</div>
            </div>
            <div className="flex-grow border-t border-gray-300 m-5" />

            <div>
              {/* 메뉴 아이템들 */}
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={toggleMenu}
                  className="block px-6 py-3 text-white text-xl"
                >
                  {item.text}
                </Link>
              ))}
            </div>
            <button
              className="text-white text-xl absolute bottom-5 right-8"
              onClick={() => signIn()}
            >
              로그아웃
            </button>
          </div>
        ) : (
          <div className="absolute bottom-5 right-5">
            <button className="text-white text-xl" onClick={() => signIn()}>
              로그인
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileNav;
