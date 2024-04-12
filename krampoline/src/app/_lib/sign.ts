"use client";

import { redirect } from "next/navigation";

export default async (userInfo, formData) => {
  const body = {
    kakaoId: userInfo.id,
    userName: userInfo.name,
    nickname: formData.get("nickname"),
    email: formData.get("email"),
    phoneNumber: userInfo.phoneNumber,
    profileImgUrl: userInfo.profileImgUrl,
  };
  let shouldRedirect = false;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/all/signup`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
        credentials: "include",
      }
    );
    console.log(response.status);
    if (response.status === 403) {
      return { message: "user_exists" };
    }
    console.log(await response.json());
    shouldRedirect = true;
  } catch (error) {
    console.error(error);
    return { message: "error" };
  }

  if (shouldRedirect) {
    redirect("/"); // try/catch문 안에서 X
  }
  return { message: null };
};
