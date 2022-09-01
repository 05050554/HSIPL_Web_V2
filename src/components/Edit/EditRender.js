import React from "react";

import { EditCon } from "./Edit";
import { About_Carousel_Edit } from "../AboutHSIPL/AboutCarousel";
const EditRender = (props) => {
  return (
    <EditCon>
        {props.select==="1"? <About_Carousel_Edit />:null}
     
    </EditCon>
  );
};

export default EditRender;
