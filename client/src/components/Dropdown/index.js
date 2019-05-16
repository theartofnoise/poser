import React from "react";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

const DropdownPage = (props) => {
  return (
    <MDBDropdown  onChange={props.onChange} >
      <MDBDropdownToggle caret color="primary">
        {props.title}
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        {props.items.map((item, key) => <MDBDropdownItem key={key} onClick={() => props.onChange(item)}>{item}</MDBDropdownItem>)}
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}

export default DropdownPage;