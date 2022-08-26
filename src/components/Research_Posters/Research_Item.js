import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Image } from "antd";

const Posters = styled.div`
  display: flex;
  justify-content: center;
  padding: 2% 0%;
  flex-wrap: wrap;
  @media (max-width: 1000px) {
    padding-top: 5%;
    width: 100%;
    display: flex;
    padding-left: 3%;
    justify-content: center;
  }
`;

const Item = styled.div`
  padding: 2%;
  display: grid;
  justify-content: center;
  width: 15vw;
  flex-wrap: wrap;
  width: 15%;
  @media (max-width: 1000px) {
    width: 30%;
  }
  @media (max-width: 600px) {
    width: 40%;
  }
  @media (max-width: 350px) {
    width: 60%;
  }
`;

const ItemIntro = styled.h3`
  padding-top: 5%;
  align-self: center;
  justify-content: center;
  color: rgb(221, 220, 220);
  font-size: 1em;
`;

const Research_Item = () => {
  const [arrayData, setArrayData] = useState([]);

  const IP = "http://140.125.45.160:6969/";
  const news_url = "http://140.125.45.160:6969/api/lab/posters";

  useEffect(() => {
    const news_api = async () => {
      try {
        let { data } = await axios.get(news_url);
        setArrayData(data.data);
      } catch (e) {}
    };
    news_api();
  }, []);

  return (
    <Posters>
      {arrayData.map((item, index) => (
        <Item key={index}>
          <Image
            style={{ width: "100%", paddingBottom: "10%" }}
            src={IP + item.img}
            alt={item.img}
          />
          <ItemIntro>{item.title}</ItemIntro>
        </Item>
      ))}
    </Posters>
  );
};

export default Research_Item;
