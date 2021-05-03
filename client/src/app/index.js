import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "../components/Navigation/NavBar";
import LandingPage from "../components/Landing";
import SignUpPage from "../components/SignUp";
import SignInPage from "../components/SignIn";
import PasswordForgetPage from "../components/PasswordForget";
import HomePage from "../components/Home";
import AccountPage from "../components/Account";
import AdminPage from "../components/Admin";
import {
  ItemsList,
  ItemsInsert,
  ItemsUpdate,
  ItemsGrid,
} from "../components/Item";

import * as ROUTES from "../constants/routes";
import { withAuthentication } from "../components/Session";

const App = () => (
  <Router>
    <NavBar />
    <Switch>
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
      <Route path={ROUTES.ITEMS_LIST} exact component={ItemsList} />
      <Route path={ROUTES.ITEMS_GRID} exact component={ItemsGrid} />
      <Route path={ROUTES.ITEMS_CREATE} exact component={ItemsInsert} />
      <Route path={ROUTES.ITEMS_UPDATE} exact component={ItemsUpdate} />
    </Switch>
  </Router>
);

export default withAuthentication(App);
