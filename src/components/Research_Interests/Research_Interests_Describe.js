import React from "react";
import styled from "styled-components";



const DescribeSpan= styled.div`
    color:white;
    font-size: 1.5rem;
    text-align: left;
    text-align:justify;
    padding: 3% ;
`;
const Research_Interests_Describe = () => {
  return (
  
    <DescribeSpan>
      My main research has been focused on designing and developing algorithms
      for multi/hyperspectral image and medical image processing, specifically
      for image classification, endmember finding and virtually dimensionality
      (VD). For hyperspectral image, this field is considered as a fast growing
      area and its related technologies have been widely used in many
      applications, such as food safety and inspection in agriculture, mineral
      mapping in geology, land use/cover classification, ecology monitoring,
      chemical defense, law enforcement, military defense, and medical imaging,
      etc. The main themes of my Ph.D. dissertation are algorithm design and
      analysis for hyperspectral endmember finding.
    </DescribeSpan>
  
  );
};

export default Research_Interests_Describe;
