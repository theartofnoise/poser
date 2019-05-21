import React, { Component } from "react";
import { Link, withRouter} from "react-router-dom";
import Projects from "../components/Projects";
import music from "../music.json";
import { MDBContainer, MDBRow, MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBCollapse, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBIcon, MDBCol, MDBBtn } from "mdbreact";
import API from '../utils/API'



class UserProjects extends Component {
  state = {
    music,
    projects:[],
    userEmail: localStorage.getItem("userEmail"),
    refresh: false,
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

  // Gets ALL the lyrics for the email thats logged in
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

  deleteLyric = (id)=> {
    API.deleteLyric(id)
      .then(res =>{ console.log(res);
        this.loadLyrics();})
      .catch(err => console.log(err));
    
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
            <MDBRow center>
              <Link to="/main">
              <MDBBtn outline rounded color="secondary">
                New Project
              </MDBBtn>
              </Link>
              <MDBBtn outline rounded color="secondary" onClick={this.logOut}>
                Log Out
              </MDBBtn>
            </MDBRow>
          </MDBCol>
        </MDBRow>
          <MDBRow>
            {/* maps out the projects on project page */}
            {this.state.projects.map((project, i) =>{
            return (
            <MDBCol  key={i} size="md-4"> 
                <Projects 
                  lyrics={project.lyrics}
                  onClick={this.deleteLyric.bind(this, project._id)}
                  author={project.author} 
                  title={project.lyricTitle}
                  id={project._id} />
            </MDBCol>)
          })}
          </MDBRow>
        </MDBContainer>
        </>
      );
    }
  }

export default withRouter(UserProjects);
