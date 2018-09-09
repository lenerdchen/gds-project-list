import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 25ch 25ch 1fr;
`;

const NavItem = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
`;

const NavLink = styled.a`
  background-color: #778088;
  border-radius: 4px;
  color: #fff;
  padding: 0.5em 1em;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;

  :hover {
    background-color: #1986e6;
  }
`;

class Nav extends React.Component {
  render() {
    return (
      <NavWrapper>
        <div />
        <NavItem>
          <Link to="/">
            <NavLink>Experiments List</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/Post">
            <NavLink>Post an Experiment</NavLink>
          </Link>
        </NavItem>
        <div />
      </NavWrapper>
    );
  }
}

export default Nav;
