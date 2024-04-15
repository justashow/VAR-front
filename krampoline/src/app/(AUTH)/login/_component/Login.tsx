"use client";

import Image from "next/image";
import Logo from "../../../../../public/Logo.png";
import Kakao from "../../../../../public/kakao_login.png";
import styles from "./login.module.css";
import { useRouter } from "next/navigation";
import Privacy from "@/app/(AUTH)/login/_component/Privacy";

export default function Login() {
  const router = useRouter(); // useRouter 훅 사용
  const onClick = () => {
    window.location.href =
      "https://vipandrendezvous.site/oauth2/authorization/kakao";
  };

  return (
    <>
      <div className={styles.LoginContainer}>
        <div>
          <Image src={Logo} alt="logo"/>
        </div>
        <div onClick={() => onClick()}>
          <Image src={Kakao} alt="logo"/>
        </div>
        <div>
          <Privacy/>
        </div>
      </div>
    </>
  );
}

//----------------------------------------------------------------
