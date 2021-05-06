import React from "react";
import { Link } from "react-router-dom";

import { AuthUserContext } from "../Session";
import { withFirebase } from "../Firebase";

import Logo from "./Logo";
import SignOutButton from "../SignOut";

import * as ROUTES from "../../constants/routes";

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
      <Link to={ROUTES.ITEMS_GRID}>Grid Items</Link>
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
      <Link to={`mywishlist/${this.props.firebase.getUID()}`}>Wishlist</Link>
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

export default withFirebase(NavBar);
