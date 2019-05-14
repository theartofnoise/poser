import React, { Component } from "react";
import { Link, withRouter} from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { FormBtn } from "../components/Form";
import Projects from "../components/Projects";
import music from "../music.json";


class UserProjects extends Component {
  state = {
    music
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
  };
  
  loadLyric = (event) => {
    console.log(event);
  }

  logOut = () => {
    localStorage.removeItem("userEmail")
    localStorage.removeItem("userPassword");
    document.location.href="/";
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
              <FormBtn onClick={this.logOut}>Log Out</FormBtn>
          </Col>
        </Row>
        <Row>
          
            {this.props.projects.map((project, i) =>{
      return <Col  key={i} size="md-2"> <Link to={"/main/" + project._id}><Projects onClick={this.loadLyric.bind(this, project.lyricTitle)} author={project.author} title={project.lyricTitle} /></Link>
          </Col>
    })}
        </Row>
      </Container>
    );
  }
}

export default withRouter(UserProjects);
