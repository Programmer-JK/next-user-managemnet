"use client";
import profileImg from "@/asset/img/profile.jpg";
import MypageProfile from "@/components/mypage/mypage-profile";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-200">
      <div className="flex flex-col md:flex-row gap-1 justify-center">
        <div className="bg-white hidden w-96 md:flex h-screen flex-col items-center pt-10 ml-5">
          <div className="py-24 px-4 w-fit mx-auto">
            <p className="text-3xl font-semibold text-gray-800">마이페이지</p>
          </div>
          <MypageProfile img={profileImg} />
          <div className="flex flex-col text-gray-800 text-center">
            <div className="text-xl mt-4 font-bold">인ㄱ</div>
            <div className="mb-4 text-gray-500">testEmail@test.com</div>
          </div>
          <button className="bg-slate-500 px-2 py-1 rounded-lg text-white">
            로그아웃
          </button>
        </div>
        <div className="mt-16 px-4 w-fit mx-auto md:hidden">
          <p className="text-3xl font-semibold text-gray-800">마이페이지</p>
        </div>
        <div className="bg-white mt-10 mx-4 py-3 rounded-lg flex flex-col md:hidden items-center">
          <MypageProfile img={profileImg} />
          <div className="flex flex-col text-gray-800 text-center">
            <div className="text-xl mt-4 font-bold">인ㄱ</div>
            <div className="text-gray-500">testEmail@test.com</div>
          </div>
        </div>
        <div className="flex flex-col mx-4 md:mx-0 md:w-2/5">
          <div className="max-w-lg">
            <Card className="bg-white w-full md:max-w-lg md:mt-64 h-fit">
              <CardHeader className="border-b flex flex-row items-center justify-between py-2 bg-[#03C75A] rounded-t-lg">
                <p className="text-xl font-semibold justify-start">
                  사용자 정보
                </p>
                {/* Naver Icon */}
                <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">N</span>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                {/* Info Rows */}
                <div className="space-y-4">
                  {/* Nickname Row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <span className="text-gray-600 font-extrabold w-24">
                        닉네임
                      </span>
                      <div className="rounded-md">인ㄱ</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="bg-slate-500 w-28 px-2 py-1 rounded-lg text-white">
                        닉네임 변경
                      </button>
                    </div>
                  </div>

                  {/* Member Level Row */}
                  <div className="flex items-start">
                    <span className="text-gray-600 font-extrabold w-24">
                      회원등급
                    </span>
                    <div className="rounded-md">관리자</div>
                  </div>

                  {/* Password Row */}
                  <div className="flex items-center justify-between">
                    <div className="text-gray-600 font-extrabold">비밀번호</div>
                    <button className="bg-slate-500 w-28 px-2 py-1 rounded-lg text-white">
                      비밀번호 변경
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-end py-2">
              <button className="font-semibold">회원탈퇴 {">"}</button>
            </div>
            <Card className="bg-white w-full md:max-w-lg h-fit">
              <CardHeader className="border-b flex flex-row items-center justify-between py-2 bg-blue-300 rounded-t-lg">
                <p className="text-xl font-semibold justify-start">
                  로그인 기록
                </p>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div>로그인</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
