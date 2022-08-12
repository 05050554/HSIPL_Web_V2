import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { Image } from "antd";
import "antd/dist/antd.min.css";

const CardSty = `
  .gird{
    margin:auto;
    justify-content: center;
  }
`;

const CardImg = `
  .Image{
 Padding-top:3%;
  }
`;

const ResearchContent = styled.div`
padding-bottom:3%;
`;

const Research_Interests_Cards = () => {
  const [arrayData, setArrayData] = useState([]);

  const IP = "http://140.125.45.160:6969/";
  const research_url = "http://140.125.45.160:6969/api/lab/research";

  useEffect(() => {
    const research_api = async () => {
      try {
        let { data } = await axios.get(research_url);
        setArrayData(data.data);
        console.log(data.data);
      } catch (e) {}
    };
    research_api();
  }, []);

  return (
    <ResearchContent>
      <Grid className="gird" container spacing={5} sx={{ px: 10 }}>
        <style>{CardSty}</style>
        {arrayData.map((item, index) => (
          <Grid key={item.id}>
            <Card
              sx={{ width: 300, height: 700 }}
              style={{ backgroundColor: "rgb(156, 142, 136)" }}
            >
              <CardContent>
                <Typography color="text.secondary" variant="h5" gutterBottom style={{ fontWeight: 600 }}>
                  {item.title}
                </Typography>
             
                <Image
                  width="200"
                  src={IP + item.img}
                  alt={item.img}
                  key={item.id}
                  className="Image"
                />
                <style>{CardImg}</style>
                <Box sx={{ pb: 5 }}>
                  <Typography
                    sx={{ fontSize: 20, pt: 5 }}
                    color="text.secondary"
                    style={{ fontWeight: 500 }}
                  >
                    {item.content}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </ResearchContent>
  );
};

export default Research_Interests_Cards;
