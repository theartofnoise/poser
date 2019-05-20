import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBContainer, MDBBtn } from "mdbreact";


// This file exports both the List and ListItem components

function Projects(props) {

  return (
    // <div onClick={props.onClick} className="btn btn-success" role="button" tabIndex="0">
    //   <br/>
    //   title: {props.title} <br/>
    //   by: {props.author} <br/>
      
    // </div>

    <MDBContainer>
  <MDBCard style={{ width: "22rem", marginTop: "1rem" }}>
    <MDBCardBody>
      <MDBCardTitle 
            className="text-center dark-text font-weight-bold text-uppercase" ><h5>{props.title}</h5></MDBCardTitle>
      <MDBCardTitle tag="h6" sub className="mb-2 text-muted">
        Author: {props.author}
      </MDBCardTitle>
      <MDBCardText>
        Some quick example text to build on the panel title and make up
        the bulk of the panel's content.{" "}
      </MDBCardText>
      <MDBBtn>Edit</MDBBtn>
    </MDBCardBody>
  </MDBCard>
</MDBContainer>
  );
}

export default Projects;