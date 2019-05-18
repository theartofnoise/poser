import React from "react";
import { MDBRangeInput } from "mdbreact";

const SliderPage = (props) => {
    return (
      <div className="my-5">
        <label htmlFor="customRange1">Tempo range</label>
        {/* <input type="range" className="custom-range" id="customRange1" /> */}
        <input id={props.id} type="range" className="custom-range" defaultValue="1" min="0.5" max="1.5" step="0.1" />
      </div>
    );
  }

export default SliderPage;