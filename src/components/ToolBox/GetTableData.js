import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Tabs, Collapse, List } from "antd";
const { TabPane } = Tabs;
const { Panel } = Collapse;
const GrantTable = () => {
  const [arrayData, setArrayData] = useState([]);

  const project_url = "http://140.125.45.160:6969/api/lab/projects";

  useEffect(() => {
    const project_api = async () => {
      try {
        let { data } = await axios.get(project_url);
        setArrayData(data.detail);
      } catch (e) {}
    };
    project_api();
  }, []);
  const Grant_columns = [
    { title: "計畫名稱", dataIndex: "title" },
    { title: "起訖日期", dataIndex: "date" },
    { title: "補助單位", dataIndex: "assistUnit" },
    { title: "經費總額", dataIndex: "total" },
  ];

  return (
    <>
      <Table
        dataSource={arrayData}
        bordered
        pagination={false}
        columns={Grant_columns}
      ></Table>
    </>
  );
};

export default GrantTable;

export function ProfessorEdu() {
  const [arrayData, setArrayData] = useState([]);
  const IP = "http://140.125.45.160:6969/";
  const edu_url = "http://140.125.45.160:6969/api/lab/education";

  useEffect(() => {
    const edu_api = async () => {
      try {
        let { data } = await axios.get(edu_url);
        setArrayData(data.data);
      } catch (e) {}
    };
    edu_api();
  }, []);

  const Edu_columns = [
    { title: "From and to", dataIndex: "year" },
    { title: "Institution", dataIndex: "instiution" },
    { title: "Major", dataIndex: "major" },
    { title: "Degree", dataIndex: "degree" },
  ];
  return (
    <>
      <Table
        dataSource={arrayData}
        bordered
        pagination={false}
        columns={Edu_columns}
      ></Table>
    </>
  );
}

export function ResearchEXP() {
  const [arrayData, setArrayData] = useState([]);
  const edu_url = "http://140.125.45.160:6969/api/lab/researchExperience";

  useEffect(() => {
    const edu_api = async () => {
      try {
        let { data } = await axios.get(edu_url);
        setArrayData(data.data);
      } catch (e) {}
    };
    edu_api();
  }, []);

  const Research_columns = [
    { title: "From and to", dataIndex: "year" },
    { title: "Employer", dataIndex: "employer" },
    { title: "Position", dataIndex: "position" },
  ];
  return (
    <>
      <Table
        dataSource={arrayData}
        bordered
        pagination={false}
        columns={Research_columns}
      ></Table>
    </>
  );
}

export function JournalArt() {
  const [arrayData, setArrayData] = useState([]);
  const edu_url = "http://140.125.45.160:6969/api/lab/articles";

  useEffect(() => {
    const edu_api = async () => {
      try {
        let { data } = await axios.get(edu_url);
        setArrayData(data.data);
      } catch (e) {}
    };
    edu_api();
  }, []);

  const Journal_columns = [
    { title: "Num", dataIndex: "num" },
    { title: "Author", dataIndex: "author" },
    { title: "Articles", dataIndex: "article" },
    { title: "", dataIndex: "reference" },
  ];
  return (
    <>
      <Table dataSource={arrayData} bordered columns={Journal_columns}></Table>
    </>
  );
}

export function Talks() {
  const [arrayData, setArrayData] = useState([]);
  const url = "http://140.125.45.160:6969/api/lab/talks";

  useEffect(() => {
    const edu_api = async () => {
      try {
        let { data } = await axios.get(url);
        setArrayData(data.data);
      } catch (e) {}
    };
    edu_api();
  }, []);

  const Talks_columns = [
    { title: "Date", dataIndex: "year" },
    { title: "Place", dataIndex: "place" },
    { title: "Topic", dataIndex: "topic" },
  ];
  return (
    <>
      <Table
        dataSource={arrayData}
        bordered
        pagination={false}
        columns={Talks_columns}
      ></Table>
    </>
  );
}

export function ServiceTag() {
  const [arrayData1, setArrayData1] = useState([]);
  const [arrayData2, setArrayData2] = useState([]);
  const [arrayData3, setArrayData3] = useState([]);
  const [arrayData4, setArrayData4] = useState([]);
  const [arrayData5, setArrayData5] = useState([]);
  const [arrayData6, setArrayData6] = useState([]);
  const [arrayData7, setArrayData7] = useState([]);
  const [arrayData8, setArrayData8] = useState([]);
  const url1 = "http://140.125.45.160:6969/api/lab/service?tag=1";
  const url2 = "http://140.125.45.160:6969/api/lab/service?tag=2";
  const url3 = "http://140.125.45.160:6969/api/lab/service?tag=3";
  const url4 = "http://140.125.45.160:6969/api/lab/service?tag=4";
  const url5 = "http://140.125.45.160:6969/api/lab/service?tag=5";
  const url6 = "http://140.125.45.160:6969/api/lab/service?tag=6";
  const url7 = "http://140.125.45.160:6969/api/lab/service?tag=7";
  const url8 = "http://140.125.45.160:6969/api/lab/service?tag=8";

  useEffect(() => {
    const api = async () => {
      try {
        let { data } = await axios.get(url1);
        setArrayData1(data.data);
      } catch (e) {}
    };
    api();
  }, []);

  useEffect(() => {
    const api = async () => {
      try {
        let { data } = await axios.get(url2);
        setArrayData2(data.data);
      } catch (e) {}
    };
    api();
  }, []);
  useEffect(() => {
    const api = async () => {
      try {
        let { data } = await axios.get(url3);
        setArrayData3(data.data);
      } catch (e) {}
    };
    api();
  }, []);
  useEffect(() => {
    const api = async () => {
      try {
        let { data } = await axios.get(url4);
        setArrayData4(data.data);
      } catch (e) {}
    };
    api();
  }, []);
  useEffect(() => {
    const api = async () => {
      try {
        let { data } = await axios.get(url5);
        setArrayData5(data.data);
      } catch (e) {}
    };
    api();
  }, []);
  useEffect(() => {
    const api = async () => {
      try {
        let { data } = await axios.get(url6);
        setArrayData6(data.data);
      } catch (e) {}
    };
    api();
  }, []);
  useEffect(() => {
    const api = async () => {
      try {
        let { data } = await axios.get(url7);
        setArrayData7(data.data);
      } catch (e) {}
    };
    api();
  }, []);
  useEffect(() => {
    const api = async () => {
      try {
        let { data } = await axios.get(url8);
        setArrayData8(data.data);
      } catch (e) {}
    };
    api();
  }, []);

  const Service_columns1 = [{ title: "", dataIndex: "description" }];

  const Service_columns2 = [
    { title: "Date", dataIndex: "date" },
    { title: "", dataIndex: "description" },
  ];
  const Service_columns3 = [
    { title: "Date", dataIndex: "date" },
    { title: "Place", dataIndex: "place" },
    { title: "", dataIndex: "description" },
  ];
  return (
    <>
      <Collapse defaultActiveKey={["1"]}>
        <Panel header={"國際研討會獲邀專題演講"} key="1" style={{backgroundColor:"#d4d3d3"}}>
          <Table
            dataSource={arrayData1}
            bordered
            pagination={false}
            columns={Service_columns3}
          ></Table>
        </Panel>
      </Collapse>
      <Collapse defaultActiveKey={["2"]} style={{backgroundColor:"#d4d3d3"}}>
        <Panel header={"特別議程主席"} key="2">
          <Table
            dataSource={arrayData2}
            bordered
            pagination={false}
            columns={Service_columns2}
          ></Table>
        </Panel>
      </Collapse>
      <Collapse defaultActiveKey={["3"]} style={{backgroundColor:"#d4d3d3"}}>
        <Panel header={"議程主席"} key="3">
          <Table
            dataSource={arrayData3}
            bordered
            pagination={false}
            columns={Service_columns2}
          ></Table>
        </Panel>
      </Collapse>
      <Collapse defaultActiveKey={["4"]} style={{backgroundColor:"#d4d3d3"}}>
        <Panel header={"海報議程主席"} key="4">
          <Table
            dataSource={arrayData4}
            bordered
            pagination={false}
            columns={Service_columns2}
          ></Table>
        </Panel>
      </Collapse>
      <Collapse defaultActiveKey={["5"]} style={{backgroundColor:"#d4d3d3"}}>
        <Panel header={"議程委員"} key="5">
          <Table
            dataSource={arrayData5}
            bordered
            pagination={false}
            columns={Service_columns2}
          ></Table>
        </Panel>
      </Collapse>
      <Collapse defaultActiveKey={["6"]} style={{backgroundColor:"#d4d3d3"}}>
        <Panel header={"議程主持人"} key="6">
          <Table
            dataSource={arrayData6}
            bordered
            pagination={false}
            columns={Service_columns3}
          ></Table>
        </Panel>
      </Collapse>
      <Collapse defaultActiveKey={["7"]} style={{backgroundColor:"#d4d3d3"}}>
        <Panel header={"學術委員"} key="7">
          <Table
            dataSource={arrayData7}
            bordered
            pagination={false}
            columns={Service_columns1}
          ></Table>
        </Panel>
      </Collapse>
      <Collapse defaultActiveKey={["8"]} style={{backgroundColor:"#d4d3d3"}}>
        <Panel header={"Reviewers"} key="8">
          <Table
            dataSource={arrayData8}
            bordered
            pagination={false}
            columns={Service_columns1}
          ></Table>
        </Panel>
      </Collapse>
    </>
  );
}

export function Conference() {
  const [arrayData, setArrayData] = useState([]);
  const url = "http://140.125.45.160:6969/api/lab/conference";

  useEffect(() => {
    const Conference_api = async () => {
      try {
        let { data } = await axios.get(url);
        setArrayData(data.data);
      } catch (e) {}
    };
    Conference_api();
  }, []);

  const Conference_columns = [
    { title: "Date", dataIndex: "year" },
    { title: "", dataIndex: "author" },
  ];
  return (
    <>
      <Table
        dataSource={arrayData}
        bordered
        pagination={false}
        columns={Conference_columns}
      ></Table>
    </>
  );
}

export function ProfessorAward() {
  const [arrayData, setArrayData] = useState([]);
  const url = "http://140.125.45.160:6969/api/lab/teacherAwards";

  useEffect(() => {
    const ProfessorAwards_api = async () => {
      try {
        let { data } = await axios.get(url);
        setArrayData(data.data);
      } catch (e) {}
    };
    ProfessorAwards_api();
  }, []);

  const ProfessorAwards_columns = [
    { title: "時間", dataIndex: "year" },
    { title: "地點/項目", dataIndex: "item" },
    { title: "獎項", dataIndex: "order" },
  ];
  return (
    // <Tabs defaultActiveKey="1">
    //   <TabPane tab={2021} key="1">
    <Table
      dataSource={arrayData}
      bordered
      // pagination={false}
      columns={ProfessorAwards_columns}
      
    ></Table>
    //   </TabPane>
    // </Tabs>
  );
}
