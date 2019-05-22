import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBInput, MDBCol } from 'mdbreact';
import API from '../../utils/API'

class SignUpModalPage extends Component {
state = {
  modal14: false,
  userEmail: "",
  userPassword: ""
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

// saveUser = (event) => {
//   event.preventDefault();
//   API.saveUser({
//     userEmail: this.state.userEmail,
//     userPassword: this.state.userPassword,
//   })
//     .then(res => {
//       this.setState({
//       userEmail: "",
//       userPassword: ""})
//       this.findUser(res)      
//     })
//     .catch(err => console.log(err));
// };

render() {
  return (
    <MDBContainer>
    {/* <MDBBtn outline rounded color="secondary" onClick={this.toggle(14)}><MDBIcon icon="sign-in-alt" /> LOG In</MDBBtn>         */}
    {/* <MDBBtn outline rounded color="secondary" onClick={this.toggle(14)}><MDBIcon icon="user-plus" /> Register</MDBBtn> */}

    <MDBModal isOpen={this.props.isOpen} toggle={this.toggle(14)} size="md"
      cascading>
      <MDBModalHeader toggle={this.toggle(14)} titleClass="d-inline title"
        className="text-center light-blue darken-3 white-text"><MDBIcon icon="pencil-alt" />  Register</MDBModalHeader>
      <MDBModalBody>
      <MDBContainer>
        <MDBCol md="12">
          <form>
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
    </MDBContainer>
    </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle(14)}>Close</MDBBtn>
            <MDBBtn color="primary" type="submit" onClick={(event) => this.props.saveUser(this.state.userEmail, this.state.userPassword, event )} >Save changes</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default SignUpModalPage;