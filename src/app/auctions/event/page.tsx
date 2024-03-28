import AuctionBox from "@/app/_component/Auction/AuctionBox";

import "./page.css";
import SearchBar from "@/app/_component/SearchBar";
import Carousel from "@/app/_component/Carousel/Carousel";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <div className="CarouselContainer">
        <Carousel />
      </div>
      <div className="AuctionListInfo">
        <h1>이벤트 경매</h1>
        <div>
          <button className="btn-basic">
            <Link href="/addauction">경매 올리기</Link>
          </button>
        </div>
      </div>
      <div className="ListUtil">
        <SearchBar />
        <div className="ListUtilButton">
          <button className="btn-basic">인기경매순</button>
          <button className="btn-basic">마감임박순</button>
          <button className="btn-basic">신규경매순</button>
        </div>
      </div>

      <div className="ListWrapper">
        <div className="VipList">
          <AuctionBox />
          <AuctionBox />
          <AuctionBox />
          <AuctionBox />
          <AuctionBox />
          <AuctionBox />
          <AuctionBox />
          <AuctionBox />
          <AuctionBox />
          <AuctionBox />
          <AuctionBox />
          <AuctionBox />
          <AuctionBox />
          <AuctionBox />
          <AuctionBox />
          <AuctionBox />
          <AuctionBox />
          <AuctionBox />
          <AuctionBox />
          <AuctionBox />
        </div>
      </div>
    </div>
  );
};

export default page;
