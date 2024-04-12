import React from "react";
import ProfilePic from "../../../public/user.png";
import Image from "next/image";
import styles from "./mainUserInfo.module.css";
import Link from "next/link";

const user = {
  profile: ProfilePic,
  nickname: "danny",
  donation: 50000,
  points: 300000,
  VipOption: true,
};

const MainUserInfo = () => {
  return (
    <div>
      <div className={styles.MainUserInfoContainer}>
        <div className={styles.ProfilePicContainer}>
          <Image src={user.profile} alt="ProfilePic" width={100} />
        </div>
        <div className={styles.UserInfoContainer}>
          <div>{user.nickname}</div>
          <div>내 기부금액:{user.donation}</div>
          <div className={styles.PointContainer}>
            <div>보유 포인트:{user.points}</div>
            <div>충전하기</div>
          </div>
          <div className={styles.UserOptionContainer}>
            {user.VipOption && (
              <Link href="/vipmypage">
                <div>VIP 페이지</div>
              </Link>
            )}
            <div>User 페이지</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainUserInfo;
