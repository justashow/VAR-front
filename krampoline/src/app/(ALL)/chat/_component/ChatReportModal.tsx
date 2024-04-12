import React, { useState } from "react";
import styles from "./chatReportModal.module.css";
const ReportModal = ({ onReportClose }: { onReportClose: () => void }) => {
  // 버튼 선택 상태를 저장하는 상태
  const [selectedReason, setSelectedReason] = useState<string | null>(null);

  // 리포트 이유를 설정하는 함수
  const handleReasonSelect = (reason: string) => {
    setSelectedReason(reason);
  };

  // 폼 제출 핸들러
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // 폼 제출의 기본 동작 방지
    // 제출 로직 구현
    console.log("Report submitted with reason:", selectedReason);
    onReportClose(); // 모달 닫기
  };

  return (
    <div>
      <div>유명인과의 만남이 불편하셨나요?</div>
      <form onSubmit={handleSubmit} className={styles.ReportContainer}>
        <div className={styles["Report-Group"]}>
          <button
            type="button"
            className={`btn-basic ${
              selectedReason === "abuse" ? "selected" : ""
            }`}
            onClick={() => handleReasonSelect("abuse")}
          >
            폭언욕설
          </button>
          <button
            type="button"
            className={`btn-basic ${
              selectedReason === "transaction" ? "selected" : ""
            }`}
            onClick={() => handleReasonSelect("transaction")}
          >
            금전거래 요청
          </button>
          <button
            type="button"
            className={`btn-basic ${
              selectedReason === "other" ? "selected" : ""
            }`}
            onClick={() => handleReasonSelect("other")}
          >
            기타
          </button>
        </div>
        <input type="text" placeholder="상세 내용을 입력해주세요." />
        <button type="submit" className="btn-basic">
          제출
        </button>
      </form>
    </div>
  );
};

export default ReportModal;
