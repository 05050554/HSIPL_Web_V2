import React from "react";
import styled from "styled-components";
import News_Cards from "./NewsCards";
const NewsContain = styled.div`
  background-color: #f5f7f8;
  padding-top: 3%;
`;
const NewsTitle = styled.h1`
  padding-top: 3%;
  text-align: left;
  margin-left: 5%;
  font-family: Signika, sans-serif;
`;

const News = () => {
  return (
    <>
      <NewsContain id="News">
        <NewsTitle>News</NewsTitle>

        <News_Cards />
      </NewsContain>
    </>
  );
};

export default News;
