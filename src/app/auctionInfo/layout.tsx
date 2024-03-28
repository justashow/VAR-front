import { ReactNode } from "react";
import Navbar from "../_component/Nav/Navbar";
import SideNav from "../_component/Nav/SideNav";
import "./layout.css";

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
      <div className="container">
        <header className="leftSectionWrapper">
          <section className="leftSection">
            <div className="leftSectionFixed">
              <nav>
                <SideNav />
              </nav>
            </div>
          </section>
        </header>
        <div className="rightSectionWrapper">
          <main className="main-auctionInfo"> {children}</main>
        </div>
        {/* {modal} */}
      </div>
    </div>
  );
}
