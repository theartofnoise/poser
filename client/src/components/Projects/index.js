import React from "react";

// This file exports both the List and ListItem components

function Projects(props) {
  return (
    <button onClick={props.onClick} className="btn btn-success" role="button" tabIndex="0">
      {props.projName}<br/>
      by: {props.author}<br/>
      mood: {props.mood}

    </button>
  );
}

export default Projects;