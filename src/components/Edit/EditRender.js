import React from "react";

import { EditCon } from "./Edit";
import { AboutCarouselEdit } from "../AboutHSIPL/AboutCarousel";
import { NewsCardsEdit } from "../News/NewsCards";
import { HonorCardsEdit } from "../Honor/HonorCards";
import { ResearchInterestsEdit } from "../Research_Interests/Research_Interests_Cards";
const EditRender = (props) => {
  return (
    <EditCon>
      {props.select === "1" ? (
        <AboutCarouselEdit />
      ) : props.select === "2" ? (
        <NewsCardsEdit />
      ) : props.select === "3" ? (
        <HonorCardsEdit />
      ) : props.select === "4" ? (
        <ResearchInterestsEdit />
      ) : null}
    </EditCon>
  );
};

export default EditRender;
