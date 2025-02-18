import { SiNaver } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import styles from "./Socials.module.css";
import { signIn } from "next-auth/react";

export default function Socials() {
  return (
    <div className={styles.container}>
      <div className={styles.naver}>
        <button
          className={styles.button}
          onClick={() => signIn("naver", { redirect: true, callbackUrl: "/" })}
        >
          <SiNaver size={16} color="#fff" />
          <span>네이버로 시작하기</span>
        </button>
      </div>
      <div className={styles.kakao}>
        <button
          className={styles.button}
          onClick={() => signIn("kakao", { redirect: true, callbackUrl: "/" })}
        >
          <RiKakaoTalkFill size={24} />
          <span>카카오로 시작하기</span>
        </button>
      </div>
      <div className={styles.google}>
        <button
          className={styles.button}
          onClick={() => signIn("google", { redirect: true, callbackUrl: "/" })}
        >
          <FcGoogle size={24} color="#fff" />
          <span>구글로 시작하기</span>
        </button>
      </div>
    </div>
  );
}
