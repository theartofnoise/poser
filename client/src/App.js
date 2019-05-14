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

//   logToggle = () => {
//     alert("it worked");
//     this.setState({
//         loggedIn:!this.state.loggedIn,
//         link1: "main",
//         link2: "home",
//     })
// };

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
