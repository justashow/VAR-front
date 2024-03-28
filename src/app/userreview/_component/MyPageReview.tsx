import MyPageMenu from "../../../app/_component/Menu/MyPageMenu";
import ReviewBox from "../../../app/_component/ReviewBox";
import "./myPageReview.css";

const MyPageReview = () => {
  return (
    <div>
      <div>
        <MyPageMenu />
      </div>
      <div className="ReviewMenu">
        <div className="Review-btn">
          <button className="btn-basic">받은 리뷰</button>
          <button className="btn-basic">내가 쓴 리뷰</button>
        </div>
      </div>
      <ReviewBox />
      <ReviewBox />
      <ReviewBox />
      <ReviewBox />
      <ReviewBox />
      <ReviewBox />
      <ReviewBox />
      <ReviewBox />
      <ReviewBox />
      <ReviewBox />
      <div>페이지 네이션 이동</div>
    </div>
  );
};

export default MyPageReview;
