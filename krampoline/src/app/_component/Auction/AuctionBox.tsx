// "use client";

// import styles from "./auctionBox.module.css";
// import ProfilePic from "../../../../public/user.png";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { Auctions } from "@/models/Auctions";

// type Props = {
//   auctions: Auctions;
// };

// const AuctionBox = ({ auctions }: Props) => {
//   const auction = auctions;

//   const auctionEndTime =
//     new Date(auctions.createdTime).getTime() + 3 * 24 * 60 * 60 * 1000; // 3일을 밀리초로 계산하여 더합니다.
//   const [timeLeft, setTimeLeft] = useState(
//     auctionEndTime - new Date().getTime()
//   );

//   useEffect(() => {
//     const timerId = setInterval(() => {
//       setTimeLeft(auctionEndTime - new Date().getTime());

//       // 시간이 다 되면 인터벌을 정지합니다.
//       if (timeLeft <= 0) {
//         clearInterval(timerId);
//       }
//     }, 1000);

//     // 컴포넌트가 언마운트될 때 인터벌을 정리합니다.
//     return () => clearInterval(timerId);
//   }, [timeLeft]);

//   // 시간을 hh:mm:ss 형식으로 변환합니다.
//   const formatTime = (time: number) => {
//     if (time < 0) {
//       return "00:00:00"; // 시간이 다 되었다면 00:00:00을 표시합니다.
//     }
//     const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
//     const minutes = Math.floor((time / (1000 * 60)) % 60);
//     const seconds = Math.floor((time / 1000) % 60);
//     return `${hours.toString().padStart(2, "0")}:${minutes
//       .toString()
//       .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
//   };

//   const formattedAuctionCurrentMoney =
//     auction.currentHighestBidAmount.toLocaleString();
//   return (
//     <div className={styles.AuctionWrapper}>
//       <div className={styles.AuctionContainer}>
//         <div className={styles.AuctionProfile}>
//           <Image src={auction.profileImgUrl} alt="ProfilePic" width={100} />
//         </div>
//         <div className={styles.AuctionTitle}>{auction.vipNickname}</div>
//         <hr></hr>
//         <div className={styles.AuctionInfo}>
//           {/* <div>{user.state}</div> */}
//           <div>남은 시간: {formatTime(timeLeft)}</div>
//           <div>현재 입찰 금액: {formattedAuctionCurrentMoney} 원</div>
//           <div>입찰 수: {auction.bidCount} 회</div>
//         </div>
//         <Link href="/auctionInfo">
//           <div className={styles.AuctionFigure}>상세보기</div>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default AuctionBox;
