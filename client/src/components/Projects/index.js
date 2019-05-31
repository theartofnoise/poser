import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBContainer, MDBBtn, MDBCol } from "mdbreact";
import { Link, withRouter} from "react-router-dom";
import "./style.css";
import Moment from 'moment';
import {useSpring, animated} from 'react-spring'


const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


function Projects(props) {
  const [prop, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

  return (
    <MDBContainer>
    <animated.div className="cards"
    onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
    onMouseLeave={() => set({ xys: [0, 0, 1] })}
    style={{ transform: prop.xys.interpolate(trans) }}>
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
</animated.div>
</MDBContainer>
  );
}

export default withRouter(Projects);