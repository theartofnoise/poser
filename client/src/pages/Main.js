import React, { Component } from "react";
import API from "../utils/API";
import { TextArea, FormBtn } from "../components/Form";
import MusicArea from "../components/MusicArea";
import { MDBCard, MDBCardBody, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask, MDBRow, MDBCol, MDBIcon, MDBContainer, MDBInput } from "mdbreact";


class Main extends Component {
  state = {
    userEmail: localStorage.getItem("userEmail"),
    logo:"pose",
    link1:"",
    link2:"home",
    lyrics: "",
    lyricTitle: "",
    music: "",
    author: "",
    textArea:"some test text", 
    editing:false,
    lyricData: {lyrics:"",
                lyricsTitle:"",
                author:""}, 
  };

  componentDidMount() {
    if (this.props.match.params.id) {
    API.getLyricById(this.props.match.params.id)
      .then( (res) => {
        console.log(res);
        this.setState({ lyrics: res.data.lyrics,
                        author: res.data.author,
                        lyricTitle: res.data.lyricTitle });
        this.setState({ lyricData: res.data,
        editing:true });
        console.log( this.state.lyricData );
      })
      .catch(err => console.log(err));
    }
  }
  

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  
  save = () => {
    console.log(this.state);
    if (this.state.editing) {
    API.updateLyric(this.props.match.params.id, {
      userEmail: this.state.userEmail,
      author: this.state.author,
      lyricTitle: this.state.lyricTitle,
      lyrics: this.state.lyrics,
      music: this.state.music,
    })
      .then(res => {
        alert(`Saved ${this.state.lyricTitle}!`);
      })
      .catch(err => console.log(err));
    } else {
      API.saveLyric({
      userEmail: this.state.userEmail,
      author: this.state.author,
      lyricTitle: this.state.lyricTitle,
      lyrics: this.state.lyrics,
      music: this.state.music,
    })
      .then(res => {
        alert(`Saved ${this.state.lyricTitle}!`);
      })
      .catch(err => console.log(err));}
  }; 

  toggleCollapse = collapseID => () =>
      this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
  }
    )
      );

  render() {
    const overlay = (
      <div id="sidenav-overlay" style={{ backgroundColor: "transparent" }} onClick={this.toggleCollapse("navbarCollapse")} />
      );
    return (
      <>
      <div id="videobackground">        
        <div>
          <MDBNavbar color="bg-secondary" fixed="top" dark expand="md" scrolling transparent className="mb-4">
            <MDBContainer>
              <MDBNavbarBrand>
                <span className="white-text">Pose</span>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.toggleCollapse          ("navbarCollapse")} />  
              <MDBCollapse id="navbarCollapse" isOpen=                  {this.state.collapseID} navbar>
                <MDBNavbarNav left>
                <MDBNavItem>
                  <MDBNavLink to="/home">Projects</MDBNavLink>
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
          </MDBNavbar> {this.state.collapseID && overlay}
        </div>
        <div overlay="purple-light"  id="mainPad">
        <MDBContainer>  
          <MDBRow className="mb-4">
            <MDBCol  md="8" className="mb-r">
            <MDBCard className="cascading-admin-card .z-depth-4">
            <div className="admin-up">
            <MDBIcon icon="edit" className="primary-color"/>
            <div className="data">
            <p >CREATE YOUR LYRICS</p>                      
            </div>
            </div>
            <MDBCardBody>
              <div style={this.border}>
                <h2>{this.state.lyricTitle}{this.state.author?" by ":""}{this.state.author}</h2>
                <MDBInput hint="Your Title"value={this.state.lyricTitle} id="lyricTitle" name="lyricTitle" type="text" onChange={this.handleInputChange} placeholder="Your Title" />
                <MDBInput hint="Author" value={this.state.author} id="author" name="author" type="text" onChange={this.handleInputChange} placeholder="Author" />
                <TextArea value={this.state.lyrics} id="lyrics" name="lyrics" onChange={this.handleInputChange}></TextArea>
                <FormBtn onClick={this.save}>Save</FormBtn>
                
              </div>
            </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4" className="mb-r">
            <MDBCard className="cascading-admin-card">
              <div className="admin-up">
              <MDBIcon icon="music" className="primary-color"/>
              <div className="data">
              <p>CHOOSE YOUR INSPIRATION</p>
              </div>
              </div>
              <MDBCardBody>
                <div style={this.border}>
                <MusicArea func={this.music}/>
                </div>
              </MDBCardBody>
            </MDBCard>
            </MDBCol>
          </MDBRow>            
        </MDBContainer>  
        </div>
      </div>
      </>
    );
  }
}

export default Main;
