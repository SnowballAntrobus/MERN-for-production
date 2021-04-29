import React from "react";

import Logo from "./Logo";
import SignOutButton from "../SignOut";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

import { AuthUserContext } from "../Session";

const NavBar = () => (
  <div>
    <AuthUserContext.Consumer>
      {(authUser) => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
    </AuthUserContext.Consumer>
  </div>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Logo />
    </li>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.ITEMS_LIST}>List Items</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
);

const NavigationAuth = () => (
  <ul>
    <li>
      <Logo />
    </li>
    <li>
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.ITEMS_LIST}>List Items</Link>
    </li>
    <li>
      <Link to={ROUTES.ITEMS_CREATE}>Create Item</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </li>
    <li>
      <SignOutButton />
    </li>
  </ul>
);

export default NavBar;
