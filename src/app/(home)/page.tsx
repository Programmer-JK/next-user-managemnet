"use client";
import Header from "@/components/header/header";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function Home() {
  const [markdown, setMarkdown] = useState("");

  const components = {
    h1: ({ children }: { children: React.ReactNode }) => (
      <h1 className="text-4xl font-bold mb-6 mt-8 border-b pb-2">{children}</h1>
    ),
    h2: ({ children }: { children: React.ReactNode }) => (
      <h2 className="text-3xl font-semibold mb-4 mt-6">{children}</h2>
    ),
    h3: ({ children }: { children: React.ReactNode }) => (
      <h3 className="text-2xl font-medium mb-3 mt-5">{children}</h3>
    ),
    ul: ({ children }: { children: React.ReactNode }) => (
      <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>
    ),
    ol: ({ children }: { children: React.ReactNode }) => (
      <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>
    ),
    li: ({ children }: { children: React.ReactNode }) => (
      <li className="text-gray-700">{children}</li>
    ),
  };

  useEffect(() => {
    fetch("./README.md")
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <div className="min-h-screen bg-gray-200">
      <Header />
      <div className="w-full mx-auto pt-14">
        <ReactMarkdown components={components} className="bg-white px-12 py-5">
          {markdown}
        </ReactMarkdown>
      </div>
    </div>
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
    //     <h2 className="mb-5 text-3xl font-extrabold text-center">
    //       Next-Auth Login
    //     </h2>
    //     <div className="space-y-2">
    //       <h1 className="text-lg font-medium">지금 가입하세요.</h1>
    //       <Link
    //         href="/signup"
    //         className="block bg-blue-800 text-blue-200 text-center py-1 rounded-2xl hover:bg-blue-700"
    //       >
    //         계정 만들기
    //       </Link>
    //       {/* <LoginForm /> */}
    //       {session && session.user ? (
    //         <>
    //           <h3>{session.user.name}님 안녕하세요!</h3>
    //           <button
    //             className="w-full bg-blue-800 text-blue-200 py-1 rounded-2xl hover:bg-blue-700"
    //             onClick={() => signOut()}
    //           >
    //             로그아웃하기
    //           </button>
    //         </>
    //       ) : (
    //         <>
    //           <h3 className="text-base mt-4">이미 가입하셨나요?</h3>
    //           <button
    //             className="w-full bg-blue-800 text-blue-200 py-1 rounded-2xl hover:bg-blue-700"
    //             onClick={() => signIn()}
    //           >
    //             로그인하기
    //           </button>
    //         </>
    //       )}
    //     </div>
    //   </main>
    // </div>
  );
}
