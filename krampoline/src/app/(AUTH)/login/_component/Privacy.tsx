"use client";

import React, { useState } from "react";
// import "./faq.css";
import styles from "./faq.module.css";
import privacy1 from "/public/privacy1.jpg";
import privacy2 from "/public/privacy2.jpg";
import privacy3 from "/public/privacy3.jpg";
import privacy4 from "/public/privacy4.jpg";
import privacy5 from "/public/privacy5.jpg";
import Image from "next/image";

const FaqItem = ({
                     question,
                     answer
                 }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className={styles.FAQSelect} onClick={toggleOpen}>
                <div>{question}</div>
                <div>{isOpen ? "-" : "+"}</div>
            </div>
            {isOpen && <div className={styles.FAQText}>{answer}</div>}
        </>
    );
};

const Privacy = () => {
    const faqs = [
        { question: "개인정보 처리방침", answer:
                [
                    <Image src={privacy1} alt="privacy1" height={1920}  priority key={1}/>,
                    <Image src={privacy2} alt="privacy2" height={1920}  priority key={2}/>,
                    <Image src={privacy3} alt="privacy3" height={1920}  priority key={3}/>,
                    <Image src={privacy4} alt="privacy4" height={1920}  priority key={4}/>,
                    <Image src={privacy5} alt="privacy5" height={1920}  priority key={5}/>
                ]
        },
    ];

    return (
        <div className={styles.FAQBoard}>
            <div className={styles.FAQContainer}>
                {faqs.map((faq, index) => (
                    <FaqItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </div>
    );
};

export default Privacy;
