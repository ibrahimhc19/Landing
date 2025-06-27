import type { IHeaderProps } from "../../types/types";
import "./Header.css";
import Spinner from "@/assets/Media/spinner.svg";


const NavBar = ({...enlaces}:IHeaderProps) => {
  return (
    <header>
      <div className="container">
        <p className="logo">{enlaces.title}</p>
        <nav>
          {enlaces.links.map((link)=> (
            <a href={link.linkRef}>{link.linkTitle}</a>
          ))}
        </nav>
        <img src={Spinner} style={{height: "30px"}} alt="loader" />
      </div>
    </header>
  );
};

export default NavBar;
