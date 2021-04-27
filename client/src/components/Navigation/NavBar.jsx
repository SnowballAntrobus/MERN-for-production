import React, { Component } from "react";
import styled from "styled-components";

import Logo from "./Logo";
import Links from "./Links";
import SignOutButton from '../SignOut';

const Container = styled.div.attrs({
  className: "container",
})``;

const Nav = styled.nav.attrs({
  className: "navbar navbar-expand-lg navbar-dark bg-dark",
})`
  margin-bottom: 20 px;
`;

class NavBar extends Component {
  render() {
    return (
      <Container>
        <Nav>
          <Logo />
          <Links />
          <SignOutButton />
        </Nav>
      </Container>
    );
  }
}

export default NavBar;
