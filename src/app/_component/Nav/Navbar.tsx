"use client";

import Image from "next/image";
import "./navbar.css";
import Link from "next/link";
import Logo from "../../../../public/Logo.png";
import Modal from "react-modal";
import { useState } from "react";
import VipApplyModal from "../VipApply/VipApplyModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false); //추가
  // 모달을 닫는 함수
  const closeModal = () => {
    setIsOpen(false);
  };

  const toggle = () => {
    console.log("VIP Apply clicked");
    setIsOpen(!isOpen);
  };

  return (
    <div className="NavContainer">
      <Link href="/">
        <Image src={Logo} alt="Logo" height={40} />
      </Link>
      <div className="NavMenu">
        <div onClick={toggle}>VIP Apply</div>

        <div>
          <Link href="/auctions/original">Auction </Link>
        </div>
        <div>
          <Link href="/auctions/event">Special Auction </Link>
        </div>
        <div>
          <Link href="/viplist">Vip List </Link>
        </div>
      </div>
      <div className="NavMenu2">
        <div>
          <Link href="/usermypage">My Page </Link>
        </div>

        <div>
          <Link href="/faq">FAQ </Link>
        </div>
        <div>로그아웃</div>
      </div>
      <Modal
        className="modal-content"
        isOpen={isOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        overlayClassName="modal-overlay"
      >
        <div className="modal-inner-content">
          <VipApplyModal closeModal={closeModal} />
        </div>
      </Modal>
    </div>
  );
};

export default Navbar;
