import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import Main from "./Main";
import UserProjects from "./UserProjects";
import Nav from "../components/Nav";

class Welcome extends Component {
  state = {
    //loggedIn: false,
    loggedIn: localStorage.getItem("userEmail") === null ? false: true,
    userEmail: "",
    userPassword: "",
    logo: "pose",
    link1: "",
    link2: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  logIn = () => {
     API.loginUser({
        userEmail: this.state.userEmail
      }).then(res => {
        if(res.data){
          console.log("logged in")
          this.setState({
            loggedIn: true,
            link1: "main",
            userEmail: "",
            userPassword: ""
          })
          localStorage.setItem("userEmail", this.state.userEmail)
          localStorage.setItem("userPassword", this.state.userPassword)
        } else {
          alert("wrong user name or pasword");
        }
      })
  };


  saveUser = () => {
    API.saveUser({
      userEmail: this.state.userEmail,
      userPassword: this.state.userPassword,
    })
      .then(res => {
        this.setState({
        userEmail: "",
        userPassword: ""})
        this.findUser(res)
      })
      .catch(err => console.log(err));
  };

  logOut = () => {
    localStorage.removeItem("userEmail")
    localStorage.removeItem("userPassword")
    this.setState({
      loggedIn: false,
      mainLink: ""
    });
  };

  render() {
    return (
      <div>
        <Nav
          logo={this.state.logo}
          link1={this.state.link1}
          link2={this.state.link2}
        />
        <Container fluid>
          <Row>
            {this.state.loggedIn ? (
              <div>
                <UserProjects />
                <FormBtn onClick={this.logOut}>Log Out</FormBtn>
              </div>
            ) : (
              <Col size="lg-6 md-12">
                <form>
                  <Input
                    name="userEmail"
                    value={this.state.userEmail}
                    onChange={this.handleInputChange}
                    type="email"
                    placeholder="email"
                  />
                  <Input
                    name="userPassword"
                    value={this.state.userPassword}
                    onChange={this.handleInputChange}
                    type="password"
                    placeholder="password"
                  />
                  <FormBtn type="submit" onClick={this.logIn}>
                    Log In
                  </FormBtn>
                  <FormBtn type="submit" onClick={this.saveUser}>Create New Account</FormBtn>
                </form>
              </Col>
            )}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Welcome;
