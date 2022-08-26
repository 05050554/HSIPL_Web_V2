import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Table } from "antd";

const ProjectContan = styled.div`
  padding: 5%;
`;

const GrantSupportTable = () => {
  const [arrayData, setArrayData] = useState([]);

  const project_url = "http://140.125.45.160:6969/api/lab/projects";

  useEffect(() => {
    const project_api = async () => {
      try {
        let { data } = await axios.get(project_url);
        setArrayData(data.detail);
        console.log(data.detail);
      } catch (e) {}
    };
    project_api();
  }, []);
  const Projects_columns = [
    { title: "計畫名稱", dataIndex: "title" },
    { title: "起訖日期", dataIndex: "date" },
    { title: "補助單位", dataIndex: "assistUnit" },
    { title: "經費總額", dataIndex: "total" },
  ];

  return (
    <ProjectContan>
      <Table
        dataSource={arrayData}
        bordered
        pagination={false}
        columns={Projects_columns}
      ></Table>
    </ProjectContan>
  );
};

export default GrantSupportTable;
