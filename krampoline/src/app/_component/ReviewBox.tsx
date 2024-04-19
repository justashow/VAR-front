"use client";

import Image from "next/image";
import styles from "./reviewBox.module.css";
import ProfilePic from "../../../public/user.png";
import React, { useEffect, useState } from "react";
import { UserMyPageReview } from "@/models/UserMyPageReview";

type Props = {
  reviewBox: UserMyPageReview;
};

const ReviewBox = ({ reviewBox }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div className={styles.ReviewContainer}>
        <div className={styles.ReviewBox}>
          <div className={styles.ReviewProfile}>
            <div>John Ahn과의 식사권</div>
            <div>2024.03.06</div>
            {isExpanded && (
              <div className={styles.ReviewProfileExpanded}>
                <Image src={ProfilePic} alt="ProfilePic" width={100} />
                <div>장소: 경기도 판교</div>
                <div>경매기간: 03.05~03.08</div>
                <div>낙찰금액: 500,000포인트</div>
              </div>
            )}
          </div>
          <div>
            <div className={styles.ReviewInfo}>
              <div> {reviewBox.writerNickname}</div>
              <div> {reviewBox.reviewRating}</div>
            </div>
            <div className={`ReviewTitle ${isExpanded ? "" : "collapsed"}`}>
              {reviewBox.reviewContent}
            </div>
          </div>
          <button className="btn-basic" onClick={toggleExpand}>
            {isExpanded ? "-" : "+"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewBox;
