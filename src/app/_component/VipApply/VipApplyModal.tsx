import React, { useState } from "react";
import styles from "./vipApplyModal.module.css";

const user = {
  nickname: "dannyday",
  email: "dannyday@gmail.com",
};

const reasons = [
  "개발/프로그래밍",
  "게임 개발",
  "회계",
  "데이터 사이언스",
  "주식",
  "직무/마케팅",
  "학문/외국어",
  "커리어",
  "기타",
];

const VipApplyModal = ({ closeModal }: { closeModal: () => void }) => {
  // 버튼 선택 상태를 저장하는 상태
  const [selectedReason, setSelectedReason] = useState<string | null>(null);

  // 리포트 이유를 설정하는 함수
  const handleReasonSelect = (
    event: React.MouseEvent<HTMLButtonElement>,
    reason: string
  ) => {
    event.preventDefault(); // 기본 이벤트 중단
    setSelectedReason(reason);
  };

  // 폼 제출 핸들러
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // 폼 제출의 기본 동작 방지
    closeModal(); // 모달 닫기
  };

  return (
    <div className={styles.vipApplyContainer}>
      <div className={styles.vipApplyTitle}>
        <h1> 안녕하세요,{user.nickname} 님 </h1>
        <div> VIP 신청을 위해서는 아래 정보가 필요해요. </div>
      </div>
      <form onSubmit={handleSubmit} className={styles.vipApplyTitleContainer}>
        <div>
          <div className={styles.vipApplyTitle}>VAR 계정</div>
          <input placeholder={user.email} disabled />
        </div>
        <div>
          <div className={styles.vipApplyTitle}>연락 받을 이메일</div>
          <input placeholder="자주 사용하는 이메일을 입력해주세요." />
        </div>
        <div>
          <div className={styles.vipApplyTitle}>VIP의 실명 또는 사업체명</div>
          <div className={styles.vipApplySubTitle}>
            서비스 상 노출되는 닉네임이 아닌 계약자명이니 신중하게 작성해
            주세요.
          </div>
          <input placeholder="VIP 이름 또는 사업체명을 입력해주세요." />
        </div>
        <div>
          <div className={styles.vipApplyTitle}>연락처</div>
          <input type="number" placeholder="000-0000-0000" />
        </div>

        <div>
          <div className={styles.vipApplyTitle}>희망분야</div>
          <div className={styles.vipApplySubTitle}>
            VIP의 직무와 연관된 분야를 골라주세요
          </div>
          <article className={styles["VipApply-Group"]}>
            {reasons.map((reason) => (
              <button
                key={reason}
                type="button"
                className={`btn-basic ${
                  selectedReason === reason ? "selected" : ""
                }`}
                onClick={(e) => handleReasonSelect(e, reason)}
              >
                {reason}
              </button>
            ))}
          </article>
        </div>
        <div className={styles["input-group"]}>
          <div className={styles.vipApplyTitle}>나를 소개하는 글</div>
          <div className={styles.vipApplySubTitle}>
            VIP에 대한 소개와, 사용자와의 만남을 통해 추구하는 내용을 가능한
            상세하게 적어주시면 구체적인 안내를 받을 수 있습니다.
          </div>
          <textarea placeholder="" />
        </div>
        <div>
          <div className={styles.vipApplyTitle}>자신을 표현할 수 있는 링크</div>
          <input placeholder="블로그 및 개인 페이지 링크" />
        </div>
        <div className={styles.SubmitButton}>
          <button type="submit" className="btn-basic">
            제출
          </button>
        </div>
      </form>
    </div>
  );
};

export default VipApplyModal;
