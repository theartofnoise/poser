import React, { Component, } from "react";
import AudioBtn from "../AudioBtn";
import Dropdown from "../Dropdown";
// import music from "../../music.json";
import API from "../../utils/API";
import SliderPage from "../Slider"
import { MDBRow, MDBContainer, MDBCol, MDBCard } from "mdbreact";


class MusicArea extends Component {
  state = {
    // music,
    dbMusic: [],
    filterMusic: [],
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
        this.setState({ dbMusic: res.data, filterMusic: res.data });
      })
      .catch(err => console.log(err));
  }

 styleDropdown = (e) => {
   console.log(e);
   this.setState({ style: e })
   if (e == "All") {
     this.setState({filterMusic:this.state.dbMusic})
   } else {
   let array = this.state.dbMusic;
   let filter = array.filter(function (element) {
     return (element.style === e)
   }) 
   this.setState({ filterMusic: filter});
   console.log(this.state.dbMusic);
   }
}

 moodDropdown = (e) => {
  this.setState({ mood: e })
   if (e == "All") {
     this.setState({filterMusic:this.state.dbMusic})
   } else {
   let array = this.state.dbMusic;
   let filter = array.filter(function (element) {
     return (element.mood === e)
   }) 
   this.setState({ filterMusic: filter});
   console.log(this.state.dbMusic);
   }
  }

  render(props) {
    // this.props.func(song.title);
    const playSong = song => {
      this.setState({ songLoc: "/"+song.location });
    };

   

    return (
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol size="sm-12">
              <MDBContainer>
                <MDBRow className="mx-auto mt-1">
                  <audio id="myAudio" src={this.state.songLoc} controls autoPlay loop>
                    <source type="audio/mp3" />
                    Your browser does not support the audio element.
                  </audio>
                </MDBRow>
                <MDBRow className="mx-0 mt-1">
                  <Dropdown
                    onChange={e => this.styleDropdown(e)}
                    title={this.state.style || "Style"}
                    items={["All","Rock", "Pop", "Acoustic", "Metal", "Electronic"]}
                  />
                  <Dropdown
                    onChange={e => this.moodDropdown(e)}
                    title={this.state.mood || "Mood"}
                    items={["All","Happy", "Sad", "Angry", "Indifferent"]}
                  />
                </MDBRow>
                <form>
                  <SliderPage id="pbr" className="mx-auto mt-1"/>
                  <p>Playback Rate <span id="currentPbr">1</span></p>
                </form>
              </MDBContainer>
              <MDBContainer>
                {this.state.filterMusic
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
                </MDBContainer>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default MusicArea;
