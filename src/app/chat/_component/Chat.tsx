"use client";
import React, { useState } from "react";
import "./chat.css"; // CSS 파일 경로는 실제 위치에 맞게 조정하세요.
import ReportModal from "./ChatReportModal";
import Modal from "react-modal";
import { useRouter } from "next/navigation";

const Chat = () => {
  const [isOpenReportModal, setIsOpenReportModal] = useState<boolean>(false); // Report 모달 상태
  const [messages, setMessages] = useState([
    { id: 1, text: "안녕하세요, 어떻게 도와드릴까요?", sender: "other" },
    { id: 2, text: "문의사항이 있어서요!", sender: "me" },
    // 기타 예시 메시지 추가 가능
  ]);
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  const goBack = () => {
    router.back(); // 이전 페이지로 이동
  };

  const openReportModal = () => {
    setIsOpenReportModal(true);
  };

  const closeReportModal = () => {
    setIsOpenReportModal(false);
  };

  const handleSend = () => {
    if (inputValue.trim() === "") return;
    const newMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: "me",
    };
    setMessages([...messages, newMessage]);
    setInputValue("");
  };

  return (
    <div className="chatContainer">
      <div className="chatHeader">
        <button onClick={goBack} className="btn-basic">
          뒤로가기
        </button>
        <button onClick={openReportModal} className="btn-basic">
          신고하기
        </button>
      </div>
      <div className="chatBody">
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.sender}`}>
            <span className="messageContent">{message.text}</span>
          </div>
        ))}
      </div>
      <div className="chatFooter">
        <input
          type="text"
          className="messageInput"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend} className="btn-basic">
          보내기
        </button>
      </div>
      <Modal
        className="modal-content"
        isOpen={isOpenReportModal}
        onRequestClose={closeReportModal}
        ariaHideApp={false}
        overlayClassName="modal-overlay"
      >
        <div className="modal-inner-content">
          <ReportModal onReportClose={closeReportModal} />
        </div>
      </Modal>
    </div>
  );
};

export default Chat;
