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
    console.log(this.props.projects)
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
          
            {this.props.projects.map((project, i) =>{
      return <Col size="md-2"> <Projects author={project.author} title={project.lyricTitle} />
          </Col>
    })}
        </Row>
      </Container>
    );
  }
}

export default UserProjects;
