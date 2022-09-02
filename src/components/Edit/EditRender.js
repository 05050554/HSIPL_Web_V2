import React from "react";

import { EditCon } from "./Edit";
import { AboutCarouselEdit } from "../AboutHSIPL/AboutCarousel";
import { NewsCardsEdit } from "../News/NewsCards";
import { HonorCardsEdit } from "../Honor/HonorCards";
const EditRender = (props) => {
  return (
    <EditCon>
      {props.select === "1" ? (
        <AboutCarouselEdit />
      ) : props.select === "2" ? (
        <NewsCardsEdit />
      ) : props.select === "3" ? (
        <HonorCardsEdit />
      ) : null}
    </EditCon>
  );
};

export default EditRender;
