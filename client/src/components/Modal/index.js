import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBInput, MDBCol } from 'mdbreact';
import API from '../../utils/API'

class ModalPage extends Component {
state = {
  modal14: false,
  userEmail: localStorage.getItem("userEmail"),
  userPassword: "",
}

toggle = nr => () => {
  let modalNumber = 'modal' + nr
  this.setState({
    [modalNumber]: !this.state[modalNumber]
  });
}

handleInputChange = event => {
  const { name, value } = event.target;
  this.setState({
    [name]: value
  });
};

logIn = (event) => {

  event.preventDefault();
   API.loginUser({
      userEmail: this.state.userEmail
    }).then(res => {
      if(res.data){
        // this.setState({
        //   loggedIn: true,
        //   link1: "main",
        //   userId: res.data._id,
        // })
        localStorage.setItem("userEmail", this.state.userEmail);
        localStorage.setItem("userPassword", this.state.userPassword);
        this.props.onLoggedIn();
        
      } else {
        alert("wrong user name or pasword");
      }
    })
};


render() {
  return (
      <MDBContainer>
                
        {/* <MDBBtn outline rounded color="secondary" onClick={this.toggle(14)}><MDBIcon icon="user-plus" /> Register</MDBBtn> */}

        <MDBModal isOpen={this.props.open} toggle={this.toggle(14)} size="md"
          cascading>
          <MDBModalHeader toggle={this.toggle(14)} titleClass="d-inline title"
            className="text-center light-blue darken-3 white-text"><MDBIcon icon="pencil-alt" /> Sign In</MDBModalHeader>
          <MDBModalBody>
          <MDBContainer>
      {/* <MDBRow> */}
        <MDBCol md="12">
          <form>
            {/* <p className="h5 text-center mb-4">Sign in</p> */}
            <div className="grey-text">
              <MDBInput
                name="userEmail"
                label="Email"
                value={this.state.userEmail}
                onChange={this.handleInputChange}
                type="email"
                placeholder="email"
              />
              <MDBInput
                name="userPassword"
                label="Password"
                value={this.state.userPassword}
                onChange={this.handleInputChange}
                type="password"
                placeholder="password"
              />
            </div>
          </form>
        </MDBCol>
      {/* </MDBRow> */}
    </MDBContainer>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.props.onClose}>Close</MDBBtn>
            <MDBBtn color="primary" onClick={this.logIn}>Log In</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ModalPage;