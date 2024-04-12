"use client";

import Image from "next/image";
import ProfilePic from "../../../../public/user.png";
import styles from "./sideNav.module.css";
import FollowContainer from "../Follow/FollowContainer";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { signOut, useSession } from "next-auth/react";

const SideNav = () => {
  //----------------------------------------------------------------날짜 형식
  const today = new Date();
  const year = today.getFullYear();
  const month = ("0" + (today.getMonth() + 1)).slice(-2);
  const day = ("0" + today.getDate()).slice(-2);
  const dateString = year + "-" + month + "-" + day;
  //----------------------------------------------------------------

  // const { data: me } = useSession();

  //----------------------------------------------------------------돈 단위
  // const formattedAuctionCurrentPoint = me?.user?.point.toLocaleString();
  //----------------------------------------------------------------
  const router = useRouter();

  // const onLogout = () => {
  //   signOut({ redirect: false }).then(() => {
  //     router.replace("/");
  //   });
  // };

  // if (!me?.user) {
  //   return null;
  // }

  return (
    <div className={styles.sideNavContainer}>
      <div>
        <div className={styles.sideNavProfile}>
          <div className={styles.sideNav1st}>
            <div>
              {/* <Image src={me.user?.image} alt="ProfilePic" width={100} /> */}
            </div>
            <div>
              별점
              {/* {me.user?.star} */}
            </div>
          </div>
          <div className={styles.profileInfo}>
            {/* <div>닉네임:{me.user?.id}</div> */}
            <div>
              보유 포인트:
              {/* {formattedAuctionCurrentPoint} */}
            </div>
            <div>
              구독 만료 일자:
              {/* {me.user?.sub} */}
            </div>
            <Link href="/chargepoint">
              <div>충전하기</div>
            </Link>
            <Link href="/membership">
              <div>멤버쉽 구독</div>
            </Link>
          </div>
        </div>
        <div className={styles.sideButton}>
          <Link href="/withdraw">
            <button className="btn-basic" type="button">
              출금하기
            </button>
          </Link>
          {/* <button className="btn-basic" type="button" onClick={onLogout}>
            로그아웃
          </button> */}
          <button className="btn-basic" type="button">
            회원탈퇴
          </button>
        </div>
      </div>

      <div className={styles.vipCheck}>
        유명인 심사중입니다.
        <br />
        좋은 결과를 기대해주세요 ^^
      </div>
      <div>
        {/* <FollowContainer user={user} />
        <FollowContainer user={user} />
        <FollowContainer user={user} />
        <FollowContainer user={user} />
        <FollowContainer user={user} /> */}
      </div>
    </div>
  );
};

export default SideNav;
