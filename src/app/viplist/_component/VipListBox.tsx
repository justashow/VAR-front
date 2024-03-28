import "./vipListBox.css";
import ProfilePic from "../../../../public/user.png";
import Image from "next/image";
import Link from "next/link";

const VipListBox = () => {
  const user = {
    profile: ProfilePic,
    nickname: "John Ahn",
    star: 4.5,
  };

  return (
    <div>
      <div className="ListBoxContainer">
        <div>
          <Link href="/vipinfo">
            <Image src={user.profile} alt="ProfilePic" width={100} />{" "}
          </Link>
        </div>
        <div>{user.nickname}</div>
        <div>{user.star}</div>
        <button className="btn-basic">팔로우</button>
      </div>
    </div>
  );
};

export default VipListBox;
