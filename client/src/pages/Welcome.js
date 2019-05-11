import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Main from "./Main";
import UserProjects from "./UserProjects";
import Nav from "../components/Nav";
import Jumbo from '../components/Jumbotron';
import {  MDBInput, MDBCard, MDBCardBody, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';

class Welcome extends Component {
  state = {
    //loggedIn: false,
    loggedIn: localStorage.getItem("userEmail") === null ? false:true,
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

  logIn = (event) => {
    console.log(this.state.userEmail)
    event.preventDefault();
     API.loginUser({
        userEmail: this.state.userEmail
      }).then(res => {
        console.log(res.data)
        if(res.data){
          console.log("logged in")
          this.setState({
            loggedIn: true,
            link1: "main",
            // userEmail: "",
            // userPassword: ""
          })
          localStorage.setItem("userEmail", this.state.userEmail)
          localStorage.setItem("userPassword", this.state.userPassword)
        } else {
          alert("wrong user name or pasword");
        }
      })
  };


  saveUser = (event) => {
    event.preventDefault();
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
      <>
        <Nav
          logo={this.state.logo}
          link1={this.state.link1}
          link2={this.state.link2}
        />
          <MDBRow>
            {this.state.loggedIn ? (
              <div>
                <UserProjects logOut={this.logOut}/>
              </div>
            ) : (
              <div>
        <Jumbo />
              <MDBRow>
                <MDBCol lg="6">
                  <MDBCard >
                    <MDBCardBody>
                      <form>
                        <p className="h4 text-center py-4">Log In</p>
                        <div className="grey-text">
                          <MDBInput
                            name="userEmail"
                            value={this.state.userEmail}
                            onChange={this.handleInputChange}
                            type="email"
                            placeholder="email"
                          />                  
                          <MDBInput
                            name="userPassword"
                            value={this.state.userPassword}
                            onChange={this.handleInputChange}
                            type="password"
                            placeholder="password"
                          />
                        </div>
                        <div className="text-center py-4 mt-3">
                          <MDBBtn color="cyan" type="submit" onClick={this.logIn}>
                          Log In
                          </MDBBtn>
                        </div>
                      </form>
                    </MDBCardBody>
                  </MDBCard>
                  </MDBCol>
                  <MDBCol lg="6">
                  <MDBCard>
                    <MDBCardBody>
                      <form>
                        <p className="h4 text-center py-4">Sign up</p>
                        <div className="grey-text">
                          <MDBInput
                            name="userEmail"
                            value={this.state.userEmail}
                            onChange={this.handleInputChange}
                            type="email"
                            placeholder="email"
                          />                  
                          <MDBInput
                            name="userPassword"
                            value={this.state.userPassword}
                            onChange={this.handleInputChange}
                            type="password"
                            placeholder="password"
                          />
                        </div>
                        <div className="text-center py-4 mt-3">
                          <MDBBtn color="cyan" type="submit" onClick={this.saveUser}>
                          Register
                          </MDBBtn>
                        </div>
                      </form>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
      </MDBRow>
      </div>
            )}
            
          </MDBRow>
          <div>
          <MDBRow>
            <MDBCol lg="3">
              <MDBCard style={{ width: "22rem" }}>
                <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                  <MDBCardBody>
                  <MDBCardTitle>Card title</MDBCardTitle>
                  <MDBCardText>
                  Some quick example text to build on the card title and make
                  up the bulk of the card&apos;s content.
                  </MDBCardText>
                  <MDBBtn href="#">MDBBtn</MDBBtn>
                  </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="3">
              <MDBCard style={{ width: "22rem" }}>
                <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                  <MDBCardBody>
                  <MDBCardTitle>Card title</MDBCardTitle>
                  <MDBCardText>
                  Some quick example text to build on the card title and make
                  up the bulk of the card&apos;s content.
                  </MDBCardText>
                  <MDBBtn href="#">MDBBtn</MDBBtn>
                  </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="3">
              <MDBCard style={{ width: "22rem" }}>
                <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                  <MDBCardBody>
                  <MDBCardTitle>Card title</MDBCardTitle>
                  <MDBCardText>
                  Some quick example text to build on the card title and make
                  up the bulk of the card&apos;s content.
                  </MDBCardText>
                  <MDBBtn href="#">MDBBtn</MDBBtn>
                  </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
          </div>        
      </>
    );
  }
}

export default Welcome;
