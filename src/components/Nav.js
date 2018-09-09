import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavWrapper = styled.div`
  display: grid;
  grid-area: nav;
  grid-template-columns: repeat(auto-fit, minmax(25ch, 1fr));
  margin: 0 100px;

  @media (max-width: 1400px) {
    margin: 0 60px;
  }

  @media (max-width: 1200px) {
    margin: 0 25px;
  }

  @media (max-width: 700px) {
    margin: 0 20px;
  }
`;

const NavLink = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 0.5em 1em;
  text-align: center;

  .link {
    text-decoration: none;
    color: #1986e6;

    :hover,
    :focus {
      text-decoration: underline;
    }

    :visited {
      color: #1986e6;
    }
  }
`;

class Nav extends React.Component {
  render() {
    return (
      <NavWrapper>
        <NavLink>
          <Link className="link" to="/">
            Experiments List
          </Link>
        </NavLink>
        <NavLink>
          <Link className="link" to="/Post">
            Post an Experiment
          </Link>
        </NavLink>
      </NavWrapper>
    );
  }
}

export default Nav;
