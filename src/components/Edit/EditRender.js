import React from "react";

import { EditCon } from "./Edit";
import { AboutCarouselEdit } from "../AboutHSIPL/AboutCarousel";
import { NewsCardsEdit } from "../News/NewsCards";
import { HonorCardsEdit } from "../Honor/HonorCards";
import { ResearchInterestsEdit } from "../Research_Interests/Research_Interests_Cards";
import { MembersCardsEdit } from "../Members/MembersCards";
import { ProfessorEducationEdit } from "../ProfessorDetail/ProfessorEducation";
import { PorfessorResearchEdit } from "../ProfessorDetail/PorfessorResearch";
import { ProfessorArticlesEdit } from "../ProfessorDetail/ProfessorArticles"; 
import { ProfessorTalksEdit } from "../ProfessorDetail/ProfessorTalks";
import { ProfessorServiceEdit } from "../ProfessorDetail/ProfessorService";
import { ProfessorConferencEdit } from "../ProfessorDetail/ProfessorConference";
import { ProfessorAwardsEdit } from "../ProfessorDetail/ProfessorAwards";
import { Research_ItemEdit } from "../Research_Posters/Research_Item";
import { GrantSupportEdit } from "../Grant_Support/GrantSupport";
import { EquipmentOWEdit } from "../Equipment/EquipmentOW";
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
      ) :  props.select === "5" ? (
        <MembersCardsEdit />
      ):props.select === "6" ? (
        <ProfessorEducationEdit />
      ):props.select === "7" ? (
        <PorfessorResearchEdit />
      ):props.select === "8" ? (
        <ProfessorArticlesEdit />
      ):props.select === "9" ? (
        <ProfessorTalksEdit />
      ):props.select === "10" ? (
        <ProfessorServiceEdit />
      ):props.select === "11" ? (
        <ProfessorConferencEdit />
      ):props.select === "12" ? (
        <ProfessorAwardsEdit />
      ):props.select === "13" ? (
        <Research_ItemEdit />
      ):props.select === "14" ? (
        <GrantSupportEdit />
      ):props.select === "15" ? (
        <EquipmentOWEdit />
      ):null}
    </EditCon>
  );
};

export default EditRender;
