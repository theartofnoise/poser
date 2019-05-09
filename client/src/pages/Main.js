import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
import Nav from "../components/Nav";
import MusicArea from "../components/MusicArea";

class Main extends Component {
  state = {
    userEmail: localStorage.getItem("userEmail"),
    logo:"pose",
    link1:"",
    link2:"home",
    lyrics: "",
    lyricTitle: "",
    music: "",
  };

  

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  

  save = project => {
    alert("project saved");
    event.preventDefault();
    API.saveLyric({
      userEmail: this.state.userEmail,
      lyricTitle: this.state.lyricTitle,
      lyrics: this.state.lyrics,
    })
      .then(res => {
        this.setState({
        userEmail: "",
        userPassword: ""})
        this.findUser(res)
      })
      .catch(err => console.log(err));
  };

  border = {
    border: "solid 1px black",
    height: "500px"
  };

  render() {
    return (
        <div>
        <Nav logo={this.state.logo}
          link1={this.state.link1}
          link2={this.state.link2}
           />
      <Container fluid>
        <h1>Main Page Stuff</h1>
        <Row>
          <Col size="md-8 sm-12">
            <div style={this.border}>
              <h2>Lyrics go here</h2>
              <form>
                <TextArea name="lyrics" onChange={this.handleInputChange} />
                <FormBtn onClick={this.save}>Save</FormBtn>
              </form>
            </div>
          </Col>
          <Col size="md-4 sm-12">
            <div style={this.border}>
            <h2>Music goes here</h2>
              <MusicArea />
            </div>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default Main;
