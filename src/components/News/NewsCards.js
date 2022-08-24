import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { Image } from "antd";
import "antd/dist/antd.min.css"


const CardSty = `
  .gird{
    
    margin:auto;
    justify-content: center;
  
  }
`;

const Content = styled.div``;

const News_Cards = () => {
  const [arrayData, setArrayData] = useState([]);

  const IP = "http://140.125.45.160:6969/";
  const news_url = "http://140.125.45.160:6969/api/lab/news";

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
    <Content>
      <Grid className="gird" container spacing={5} sx={{ px: 10 }}>
        <style>{CardSty}</style>
        {arrayData.map((item, index) => (
          <Grid key={item.id}>
            <Card
              sx={{ width: 300, height: 650 }}
              style={{ backgroundColor: "silver" }}
            >
              <CardContent>
                <Typography color="text.secondary" variant="h5" gutterBottom>
                  {item.date}
                </Typography>

                <Image
                  width="200"
                  src={IP + item.img}
                  alt={item.img}
                  key={item.id}
                />
                <Box sx={{ pb: 5 }}>
                  <Typography
                    sx={{ fontSize: 20, pt: 5 }}
                    color="text.secondary"
                    style={{ fontWeight: 600 }}
                  >
                    {item.content}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Content>
  );
};

export default News_Cards;
