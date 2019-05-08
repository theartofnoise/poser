import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Welcome from "./pages/Welcome";
import Main from "./pages/Main";
import UserProjects from "./pages/UserProjects";

class App extends Component {

  state = {
    loggedIn:true,
    logo: "pose",
    link1: "",
    link2: "",
  }

  logToggle = () => {
    alert("it worked");
    this.setState({
        loggedIn:!this.state.loggedIn,
        link1: "main",
        link2: "home",
    })
};
//  renders

  render() {
  return (
    <div>
    <Router>
        <Switch>
          <Route exact path="/" logToggle={this.logToggle} loggedIn={this.state.loggedIn} component={Welcome} />
          {this.state.loggedIn&&[
          <Route exact path="/main" component={Main} />,
          <Route exact path="/userProjects" component={UserProjects} />,
          <Route exact path="/books/:id" component={Detail} />]}
          <Route component={NoMatch} />
        </Switch>
    </Router>
      </div>
  );
}
}
export default App;
