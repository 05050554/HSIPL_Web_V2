import React,{useEffect,useState} from 'react'

import axios from 'axios';

import styled from 'styled-components';

const EqContain= styled.div`

 display:flex;
 flex-wrap: nowrap
`

const ImgBox = styled.div`
 width:30%;
 padding:1%;
 &:hover {
    background-color: lightblue;
    border-radius: 10%;
  }

`
const Img = styled.img`
 width:80%;

`


const EquipmentOW = () => {
    const [arrayData, setArrayData] = useState([]);
    const IP = "http://140.125.45.160:6969/"
    const url = "http://140.125.45.160:6969/api/lab/equipment";
  
    useEffect(() => {
      const api = async () => {
        try {
          let { data } = await axios.get(url);
          setArrayData(data.data);
          console.log(data.data)
        } catch (e) {}
      };
      api();
    }, []);
  return (
   <EqContain>
    {arrayData.map((item, index) => (
   <ImgBox>
        <a href="#Pushbroom">
          <Img src={IP+item.img}></Img>
        </a>
        </ImgBox>
    ))}
   </EqContain>
  )
}

export default EquipmentOW