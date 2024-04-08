import React, { useState } from "react";
import styles from "./reportModal.module.css";
const ReportModal = ({ onReportClose }: { onReportClose: any }) => {
  // 상태를 사용하여 선택된 파일 정보를 저장
  const [selectedFile, setSelectedFile] = useState(null);

  // 파일이 선택되었을 때 실행될 핸들러
  const handleFileChange = (event: any) => {
    // 선택된 파일이 있으면, 상태를 업데이트
    if (event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    } else {
      setSelectedFile(null);
    }
  };

  // 폼 제출 핸들러
  const handleSubmit = (event: any) => {
    event.preventDefault(); // 폼 제출의 기본 동작 방지

    // FormData 객체를 사용하여 파일 데이터 포함
    const formData = new FormData();
    if (selectedFile) {
      formData.append("photo", selectedFile);
    }

    // 추가 데이터 필드가 있다면 formData에 추가
    // 예: formData.append("otherField", value);

    // formData를 사용하여 서버에 파일 및 다른 데이터 제출
    // 예: axios.post('/api/upload', formData, config)
    console.log("Form submitted", formData);
  };

  return (
    <div>
      <div>유명인과의 만남이 불편하셨나요?</div>
      <form onSubmit={handleSubmit} className={styles.ReportContainer}>
        <input type="file" onChange={handleFileChange} />
        <input type="text" />
        <button type="submit" className="btn-basic" onClick={onReportClose}>
          제출
        </button>
      </form>
    </div>
  );
};

export default ReportModal;
