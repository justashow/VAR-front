import Link from "next/link";
import MyPageAuctionBox from "./VipPageAuctionBox";

import styles from "./vipPageAuction.module.css";
import VipPageMenu from "@/app/_component/Menu/VipPageMenu";

const VipPageAuction = () => {
  return (
    <div>
      <div>
        <VipPageMenu />
      </div>
      <div className={styles["Auction-menu"]}>
        <div className={styles["Auction-btn"]}>
          <Link href="/vipauction/proceeding">
            <button className="btn-basic">참여중인 경매</button>
          </Link>
          <Link href="/vipauction/successful-bid">
            <button className="btn-basic">낙찰받은 경매</button>
          </Link>
          <Link href="/vipauction/false-bid">
            <button className="btn-basic">유찰된 경매</button>
          </Link>
        </div>
      </div>
      <MyPageAuctionBox />
      <div>페이지 네이션 이동</div>
    </div>
  );
};

export default VipPageAuction;
