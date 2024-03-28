"use client";

import "./auctionBox.css";
import ProfilePic from "../../../../public/user.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const AuctionBox = () => {
  const twoHoursInMs = 2 * 60 * 60 * 1000;
  const [timeLeft, setTimeLeft] = useState(twoHoursInMs);

  useEffect(() => {
    // 타이머가 마운트되면 시작합니다.
    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newTime = prevTime - 1000;
        // 시간이 다 되면 인터벌을 정지합니다.
        if (newTime <= 0) {
          clearInterval(timerId);
          return 0;
        }
        return newTime;
      });
    }, 1000);

    // 컴포넌트가 언마운트될 때 인터벌을 정리합니다.
    return () => clearInterval(timerId);
  }, []);

  // 시간을 hh:mm:ss 형식으로 변환합니다.
  const formatTime = (time: number) => {
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const user = {
    profile: ProfilePic,
    nickname: "John Ahn",
    state: "경매 진행중",
    auctionTime: timeLeft,
    auctionCurrentMoney: 100000,
    auctionTry: 63,
  };
  const formattedAuctionCurrentMoney =
    user.auctionCurrentMoney.toLocaleString();
  return (
    <div className="AuctionWrapper">
      <div className="AuctionContainer">
        <div className="AuctionProfile">
          <Image src={user.profile} alt="ProfilePic" width={100} />
        </div>
        <div className="AuctionTitle">{user.nickname}</div>
        <hr></hr>
        <div className="AuctionInfo">
          <div>{user.state}</div>
          <div>남은 시간: {formatTime(user.auctionTime)}</div>
          <div>현재 입찰 금액: {formattedAuctionCurrentMoney} 원</div>
          <div>입찰 수: {user.auctionTry} 회</div>
        </div>
        <Link href="/auctionInfo">
          <div className="AuctionFigure">상세보기</div>
        </Link>
      </div>
    </div>
  );
};

export default AuctionBox;
