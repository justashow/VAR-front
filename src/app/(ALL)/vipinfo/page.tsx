// import AuctionBox from "../../_component/Auction/AuctionBox";
import ReviewBox from "../../_component/ReviewBox";
import Vip_Introduce from "./_component/Vip_Introduce";

const page = () => {
  return (
    <div>
      <Vip_Introduce />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{ alignSelf: "flex-start" }}>경매</h1>
        {/* <AuctionBox /> */}
      </div>
      <h1>리뷰</h1>
      <ReviewBox />
      <ReviewBox />
      <ReviewBox />
      <ReviewBox />
      <ReviewBox />
      <ReviewBox />
    </div>
  );
};

export default page;
