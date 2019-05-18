import React, { Component } from "react";
import API from "../utils/API";
import UserProjects from "./UserProjects";

import Jumbo from '../components/Jumbotron';
import { withRouter} from "react-router-dom";
import {  MDBInput, MDBCard, MDBCardBody, MDBBtn, MDBRow, MDBCol, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';
import MainPageBackground from '../components/MainPageBackground'

class Welcome extends Component {
  state = {
    //loggedIn: false,
    loggedIn: localStorage.getItem("userEmail") === null ? false:true,
    userEmail: localStorage.getItem("userEmail"),
    userPassword: "",
    logo: "pose",
    link1: "",
    link2: "",
    userId: "",
    projects:[],
  };

  // Gets all the lyrics for the email thats logged in
  loadLyrics() {
    API.getLyric(this.state.userEmail)
      .then(res => {
        this.setState({projects:res.data})
      })
      .catch(err => console.log(err));
  }
  
  
  componentDidMount() {
    this.loadLyrics();
  }
  

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  logIn = (event) => {

    event.preventDefault();
     API.loginUser({
        userEmail: this.state.userEmail
      }).then(res => {
        if(res.data){
          // this.setState({
          //   loggedIn: true,
          //   link1: "main",
          //   userId: res.data._id,
          // })
          localStorage.setItem("userEmail", this.state.userEmail);
          localStorage.setItem("userPassword", this.state.userPassword);
          this.props.onLoggedIn();
          this.loadLyrics();
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
    this.props.logOut();
  };

  render() {
    return (
      <div>
        {/* <Nav
          logo={this.state.logo}
          link1={this.state.link1}
          link2={this.state.link2}
        /> */}
            {this.state.loggedIn ? (
              <div>
                <UserProjects projects={this.state.projects} logOut={this.logOut}/>
              </div>
            ) : (
              <div>
              <MainPageBackground onLoggedIn={this.props.onLoggedIn} />
          </div> 
          
            )}       
      </div>
    );
  }
}

export default withRouter(Welcome);
