import styles from "./ticketBox.module.css";
import ProfilePic from "../../../public/user.png";
import Image from "next/image";
import Link from "next/link";

const user = {
  profile: ProfilePic,
  star: 4.5,
  nickName: "danny",
  date: Date(),
  address: "인천시 부평구 산곡동",
};

const TicketBox = () => {
  return (
    <div>
      <div className={styles.TicketBoxContainer}>
        <div className={styles.ProfilePic}>
          <Image src={user.profile} alt="ProfilePic" width={100} />
        </div>

        <div>
          <div className={styles.Profile}>
            <h2>{user.nickName}</h2>
            <div>{user.star}</div>
          </div>
          <div>{user.date}</div>
          <div>{user.address}</div>
          <div>
            <Link href="/ticketdetail">상세 보기 </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketBox;
