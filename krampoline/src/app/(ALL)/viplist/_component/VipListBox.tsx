import styles from "./vipListBox.module.css";
import ProfilePic from "../../../../../public/user.png";
import Image from "next/image";
import Link from "next/link";
import { VipBox } from "@/models/VipBox";

type Props = {
  vipBox: VipBox;
};
const VipListBox = ({ vipBox }: Props) => {
  const vip = vipBox;

  return (
    <div>
      <div className={styles.ListBoxContainer}>
        <div>
          <Link href="/vipinfo">
            <Image
              src={
                vip.profileImgUrl.startsWith("http")
                  ? vip.profileImgUrl
                  : ProfilePic
              }
              alt="ProfilePic"
              width={100}
              height={100}
              unoptimized={true}
            />
          </Link>
        </div>
        <div>{vip.vipNickname}</div>
        <div>{vip.vipRate || "미지정"}</div>
        <button className="btn-basic">팔로우</button>
      </div>
    </div>
  );
};

export default VipListBox;
