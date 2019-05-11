import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { FormBtn } from "../components/Form";
import Projects from "../components/Projects";

class UserProjects extends Component {
  state = {};

  logOutCB = () => {
    alert("yes");
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    alert("Submitted");
    console.log(this.state);
  };

  

  render(props) {
    return (
      <Container fluid>
        <Row>
          <Col size="sm-12">
            <h1>Find your UserProjects Here</h1>
            <Link to="/main">
              <FormBtn>New Project</FormBtn>
            </Link>
              <FormBtn onClick={this.props.logOut}>Log Out</FormBtn>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Projects
              projName="Project Name"
              author="React Remix"
              mood="Angry"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default UserProjects;
