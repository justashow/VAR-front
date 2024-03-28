import Image, { StaticImageData } from "next/image";
import "../Follow/followContainer.css";

//타입스크립트 타입지정 부분
type Props = {
  user: {
    profile: StaticImageData;
    nickname: string;
    point: number;
    sub: string;
    star: number;
  };
};

const FollowContainer = ({ user }: Props) => {
  return (
    <div className="VIPFallowList">
      <div className="VIPFallowContainer">
        <div>
          <Image src={user.profile} alt="ProfilePic" width={40} />
        </div>
        <div>{user.nickname}</div>
        <button className="btn-basic">팔로잉 중</button>
      </div>
      <hr />
    </div>
  );
};

export default FollowContainer;
