"use client";

import Image from "next/image";
import "./reviewBox.css";
import ProfilePic from "../../../public/user.png";
import React, { useEffect, useState } from "react";

const ReviewBox = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div className="ReviewContainer">
        <div className="ReviewBox">
          <div className="ReviewProfile">
            <div>John Ahn과의 식사권</div>
            <div>2024.03.06</div>
            {isExpanded && (
              <div className="ReviewProfileExpanded">
                <Image src={ProfilePic} alt="ProfilePic" width={100} />
                <div>장소: 경기도 판교</div>
                <div>경매기간: 03.05~03.08</div>
                <div>낙찰금액: 500,000포인트</div>
              </div>
            )}
          </div>
          <div>
            <div className="ReviewInfo">
              <div>VIP JohnAhn</div>
              <div>별점: 4.5</div>
            </div>
            <div className={`ReviewTitle ${isExpanded ? "" : "collapsed"}`}>
              밥 사줬더니 투덜됐음 아이 생각에 종일 일이 손에 잡히지
              않으셨겠어요ㅠ 아무리 한다고 해도 엄마 만큼은 안되겠지만, 저희가
              흰죽을 준비할 때는 쾌유를 바라는 마음을 담아서 더" 정성껏 준비하고
              있답니다. 아이 말끔히 나아서 내일은 짱짱이님이 가벼운 마음으로
              출근하시길 바라요
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
