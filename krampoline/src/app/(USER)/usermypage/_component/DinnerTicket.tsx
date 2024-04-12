import MyPageMenu from "@/app/_component/Menu/MyPageMenu";
import styles from "./dinnerTicket.module.css";
import TicketBox from "@/app/_component/TicketBox";

const DinnerTicket = () => {
  return (
    <div>
      <div>
        <MyPageMenu />
      </div>
      <div className={styles.dinnerTicketContainer}>
        <div className={styles.dinnerTicketFilter}>
          <button className="btn-basic">컨테이너 검색</button>
          <button className="btn-basic">필터</button>
        </div>
        <TicketBox />
        <TicketBox />
        <TicketBox />
        <TicketBox />
        <TicketBox />
        <TicketBox />
        <TicketBox />
        <div>페이지 네이션 이동</div>
      </div>
    </div>
  );
};

export default DinnerTicket;
