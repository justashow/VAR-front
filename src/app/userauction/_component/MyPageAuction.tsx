import Link from "next/link";
import MyPageAuctionBox from "./MyPageAuctionBox";
import MyPageMenu from "../../../app/_component/Menu/MyPageMenu";
import "./myPageAuction.css";

const MyPageAuction = () => {
  return (
    <div>
      <div>
        <MyPageMenu />
      </div>
      <div className="Auction-menu">
        <div className="Auction-btn">
          <Link href="/userauction/proceeding">
            <button className="btn-basic">참여중인 경매</button>
          </Link>
          <Link href="/userauction/successful-bid">
            <button className="btn-basic">낙찰받은 경매</button>
          </Link>
        </div>
      </div>
      <MyPageAuctionBox />
      <div>페이지 네이션 이동</div>
    </div>
  );
};

export default MyPageAuction;
