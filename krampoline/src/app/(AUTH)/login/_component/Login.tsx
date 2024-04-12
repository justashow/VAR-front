"use client";

import Image from "next/image";
import Logo from "../../../../../public/Logo.png";
import Kakao from "../../../../../public/kakao_login.png";
import styles from "./login.module.css";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter(); // useRouter 훅 사용
  const onClick = () => {
    window.location.href =
      "https://won-backserver.kro.kr:8081/oauth2/authorization/kakao";
  };

  return (
    <>
      <div className={styles.LoginContainer}>
        <div>
          <Image src={Logo} alt="logo" />
        </div>
        <div onClick={() => onClick()}>
          <Image src={Kakao} alt="logo" />
        </div>
      </div>
    </>
  );
}

//----------------------------------------------------------------
