import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/subpage/Login";
import SignUp from "./pages/subpage/Signup";
import Mypage from "./pages/mypage";

const router = () => {
  return (
    <Router>
      <Switch>
        <Route path={["/", "/logout"]} exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/mypage" exact component={Mypage} />
      </Switch>
    </Router>
  );
};

export default router;
