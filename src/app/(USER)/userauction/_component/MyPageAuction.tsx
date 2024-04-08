import Link from "next/link";
import MyPageAuctionBox from "./MyPageAuctionBox";
import MyPageMenu from "../../../_component/Menu/MyPageMenu";
import styles from "./myPageAuction.module.css";

const MyPageAuction = () => {
  return (
    <div>
      <div>
        <MyPageMenu />
      </div>
      <div className={styles["Auction-menu"]}>
        <div className={styles["Auction-btn"]}>
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
