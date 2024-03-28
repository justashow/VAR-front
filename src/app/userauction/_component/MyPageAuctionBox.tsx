import AuctionBox from "../../../app/_component/Auction/AuctionBox";
import "./myPageAuctionBox.css";

const MyPageAuctionBox = () => {
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

export default MyPageAuctionBox;
