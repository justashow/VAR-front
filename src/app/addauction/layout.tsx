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
      <div className="AddAuction-container">
        <main className="main-AddAuction"> {children}</main>
      </div>

      {/* {modal} */}
    </div>
  );
}
