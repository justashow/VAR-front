import AuctionBox from "@/app/_component/Auction/AuctionBox";
import "./vipPageAuctionBox.css";

const VipPageAuctionBox = () => {
  return (
    <div>
      <div className="auctionWrapper">
        <div className="auctionContainer">
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

export default VipPageAuctionBox;
