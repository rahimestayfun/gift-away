import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import DonationDetails from "./components/DonationDetails";
import Profile from "./components/Profile/Profile";
// import Layout from './components/Chat/Layout';
import PostDonation from "./components/PostDonation";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/donation-details" component={DonationDetails} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/profile" component={Profile} />
    {/* <Route path='/chat' component={Layout} /> */}
    <Route path="/post" component={PostDonation} />
  </Switch>
);
