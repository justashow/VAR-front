import { ReactNode } from "react";
import Navbar from "../_component/Nav/Navbar";
import "./layout.css";
import Carousel from "../_component/Carousel/Carousel";

export default function Layout({
  children,
}: // modal,
{
  children: ReactNode;
  // modal: ReactNode;
}) {
  return (
    <div>
      <div className="NavMenuContainer">
        <nav>
          <Navbar />
        </nav>
      </div>
      <div className="list-container">
        <Carousel />
        <main className="list-main"> {children}</main>
      </div>

      {/* {modal} */}
    </div>
  );
}
