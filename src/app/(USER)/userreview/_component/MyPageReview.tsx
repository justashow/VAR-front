import MyPageMenu from "@/app/_component/Menu/MyPageMenu";
import styles from "./myPageReview.module.css";
import ReviewBox from "@/app/_component/ReviewBox";

const MyPageReview = () => {
  return (
    <div>
      <div>
        <MyPageMenu />
      </div>
      <div className={styles.ReviewMenu}>
        <div className={styles["Review-btn"]}>
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
