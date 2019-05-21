import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBContainer, MDBBtn } from "mdbreact";
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
            className="text-center blue-text font-weight-bold text-uppercase" ><h5>{props.title}</h5></MDBCardTitle>
            <hr />
      <MDBCardTitle tag="h6" sub className="mb-2 text-muted">
        Author: {props.author}
      </MDBCardTitle>
      <MDBCardText>
        Some quick example text to build on the panel title and make up
        the bulk of the panel's content.{" "}
      </MDBCardText>
      <Link to={"/main/" + props.id}>
      <MDBBtn className="blue-gradient" >Edit</MDBBtn>
      </Link>
      <MDBBtn onClick={props.onClick} className="peach-gradient float-right">Delete</MDBBtn>
      {/* <MDBBtn onClick={()=>deleteBtn(props.id)} className="peach-gradient float-right">Delete</MDBBtn> */}
    </MDBCardBody>
  </MDBCard>
</MDBContainer>
  );
}

export default withRouter(Projects);