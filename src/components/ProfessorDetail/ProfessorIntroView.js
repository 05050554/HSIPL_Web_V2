import React from "react";
import { LabDirDescribeDetail } from "../LabDirector/LabDirDescribe";
import LabDirAvatar from "../LabDirector/LabDirAvatar";
import { LabDir, LabDirContent } from "../LabDirector/LabDirector";
const ProfessorIntroView = () => {
  return (
    <LabDir>
      <LabDirContent>
        <LabDirAvatar />
        <LabDirDescribeDetail />
      </LabDirContent>
    </LabDir>
  );
};

export default ProfessorIntroView;
