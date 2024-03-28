"use client";

import "./auctionInfo_box.css";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

type Props = {
  user: {
    profile: StaticImageData;
    nickname: string;
    maxBid: number;
    sub: string;
    star: number;
    auctionTime: number;
    period: string;
    address: string;
  };
};

//----------------------------------------------------------------시간 폼
const AuctionInfo_box = ({ user }: Props) => {
  // 시간을 hh:mm:ss 형식으로 변환합니다.
  const formatTime = (time: number) => {
    const hours: number = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes: number = Math.floor((time / (1000 * 60)) % 60);
    const seconds: number = Math.floor((time / 1000) % 60);
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  //----------------------------------------------------------------돈 단위

  const formattedAuctionCurrentBid: string = user.maxBid.toLocaleString();

  //----------------------------------------------------------------

  return (
    <div className="AuctionInfo_box_Container">
      <div className="AuctionInfo_box_TimeOut">
        남은 시간: {formatTime(user.auctionTime)}
      </div>
      <div className="AuctionInfo_box_User">
        <div>{user.nickname}</div>
        <div>{user.star}</div>
      </div>
      <div className="AuctionInfo_box_Info">
        <div>날짜: {user.sub}</div>
        <div>장소: {user.address}</div>
        <div>경매기간: {user.period}</div>
      </div>
      <div className="AuctionInfo_box_MaxBid">
        현재 최고입찰가: {formattedAuctionCurrentBid} 원
      </div>
      <Link href="/auctionInfo">
        <button className="btn-basic">경매 참여하기</button>
      </Link>
    </div>
  );
};

export default AuctionInfo_box;
