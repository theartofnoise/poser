import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Welcome from "./pages/Welcome";
import Main from "./pages/Main";
import UserProjects from "./pages/UserProjects";

class App extends Component {

  state = {
    loggedIn:localStorage.getItem("userEmail")?true:false,
    logo: "pose",
    link1: "",
    link2: "",
  }

componentWillUpdate() {
  if(!localStorage.getItem("userEmail")&&this.state.loggedIn)
   this.setState({
    loggedIn:localStorage.getItem("userEmail")?true:false
  })
}


onLoggedIn = () => {
  this.setState({loggedIn: true})
}
//  renders

  render() {
  return (
    <Router>
      <div>
    {!this.state.loggedIn?<Welcome onLoggedIn={this.onLoggedIn} />:
    <Switch>
      <Route exact path="/" logToggle={this.logToggle} loggedIn={this.state.loggedIn} component={Welcome} />
      {this.state.loggedIn&&[
      <Route exact path="/main" component={Main}  key={0}/>,
      <Route exact path="/main/:id" component={Main} key={2} />,
      <Route component={UserProjects}  key={1} />]}
    </Switch>}
</div>
</Router>
    
  );
}
}
export default App;
