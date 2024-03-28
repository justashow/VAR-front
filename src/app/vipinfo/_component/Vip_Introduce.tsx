import React from "react";
import "./introduce.css";

const introduction = {
  text: `소개
  
  안녕하세요. 
  즐겁게 개발하고 있는 개발자입니다. 
  앞으로 많은 도움을 드릴 수 있었으면 좋겠습니다.
  
  - 따라하며 배우는 도커와 CI환경 저자
  - 카카오 기업 신입 공채 FE 교수자
  - 패스트캠퍼스, 구름 강사 
  - 현대자동차 개발 기업 교육
  - 신한은행 메타버스, 코빗 타운 풀스택 개발
  - 여러 공공기관 SNS 풀스택 개발`,
};

const Vip_Introduce = () => {
  //----------------------------------------------------------------문단 나누기
  // 여기에서 문단을 나눕니다. 각 문단은 두 개의 줄바꿈으로 구분됩니다.
  const paragraphs = introduction.text.split("\n\n").map((paragraph, index) => (
    // 각 문단을 <p> 태그로 래핑합니다. key는 각 요소를 구별하기 위해 필요합니다.
    <p key={index}>
      {paragraph.split("\n").map((line, lineIndex) => (
        // 각 라인을 <span> 태그로 래핑하고, 줄바꿈을 위해 뒤에 <br/>를 추가합니다.
        // 마지막 라인에는 <br/>를 추가하지 않습니다.
        <React.Fragment key={lineIndex}>
          {line}
          {lineIndex < paragraph.split("\n").length - 1 && <br />}
        </React.Fragment>
      ))}
    </p>
  ));
  //--------------------------------------------------------

  return (
    <div className="IntroduceContainer">
      <div className="IntroduceBox">{paragraphs}</div>
    </div>
  );
};

export default Vip_Introduce;
