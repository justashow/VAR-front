import { ReactNode } from "react";
import Navbar from "../_component/Nav/Navbar";

import "./ChatLayout.css";

export default function Layout({
  children,
}: // modal,
{
  children: ReactNode;
}) {
  return (
    <div>
      <div className="NavMenuContainer">
        <nav>
          <Navbar />
        </nav>
      </div>
      <div className="container">
        <header className="Chat-leftSectionWrapper">
          <main className="main-Chat"> {children}</main>
        </header>
      </div>
    </div>
  );
}
