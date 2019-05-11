import React from "react";

// This file exports both the List and ListItem components

function Projects(props) {

  return (
    <button onClick={props.onClick} className="btn btn-success" role="button" tabIndex="0">
      <br/>
      title: {props.title} <br/>
      by: {props.author} <br/>
      
    </button>
  );
}

export default Projects;