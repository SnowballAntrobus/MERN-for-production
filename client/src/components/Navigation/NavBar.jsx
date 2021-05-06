import React, { Component } from "react";
import { Link } from "react-router-dom";

import { AuthUserContext } from "../Session";

import Logo from "./Logo";
import SignOutButton from "../SignOut";

import * as ROUTES from "../../constants/routes";

const NavBar = () => (
  <div>
    <AuthUserContext.Consumer>
      {(authUser) =>
        authUser ? <NavigationAuth uid={authUser.uid} /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Logo />
    </li>
    <li>
      <Link to={ROUTES.ITEMS_LIST}>List Items</Link>
    </li>
    <li>
      <Link to={ROUTES.ITEMS_GRID}>Grid Items</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
);

class NavigationAuth extends Component {
  render() {
    return (
      <ul>
        <li>
          <Logo />
        </li>
        <li>
          <Link to={`/mywishlist/${this.props.uid}`}>Wishlist</Link>
        </li>
        <li>
          <Link to={ROUTES.ITEMS_GRID}>Grid Items</Link>
        </li>
        <li>
          <Link to={ROUTES.ITEM_CREATE}>Create Item</Link>
        </li>
        <li>
          <Link to={ROUTES.ACCOUNT}>Account</Link>
        </li>
        <li>
          <SignOutButton />
        </li>
      </ul>
    );
  }
}

export default NavBar;
