import React, { Component } from "react";
import { Link, withRouter} from "react-router-dom";
import { FormBtn } from "../components/Form";
import Projects from "../components/Projects";
import music from "../music.json";
import { MDBContainer, MDBRow, MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBCollapse, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBIcon, MDBCol } from "mdbreact";
import API from '../utils/API'


class UserProjects extends Component {
  state = {
    music,
    projects:[],
    userEmail: localStorage.getItem("userEmail")
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    alert("Submitted");
  };
  
  loadLyric = (event) => {
    console.log(event);
  }

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

  logOut = () => {
    localStorage.removeItem("userEmail")
    localStorage.removeItem("userPassword");
    document.location.href="/";
    };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
    collapseID: prevState.collapseID !== collapseID ? collapseID : ""
}));
  

    render(props) {
      const overlay = (
        <div id="sidenav-overlay" style={{ backgroundColor: "transparent" }} onClick={this.toggleCollapse("navbarCollapse")} />
        );
      return (
        <>
        
    <div>
    <MDBNavbar color="bg-secondary" fixed="top" dark expand="md" scrolling transparent>
        <MDBContainer>
          <MDBNavbarBrand>
            <span className="white-text">Pose</span>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse")} />
          <MDBCollapse id="navbarCollapse" isOpen={this.state.collapseID} navbar>
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
    </div>

        <MDBContainer id="mainPad">
          <MDBRow>
            <MDBCol size="sm-12">
              <h1>Find your UserProjects Here</h1>
              <Link to="/main">
                <FormBtn>New Project</FormBtn>
              </Link>
                <FormBtn onClick={this.logOut}>Log Out</FormBtn>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            {this.state.projects.map((project, i) =>{
            return <MDBCol  key={i} size="md-2"> <Link to={"/main/" + project._id}><Projects onClick={this.loadLyric.bind(this, project.lyricTitle)} author={project.author} title={project.lyricTitle} /></Link>
                </MDBCol>
          })}
          </MDBRow>
        </MDBContainer>
        </>
      );
    }
  }

export default withRouter(UserProjects);
