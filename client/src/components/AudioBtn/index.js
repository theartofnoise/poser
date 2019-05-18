import React from "react";
import { MDBBtn, MDBIcon, MDBTable, MDBTableBody } from "mdbreact";

function AudioBtn(props) {
  return (
    <MDBTable hover responsive>
      <MDBTableBody>
        <tr>
          <td><MDBBtn tag="a" size="lg" gradient="purple"><MDBIcon icon="play" onClick={props.onClick}/></MDBBtn></td>
          <td>{props.songTitle}</td>
        </tr>
      </MDBTableBody>
    </MDBTable>    
  );
}

export default AudioBtn;

