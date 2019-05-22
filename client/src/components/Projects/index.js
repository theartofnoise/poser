import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBContainer, MDBBtn, MDBCol } from "mdbreact";
import { Link, withRouter} from "react-router-dom";
import API from '../../utils/API'


// This file exports both project components


// const deleteBtn = (id)=> {
//   API.deleteLyric(id)
//     .then(res =>{ console.log(res)})
//     .catch(err => console.log(err))
// }

function Projects(props) {

  return (

    <MDBContainer>
  <MDBCard style={{ width: "22rem", marginTop: "1rem" }}>
    <MDBCardBody>
      <MDBCardTitle 
            className="text-center blue-text font-weight-bold text-uppercase" ><h3>{props.title}</h3></MDBCardTitle>
            <hr />
      <MDBCardTitle tag="h6" sub className="mb-2 text-muted">
        By: {props.author}
      </MDBCardTitle>
      <MDBCardText>
        {props.lyrics}{" "}
      </MDBCardText>
      <MDBContainer>  
        <MDBCol className="text-center">
          <Link to={"/main/" + props.id}>
          <MDBBtn className="blue-gradient" >Edit</MDBBtn>
          </Link>
          <MDBBtn onClick={props.onClick} className="blue-gradient">Delete</MDBBtn>
        </MDBCol>
      </MDBContainer>
    </MDBCardBody>
  </MDBCard>
</MDBContainer>
  );
}

export default withRouter(Projects);