import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import AudioBtn from "../AudioBtn";
import music from "../../music.json";

class MusicArea extends Component {
  state = {
    music
  };

  playSong = song => {
    alert("song playing");
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-4 sm-12">
          {this.state.music
            // randomizes music
            // .sort((a, b) => {return 0.5 - Math.random();})
            // displays all music
            .map((music, index) => 
                <AudioBtn key={index} 
                onClick={this.playSong} 
                src={music.location} 
                songTitle={music.title} 
                id={music.id} />)}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MusicArea;
