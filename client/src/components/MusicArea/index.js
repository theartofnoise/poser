import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import AudioBtn from "../AudioBtn";
import Dropdown from "../Dropdown";
// import music from "../../music.json";
import API from "../../utils/API";


class MusicArea extends Component {
  state = {
    // music,
    dbMusic: [],
    style: "",
    mood: "",
    songLoc:"",
    sound:document.getElementById("myAudio"),
  };

  componentDidMount() {
    // style = this.state.style;
    // mood = this.state.mood;
  var a = document.getElementById("myAudio");
  var p = document.getElementById("pbr");
  var c = document.getElementById("currentPbr");

  p.addEventListener('input',function(){
    c.innerHTML = p.value;
    a.playbackRate = p.value;
    a.defaultPlaybackRate  = 1;
    p.defaultValue = 1;
  },false);
    API.getMusic()
      .then(res => {
        this.setState({ dbMusic: res.data });
      })
      .catch(err => console.log(err));
  }
 speed = () => {
      
  }
  render(props) {
    // this.props.func(song.title);
    const playSong = song => {
      console.log(song);
      this.setState({ songLoc: "/"+song.location });
    };

   

    return (
      <Container fluid>
        <Row>
          <Col size="sm-12">
            <audio id="myAudio" src={this.state.songLoc+".mp3"} controls autoPlay loop>
              <source type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
            <Dropdown
              onChange={e => this.setState({ style: e })}
              title={this.state.style || "Style"}
              items={["Rock", "Pop", "Acoustic", "Metal", "Electronic"]}
            />
            <Dropdown
              onChange={e => this.setState({ mood: e })}
              title={this.state.mood || "Mood"}
              items={["Happy", "Sad", "Angry", "Indifferent"]}
            />
            <form>
  <input id="pbr"  type="range" value="1" min="0.5" max="1.5" step="0.1" />
  <p>Playback Rate <span id="currentPbr">1</span></p>
</form>
            {this.state.dbMusic
              // randomizes music
              // .sort((a, b) => {return 0.5 - Math.random();})
              // displays all music
              .map((music, index) => (
                <AudioBtn
                  name={music.title}
                  key={index}
                  onClick={playSong.bind(this, music)}
                  src={music.location}
                  songTitle={music.title}
                  id={music.id}
                />
              ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MusicArea;
