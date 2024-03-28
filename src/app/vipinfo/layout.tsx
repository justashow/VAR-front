import { ReactNode } from "react";
import Navbar from "../_component/Nav/Navbar";
import Vip_Info_SideNav from "./_component/Vip_Info_SideNav";
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
                <Vip_Info_SideNav />
              </nav>
            </div>
          </section>
        </header>
        <div className="rightSectionWrapper">
          <main className="main"> {children}</main>
        </div>

        {/* {modal} */}
      </div>
    </div>
  );
}
