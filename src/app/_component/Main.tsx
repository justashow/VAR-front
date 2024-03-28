"use client";

import Image from "next/image";
import CarouselMain from "./Carousel/CarouselMain";
import "./main.css";
import banner from "../../../public/banner.jpg";
import MainUserInfo from "./MainUserInfo";

const Main = () => {
  return (
    <div className="MainContainer">
      <div className="MainBannerContainer">
        <div className="MainBanner">
          <Image src={banner} alt="banner" layout="fill" objectFit="cover" />
        </div>
      </div>
      <div className="SecondSection">
        <div className="MainCarousel">
          <CarouselMain />
        </div>
        <div className="MainUser">
          <MainUserInfo />
        </div>
      </div>
      <div className="MainAbout">
        <div>Main 디자인</div>
      </div>
    </div>
  );
};

export default Main;
