import React from "react";
import { LabDirDescribeDetail } from "../LabDirector/LabDirDescribe";
import LabDirAvatar from "../LabDirector/LabDirAvatar";
import { LabDir, LabDirContent } from "../LabDirector/LabDirector";
import ProfessorEducation from "./ProfessorEducation";
import PorfessorResearch from "./PorfessorResearch";
import ProfessorArticles from "./ProfessorArticles";
import ProfessorTalks from "./ProfessorTalks";
import ProfessorConference from "./ProfessorConference";
import ProfessorAwards from "./ProfessorAwards";
import ProfessorService from "./ProfessorService";
const ProfessorIntroView = () => {
  return (
    <LabDir>
      <LabDirContent>
        <LabDirAvatar />
        <LabDirDescribeDetail />
      </LabDirContent>
      <ProfessorEducation/>
      <PorfessorResearch/>
      <ProfessorArticles/>
      <ProfessorTalks/>
      <ProfessorService/>
      <ProfessorConference/>
      <ProfessorAwards/>
    </LabDir>
  );
};

export default ProfessorIntroView;
