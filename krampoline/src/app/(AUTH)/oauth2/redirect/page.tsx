"use client";

import { Suspense, useEffect } from "react";
import axios from "axios";
import { useSearchParams, useRouter } from "next/navigation";
import { useUser } from "@/app/utils/UserProvider";

function MyPage() {
  const params = useSearchParams();
  const router = useRouter();
  const { setUserInfo, login } = useUser();

  useEffect(() => {
    const codeParam = params.get("code");
    console.log(codeParam);

    async function postCode(code: string) {
      if (!code) return;
      try {
        // 카카오 OAuth 서버로부터 액세스 토큰을 요청합니다.
        const response = await axios.post(
          "https://won-backserver.kro.kr:8081/api/auth/oauth2/accessKakao",
          { code },
          { withCredentials: true }
        );
        setUserInfo(response.data.kakaoUserResDto);
        // 로그인 성공 시 로컬 스토리지에 액세스 토큰 저장 후 홈으로 이동
        if (response.data.type === "LOGIN") {
          const authHeader =
            response.headers["Authorization"] ||
            response.headers["authorization"];
          const accessToken = authHeader?.substring("Bearer ".length);
          if (accessToken) {
            localStorage.setItem("Authorization", accessToken);
            alert("완료");
            login;
            router.replace("/"); // 홈으로 리다이렉트
          }
        } else {
          // 로그인 실패 시 회원가입 페이지로 이동
          router.replace("/signup");
        }
      } catch (error) {
        console.error(error);
        // 요청 실패 시 회원가입 페이지로 이동
        router.replace("/signup");
      }
    }

    // URL에 'code' 파라미터가 있으면 postCode 함수를 실행합니다.
    if (codeParam) {
      postCode(codeParam);
    } else {
      // 'code' 파라미터가 없으면 회원가입 페이지로 이동
      router.replace("/signup");
    }
  }, [params, router]); // 의존성 배열에 params, router 추가

  return <div></div>;
}

const OAuth2RedirectPage = () => {
  // 페이지 컨텐츠는 없으며, OAuth 인증 처리 로직만 수행합니다.
  return (
    <Suspense>
      <MyPage />
    </Suspense>
  );
};

export default OAuth2RedirectPage;
