"use client";

import React, { MutableRefObject, useRef } from "react";
import Image from "next/image";
import AuctionInfo from "../../_component/Auction/AuctionInfo";
import AuctionInfo_Img from "/public/상세정보.png";
import AuctionInfo_warning from "/public/주의사항.jpeg";
import ScrollToTopButton from "../../_component/ScrollToTopButton";

const Page = () => {
  const auctionInfoRef = useRef<HTMLDivElement | null>(null);
  const auctionWarningRef = useRef<HTMLDivElement | null>(null);

  const scrollToAuctionInfo = () => {
    if (auctionInfoRef.current) {
      // auctionInfoRef.current가 존재하는지 확인
      auctionInfoRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAuctionWarning = () => {
    if (auctionWarningRef.current) {
      // auctionWarningRef.current가 존재하는지 확인
      auctionWarningRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <div>
        <AuctionInfo />
      </div>
      <div>
        <button className="btn-basic" onClick={scrollToAuctionInfo}>
          이 만남은 이런거에요
        </button>
        <button className="btn-basic" onClick={scrollToAuctionWarning}>
          이것 만큼은 지켜주세요
        </button>
      </div>
      <div ref={auctionInfoRef}>
        <Image src={AuctionInfo_Img} alt="AuctionInfo_Img" width={600} />
      </div>
      <div ref={auctionWarningRef}>
        <Image
          src={AuctionInfo_warning}
          alt="AuctionInfo_warning"
          width={600}
        />
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default Page;
