import Link from "next/link";
import "../Menu/myPageMenu.css";

const MyPageMenu = () => {
  return (
    <div className="MenuContainer">
      <Link href="/usermypage">
        <button className="btn-basic">식사권</button>
      </Link>
      <Link href="/userreview">
        <button className="btn-basic">리뷰</button>
      </Link>
      <Link href="/userauction/proceeding">
        <button className="btn-basic">경매</button>
      </Link>
    </div>
  );
};

export default MyPageMenu;
