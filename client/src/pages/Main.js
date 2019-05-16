import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
import Nav from "../components/Nav";
// import Spotify from "../components/Spotify/Spotify";
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

  // music = event => {
  //   console.log(event);
  //   this.setState({music: event})
  // }

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
              <h2>{this.state.lyricTitle}{this.state.author?" by ":""}{this.state.author}</h2>
                <Input value={this.state.lyricTitle} id="lyricTitle" name="lyricTitle" type="text" onChange={this.handleInputChange} placeholder="Your Title" />
                <Input value={this.state.author} id="author" name="author" type="text" onChange={this.handleInputChange} placeholder="Author" />
                <TextArea value={this.state.lyrics} id="lyrics" name="lyrics" onChange={this.handleInputChange}></TextArea>
                <FormBtn onClick={this.save}>Save</FormBtn>
            </div>
          </Col>
          <Col size="md-4 sm-12">
            <div style={this.border}>
            <h2>Inspiration Area</h2>
              {/* <Spotify /> */}
              <MusicArea func={this.music} />
            </div>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default Main;
