import React from "react";
import "./style.css"

// audio button
function AudioBtn(props) {
  return (
    <div onClick={props.onClick} className="btn btn-success" role="button" tabIndex="0">
      {props.songTitle}
    </div>
  );
}

export default AudioBtn;

