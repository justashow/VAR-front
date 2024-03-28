import { ReactNode } from "react";
import Navbar from "../_component/Nav/Navbar";
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
      <div className="list-container">
        <main className="list-main"> {children}</main>
      </div>

      {/* {modal} */}
    </div>
  );
}
