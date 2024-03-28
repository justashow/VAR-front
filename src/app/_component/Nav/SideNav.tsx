import Image from "next/image";
import ProfilePic from "../../../../public/user.png";
import "./sideNav.css";
import FollowContainer from "../Follow/FollowContainer";
import Link from "next/link";

const SideNav = () => {
  //----------------------------------------------------------------날짜 형식
  const today = new Date();
  const year = today.getFullYear();
  const month = ("0" + (today.getMonth() + 1)).slice(-2);
  const day = ("0" + today.getDate()).slice(-2);
  const dateString = year + "-" + month + "-" + day;
  //----------------------------------------------------------------

  const user = {
    profile: ProfilePic,
    nickname: "John Ahn",
    point: 50000,
    sub: dateString,
    star: 4.5,
  };

  //----------------------------------------------------------------돈 단위
  const formattedAuctionCurrentPoint = user.point.toLocaleString();
  //----------------------------------------------------------------

  return (
    <div className="SideNavContainer">
      <div>
        <div className="SideNavProfile">
          <div className="SideNav1st">
            <div>
              <Image src={user.profile} alt="ProfilePic" width={100} />
            </div>
            <div>별점{user.star}</div>
          </div>
          <div className="ProfileInfo">
            <div>닉네임:{user.nickname}</div>
            <div>보유 포인트:{formattedAuctionCurrentPoint}</div>
            <div>구독 만료 일자:{user.sub}</div>
            <Link href="/chargepoint">
              <div>충전하기</div>
            </Link>
            <Link href="/membership">
              <div>멤버쉽 구독</div>
            </Link>
          </div>
        </div>
        <div className="SideButton">
          <Link href="/withdraw">
            <button className="btn-basic" type="button">
              출금하기
            </button>
          </Link>
          <button className="btn-basic" type="button">
            로그아웃
          </button>
          <button className="btn-basic" type="button">
            회원탈퇴
          </button>
        </div>
      </div>

      <div className="VIPCheck">
        유명인 심사중입니다.
        <br />
        좋은 결과를 기대해주세요 ^^
      </div>
      <div>
        <FollowContainer user={user} />
        <FollowContainer user={user} />
        <FollowContainer user={user} />
        <FollowContainer user={user} />
        <FollowContainer user={user} />
      </div>
    </div>
  );
};

export default SideNav;
