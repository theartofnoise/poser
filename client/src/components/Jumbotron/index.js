import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";
import "./style.css";

const JumbotronPage = () => {
  return (
    <>
      <MDBRow>
        <MDBCol>
          <MDBJumbotron id = "jumbo">
            <div id = "backGroundVideo">
            <video loop="true" muted="" autoplay="" poster="/images/posters/homepage-header.jpg" class="background-home-video" style={{"width": "100%"}}><source src="assets/koncert.mp4" type="video/mp4"/></video>
            <div id = "mainText"><h1 className="h1-responsive">Your Virtual Composer</h1></div>
            </div>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </>
  )
}

export default JumbotronPage;
