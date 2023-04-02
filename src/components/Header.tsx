import { useState } from "react";
import { useNavigate} from "react-router-dom"
import Home from "./Home";
import App from "../App";

function Header() {
  const navigate = useNavigate();

  return (
  
    <>
      <nav className="navbar navbar navbar-expand-lg navbar-light text-primary me-2">
        <a onClick={()=>{ navigate('/')}}
          className="flex-sm-fill text-sm-center nav-link"
          aria-current="page"
          href="#"
        >
          <h1 className="header-logo">FLEXIS</h1>
        </a>
        <a className=" removable flex-sm-fill fs-4 text-sm-center nav-link text-light" href="#">
          Latest
        </a>
        <a onClick={()=>{ navigate('/')}} className=" removable flex-sm-fill fs-4 text-sm-center nav-link text-light" href="#">
          About Us
        </a>
        <a onClick={()=>{ navigate('/')}}
          className="signin fs-4  btn pb-4 text-danger active"
          href="#"
          tab-index="-1"
        >
          Sign In
        </a>
      </nav>
    </>
  );
}

export default Header;