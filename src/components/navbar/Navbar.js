import React, { useState, Component } from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import Scroll from "react-scroll";
import { menuData } from "../../data/MenuData";
import { Button } from "../Button";
import { FaBars } from "react-icons/fa";
import logo from "../../images/logo.png";
import "./Navbar.css";
import Homecomp from "../home/Homecomp";

const ScrollLink = Scroll.ScrollLink;

const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
`;

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
`;

const MenuBars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    color: white;
    background-size: contain;
    height: 30px;
    width: 30px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-70%, 45%);
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  color: #fff;
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = ({ toggle }) => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <Nav className={colorChange ? "navbar colorChange" : "navbar"}>
      <Logo to="/">
        {" "}
        <img className="h-24" src={logo} />{" "}
      </Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks className="pr-4" to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
        <NavMenuLinks className="pr-4" to={"/"}>
          About
        </NavMenuLinks>
      </NavMenu>
      <NavBtn>
        <Button to="/contact" primary="true">
          Contact Us
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
