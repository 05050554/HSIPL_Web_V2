import React from "react";

import { EditCon } from "./Edit";
import { AboutCarouselEdit } from "../AboutHSIPL/AboutCarousel";
import { NewsCardsEdit } from "../News/NewsCards";
const EditRender = (props) => {
   
  return (
    <EditCon>
        {props.select==="1"? <AboutCarouselEdit />
        :props.select==="2"? <NewsCardsEdit />:null }
     
    </EditCon>
  );
};

export default EditRender;
