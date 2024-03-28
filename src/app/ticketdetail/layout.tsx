import { ReactNode } from "react";
import Navbar from "../_component/Nav/Navbar";
// import SideNav from "../_component/Nav/SideNav";
import "./ticketDetaillayout.css";
import TicketOwnerController from "./_component/TicketOwnerController";

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
        <header className="Ticket-leftSectionWrapper">
          <main className="main-ticketDetail"> {children}</main>
          <div className="rightSectionWrapper">
            <TicketOwnerController />
          </div>
        </header>
      </div>
    </div>
  );
}
