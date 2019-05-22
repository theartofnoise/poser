import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBContainer, MDBBtn, MDBCol } from "mdbreact";
import { Link, withRouter} from "react-router-dom";
import "./style.css";
import Moment from 'moment';

function Projects(props) {

  return (

    <MDBContainer>
  <MDBCard className="theCard">
    <MDBCardBody>
      <MDBCardTitle 
            className="text-center blue-text font-weight-bold text-uppercase" >{props.title}</MDBCardTitle>
            <hr />
      <MDBCardTitle tag="h6" sub className="mb-2 text-muted">
        By: {props.author}
      </MDBCardTitle>
      <MDBCardText className="cardText">
  {Moment(props.date).format("MM-DD-YYYY")}{" "}<br />
        {props.lyrics}
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