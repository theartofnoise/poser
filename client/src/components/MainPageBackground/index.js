import React from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask,
  MDBRow, MDBCol, MDBIcon, MDBBtn, MDBView, MDBContainer } from "mdbreact";
import "./style.css";
import ModalPage from '../Modal'
import API from "../../utils/API"
import SignUpModalPage from '../SignUpModalPage'


class MainPageBackground extends React.Component {
state = {
collapseID: "",
loggedIn: localStorage.getItem("userEmail") === null ? false:true,
userEmail: localStorage.getItem("userEmail")||"",
userPassword: "",
logo: "pose",
link1: "",
link2: "",
userId: "",
projects:[],
login: false
};

handleInputChange = event => {
  const { name, value } = event.target;
  this.setState({
    [name]: value
  });
};

toggleCollapse = collapseID => () =>
this.setState(prevState => ({
collapseID: prevState.collapseID !== collapseID ? collapseID : ""
}));

logIn = (event) => {
debugger;
  event.preventDefault();
   API.loginUser({
      userEmail: this.state.userEmail
    }).then(res => {
      if(res.data){
        localStorage.setItem("userEmail", this.state.userEmail);
        localStorage.setItem("userPassword", this.state.userPassword);
        this.props.onLoggedIn();
      } else {
        alert("wrong user name or pasword");
      }
    })
};

render() {
const overlay = (
<div id="sidenav-overlay" style={{ backgroundColor: "transparent" }} onClick={this.toggleCollapse("navbarCollapse")} />
);
return (
<div>


    
    
    <MDBNavbar color="bg-secondary" fixed="top" dark expand="md" scrolling transparent>
        <MDBContainer>
          <MDBNavbarBrand>
            <span className="white-text">Pose</span>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse")} />
          <MDBCollapse id="navbarCollapse" isOpen={this.state.collapseID} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBNavLink to="#!">Home</MDBNavLink>
              </MDBNavItem>              
              <MDBNavItem>
                <MDBNavLink to="#!">Contact</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBNavLink to="!#">
                  <MDBIcon fab icon="facebook-f" />
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="!#">
                  <MDBIcon fab icon="twitter" />
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="!#">
                  <MDBIcon fab icon="instagram" />
                </MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      {this.state.collapseID && overlay}
     
  
  <div id="videobackground">
  <MDBView>
    <video className="video-intro" poster="https://mdbootstrap.com/img/Photos/Others/background.jpg" playsInline
      autoPlay muted="" loop>
      <source src="https://www.videvo.net/videvo_files/converted/2016_01/preview/koncert.mp426536.webm" type="video/mp4" />
    </video>
    <MDBMask className="d-flex justify-content-center align-items-center gradient">
      <MDBContainer className="px-md-3 px-sm-0">
        <MDBRow>
          <MDBCol md="12" className="mb-4 white-text text-center">
            <h1 className="display-3 font-weight-bold mb-0 pt-md-5">
              Your Virtual Composer{" "}
            </h1>
            <hr className="hr-light my-4 w-75" />
            <h4 className="subtext-header mt-2 mb-4">
              Create your dreams.
            </h4>
            {/* <MDBContainer> */}
            {/* <MDBInput 
              name="userEmail"
              label="Email"
              value={this.state.userEmail}
              onChange={this.handleInputChange}
              type="email"
              placeholder="email"/>
            <MDBInput 
              name="userPassword"
              label="Password"
              value={this.state.userPassword}
              onChange={this.handleInputChange}
              type="password"
              placeholder="password"/>
            </MDBContainer> */}
            {/* <MDBBtn outline rounded color="secondary" onClick={this.logIn}>
            <MDBIcon icon="sign-in-alt" /> Log in
            </MDBBtn> */}
            <MDBRow>
            <MDBCol md="6">
              <MDBBtn outline rounded color="secondary" onClick={()=>this.setState({login:true})}><MDBIcon icon="sign-in-alt" /> LOG In</MDBBtn>
              <ModalPage  onClose={()=>this.setState({login:false})} open={this.state.login} onLoggedIn={this.props.onLoggedIn} />
              </MDBCol>   
              <MDBCol md="6">
              <SignUpModalPage /> 
              </MDBCol>  
              </MDBRow>      
          </MDBCol>
        </MDBRow>
              {/* <MDBBtn outline rounded color="secondary" type="submit" onClick={this.saveUser}>
                <MDBIcon icon="user-plus" /> Register
              </MDBBtn> */}
      </MDBContainer>
    </MDBMask>
  </MDBView>
  

  <MDBContainer>        
    <MDBRow className="pt-5 pb-4">
      <MDBCol md="12" className="text-center">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>    
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  </div>
</div>
);
}
}

export default MainPageBackground;