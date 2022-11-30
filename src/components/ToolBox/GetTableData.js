import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Collapse } from "antd";
import { AddBtn, EditBtn, DeleteBtn } from "../ToolBox/Button";
import {
  AddFourDialog,
  EditFourDialog,
  DeleteFourDialog,
  AddThreeDialog,
  EditThreeDialog,
  DeleteThreeDialog,
  AddTwoDialog,
  EditTwoDialog,
  DeleteTwoDialog,
  AddOneDialog,
  EditOneDialog,
  DeleteOneDialog,
} from "../ProfessorDetail/PorfessorDialog";
const { Panel } = Collapse;

const GrantTable = (props) => {
  const [arrayData, setArrayData] = useState([]);
  const [newOpen, setNewOpen] = useState(false);
  const [newInfo, setNewInfo] = useState([]);
  const [editOpen, setEditOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState("");
  const [deleteOpen, setDeleteOpen] = useState(false);
  const url = "http://140:125:45:164:6969/api/lab/projects";
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
  };

  useEffect(() => {
    const project_api = async () => {
      try {
        let { data } = await axios.get(url);
        setArrayData(data.detail);
      } catch (e) {}
    };
    project_api();
  }, []);

  const handleNewClickOpen = () => {
    setNewOpen(true);
  };
  const handleNewClose = () => {
    setNewOpen(false);
  };

  const handleNewInfo = (e) => {
    const { value, name } = e.target;
    setNewInfo((preData) => ({
      ...preData,
      [name]: value,
    }));
  };

  const handleNewSubmit = async (e) => {
    try {
      await axios.post(url, JSON.stringify(newInfo), config);
      alert("新增成功");
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditClickOpen = (item) => {
    setEditOpen(true);

    setCurrentValue({
      id: item.id,
      title: item.title,
      date: item.date,
      assistUnit: item.assistUnit,
      total: item.total,
    });
  };
  const handleEditClose = () => {
    setEditOpen(false);
  };

  const handleEditSubmit = async () => {
    const formData = new FormData();

    if (newInfo.title) {
      formData.append("title", newInfo.title);
    } else {
      formData.append("title", currentValue.title);
    }

    if (newInfo.date) {
      formData.append("date", newInfo.date);
    } else {
      formData.append("date", currentValue.date);
    }

    if (newInfo.major) {
      formData.append("assistUnit", newInfo.assistUnit);
    } else {
      formData.append("assistUnit", currentValue.assistUnit);
    }

    if (newInfo.total) {
      formData.append("total", newInfo.total);
    } else {
      formData.append("total", currentValue.total);
    }

    const Jsondata = {};
    formData.forEach((value, key) => (Jsondata[key] = value));

    try {
      await axios.put(url + "/" + currentValue.id, Jsondata, config);
      alert("編輯成功");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteClickOpen = (item) => {
    setDeleteOpen(true);
    setCurrentValue({
      id: item.id,
      title: item.title,
      date: item.date,
      assistUnit: item.assistUnit,
      total: item.total,
    });
  };
  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };

  const handleDeleteSubmit = async () => {
    try {
      await axios.delete(url + "/" + currentValue.id, config);
      alert("刪除成功");
    } catch (error) {
      console.log(error);
    }
  };

  const Grant_columns = [
    { title: "計畫名稱", dataIndex: "title" },
    { title: "起訖日期", dataIndex: "date" },
    { title: "補助單位", dataIndex: "assistUnit" },
    { title: "經費總額", dataIndex: "total" },
  ];

  const Grant_columns_Edit = [
    { title: "計畫名稱", dataIndex: "title" },
    { title: "起訖日期", dataIndex: "date" },
    { title: "補助單位", dataIndex: "assistUnit" },
    { title: "經費總額", dataIndex: "total" },
    {
      title: "Edit",
      key: "key",
      dataIndex: "key",
      render: (text, record) => (
        <EditBtn action={() => handleEditClickOpen(record)} />
      ),
    },
    {
      title: "Delete",
      key: "key",
      dataIndex: "key",
      render: (text, record) => (
        <DeleteBtn action={() => handleDeleteClickOpen(record)} />
      ),
    },
  ];

  return (
    <>
      {props.action === "Edit" ? (
        <>
         <AddBtn action={handleNewClickOpen} />
        <Table
          dataSource={arrayData}
          bordered
          pagination={false}
          columns={Grant_columns_Edit}
        ></Table>
        </>
      ) : (
        <Table
          dataSource={arrayData}
          bordered
          pagination={false}
          columns={Grant_columns}
        ></Table>
      )}
       {/*New Dialog*/}
       <AddFourDialog
        actionOpen={newOpen}
        actionClose={handleNewClose}
        titleName="新增資訊"
        actionSubmit={handleNewSubmit}
        actionInfoChange={handleNewInfo}
        textFieldValue1={newInfo.title}
        textFieldValue2={newInfo.date}
        textFieldValue3={newInfo.assistUnit}
        textFieldValue4={newInfo.total}
        textFieldLabel1="計畫名稱"
        textFieldName1="title"
        textFieldLabel2="起訖日期"
        textFieldName2="date"
        textFieldLabel3="補助單位"
        textFieldName3="assistUnit"
        textFieldLabel4="經費總額"
        textFieldName4="total"
      />
      {/*Edit dialog*/}
      <EditFourDialog
        actionOpen={editOpen}
        actionClose={handleEditClose}
        titleName="修改資訊"
        actionInfoChange={handleNewInfo}
        actionSubmit={handleEditSubmit}
        currentId={currentValue.id}
        currentValue1={currentValue.title}
        currentValue2={currentValue.date}
        currentValue3={currentValue.assistUnit}
        currentValue4={currentValue.total}
        textFieldLabel1="計畫名稱"
        textFieldName1="title"
        textFieldLabel2="起訖日期"
        textFieldName2="date"
        textFieldLabel3="補助單位"
        textFieldName3="assistUnit"
        textFieldLabel4="經費總額"
        textFieldName4="total"
      />
      {/*Delete dialog*/}
      <DeleteFourDialog
        actionOpen={deleteOpen}
        actionClose={handleDeleteClose}
        titleName="刪除資訊"
        actionSubmit={handleDeleteSubmit}
        currentId={currentValue.id}
        currentValue1={currentValue.title}
        currentValue2={currentValue.date}
        currentValue3={currentValue.assistUnit}
        currentValue4={currentValue.total}
        textFieldLabel1="計畫名稱"
        textFieldLabel2="起訖日期"
        textFieldLabel3="補助單位"
        textFieldLabel4="經費總額"
      />
    </>
  );
};

export default GrantTable;

export function ProfessorEdu(props) {
  const [arrayData, setArrayData] = useState([]);
  const [newOpen, setNewOpen] = useState(false);
  const [newInfo, setNewInfo] = useState([]);
  const [editOpen, setEditOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState("");
  const [deleteOpen, setDeleteOpen] = useState(false);
  const IP = "http://140:125:45:164:6969/";
  const url = "http://140:125:45:164:6969/api/lab/education";
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
  };
  useEffect(() => {
    const edu_api = async () => {
      try {
        let { data } = await axios.get(url);
        setArrayData(data.data);
      } catch (e) {}
    };
    edu_api();
  }, []);

  const handleNewClickOpen = () => {
    setNewOpen(true);
  };
  const handleNewClose = () => {
    setNewOpen(false);
  };

  const handleNewInfo = (e) => {
    const { value, name } = e.target;
    setNewInfo((preData) => ({
      ...preData,
      [name]: value,
    }));
  };

  const handleNewSubmit = async (e) => {
    try {
      await axios.post(url, JSON.stringify(newInfo), config);
      alert("新增成功");
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditClickOpen = (item) => {
    setEditOpen(true);

    setCurrentValue({
      id: item.id,
      year: item.year,
      degree: item.degree,
      instiution: item.instiution,
      major: item.major,
    });
  };
  const handleEditClose = () => {
    setEditOpen(false);
  };

  const handleEditSubmit = async () => {
    const formData = new FormData();

    if (newInfo.year) {
      formData.append("year", newInfo.year);
    } else {
      formData.append("year", currentValue.year);
    }

    if (newInfo.instiution) {
      formData.append("instiution", newInfo.instiution);
    } else {
      formData.append("instiution", currentValue.instiution);
    }

    if (newInfo.major) {
      formData.append("major", newInfo.major);
    } else {
      formData.append("major", currentValue.major);
    }

    if (newInfo.degree) {
      formData.append("degree", newInfo.degree);
    } else {
      formData.append("degree", currentValue.degree);
    }

    const Jsondata = {};
    formData.forEach((value, key) => (Jsondata[key] = value));

    try {
      await axios.put(url + "/" + currentValue.id, Jsondata, config);
      alert("編輯成功");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteClickOpen = (item) => {
    setDeleteOpen(true);
    setCurrentValue({
      id: item.id,
      year: item.year,
      degree: item.degree,
      instiution: item.instiution,
      major: item.major,
    });
  };
  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };

  const handleDeleteSubmit = async () => {
    try {
      await axios.delete(url + "/" + currentValue.id, config);
      alert("刪除成功");
    } catch (error) {
      console.log(error);
    }
  };

  const Edu_columns = [
    { title: "From and to", dataIndex: "year" },
    { title: "Institution", dataIndex: "instiution" },
    { title: "Major", dataIndex: "major" },
    { title: "Degree", dataIndex: "degree" },
  ];

  const Edu_columns_Edit = [
    { title: "From and to", dataIndex: "year" },
    { title: "Institution", dataIndex: "instiution" },
    { title: "Major", dataIndex: "major" },
    { title: "Degree", dataIndex: "degree" },

    {
      title: "Edit",
      key: "key",
      dataIndex: "key",
      render: (text, record) => (
        <EditBtn action={() => handleEditClickOpen(record)} />
      ),
    },
    {
      title: "Delete",
      key: "key",
      dataIndex: "key",
      render: (text, record) => (
        <DeleteBtn action={() => handleDeleteClickOpen(record)} />
      ),
    },
  ];

  return (
    <>
      {props.action === "Edit" ? (
        <>
          <AddBtn action={handleNewClickOpen} />
          <Table
            dataSource={arrayData}
            bordered
            pagination={false}
            columns={Edu_columns_Edit}
          />
        </>
      ) : (
        <Table
          dataSource={arrayData}
          bordered
          pagination={false}
          columns={Edu_columns}
        />
      )}
      {/*New Dialog*/}
      <AddFourDialog
        actionOpen={newOpen}
        actionClose={handleNewClose}
        titleName="新增資訊"
        actionSubmit={handleNewSubmit}
        actionInfoChange={handleNewInfo}
        textFieldValue1={newInfo.year}
        textFieldValue2={newInfo.instiution}
        textFieldValue3={newInfo.major}
        textFieldValue4={newInfo.degree}
        textFieldLabel1="From and to"
        textFieldName1="year"
        textFieldLabel2="Instiution"
        textFieldName2="instiution"
        textFieldLabel3="Major"
        textFieldName3="major"
        textFieldLabel4="Degree"
        textFieldName4="degree"
      />
      {/*Edit dialog*/}
      <EditFourDialog
        actionOpen={editOpen}
        actionClose={handleEditClose}
        titleName="修改資訊"
        actionInfoChange={handleNewInfo}
        actionSubmit={handleEditSubmit}
        IP={IP}
        currentId={currentValue.id}
        currentValue1={currentValue.year}
        currentValue2={currentValue.degree}
        currentValue3={currentValue.instiution}
        currentValue4={currentValue.major}
        textFieldLabel1="From and to"
        textFieldName1="year"
        textFieldLabel2="Instiution"
        textFieldName2="instiution"
        textFieldLabel3="Major"
        textFieldName3="major"
        textFieldLabel4="Degree"
        textFieldName4="degree"
      />
      {/*Delete dialog*/}
      <DeleteFourDialog
        actionOpen={deleteOpen}
        actionClose={handleDeleteClose}
        titleName="刪除資訊"
        actionSubmit={handleDeleteSubmit}
        IP={IP}
        currentId={currentValue.id}
        currentValue1={currentValue.year}
        currentValue2={currentValue.degree}
        currentValue3={currentValue.instiution}
        currentValue4={currentValue.major}
        textFieldLabel1="From and to"
        textFieldLabel2="Instiution"
        textFieldLabel3="Major"
        textFieldLabel4="Degree"
      />
    </>
  );
}

export function ResearchEXP(props) {
  const [arrayData, setArrayData] = useState([]);
  const [newOpen, setNewOpen] = useState(false);
  const [newInfo, setNewInfo] = useState([]);
  const [editOpen, setEditOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState("");
  const [deleteOpen, setDeleteOpen] = useState(false);
  const url = "http://140:125:45:164:6969/api/lab/researchExperience";
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
  };
  useEffect(() => {
    const edu_api = async () => {
      try {
        let { data } = await axios.get(url);
        setArrayData(data.data);
      } catch (e) {}
    };
    edu_api();
  }, []);

  const handleNewClickOpen = () => {
    setNewOpen(true);
  };
  const handleNewClose = () => {
    setNewOpen(false);
  };

  const handleNewInfo = (e) => {
    const { value, name } = e.target;
    setNewInfo((preData) => ({
      ...preData,
      [name]: value,
    }));
    console.log(newInfo);
  };

  const handleNewSubmit = async () => {
    try {
      await axios.post(url, JSON.stringify(newInfo), config);
      alert("新增成功");
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditClickOpen = (item) => {
    setEditOpen(true);

    setCurrentValue({
      id: item.id,
      year: item.year,
      employer: item.employer,
      position: item.position,
    });
  };
  const handleEditClose = () => {
    setEditOpen(false);
  };

  const handleEditSubmit = async () => {
    const formData = new FormData();

    if (newInfo.year) {
      formData.append("year", newInfo.year);
    } else {
      formData.append("year", currentValue.year);
    }

    if (newInfo.employer) {
      formData.append("employer", newInfo.employer);
    } else {
      formData.append("employer", currentValue.employer);
    }

    if (newInfo.position) {
      formData.append("position", newInfo.position);
    } else {
      formData.append("position", currentValue.position);
    }

    const Jsondata = {};
    formData.forEach((value, key) => (Jsondata[key] = value));

    try {
      await axios.put(url + "/" + currentValue.id, Jsondata, config);
      alert("編輯成功");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteClickOpen = (item) => {
    setDeleteOpen(true);
    setCurrentValue({
      id: item.id,
      year: item.year,
      employer: item.employer,
      position: item.position,
    });
  };
  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };

  const handleDeleteSubmit = async () => {
    try {
      await axios.delete(url + "/" + currentValue.id, config);
      alert("刪除成功");
    } catch (error) {
      console.log(error);
    }
  };

  const Research_columns = [
    { title: "From and to", dataIndex: "year" },
    { title: "Employer", dataIndex: "employer" },
    { title: "Position", dataIndex: "position" },
  ];
  const Research_columns_Edit = [
    { title: "From and to", dataIndex: "year" },
    { title: "Employer", dataIndex: "employer" },
    { title: "Position", dataIndex: "position" },
    {
      title: "Edit",
      key: "key",
      dataIndex: "key",
      render: (text, record) => (
        <EditBtn action={() => handleEditClickOpen(record)} />
      ),
    },
    {
      title: "Delete",
      key: "key",
      dataIndex: "key",
      render: (text, record) => (
        <DeleteBtn action={() => handleDeleteClickOpen(record)} />
      ),
    },
  ];
  return (
    <>
      {props.action === "Edit" ? (
        <>
          <AddBtn action={handleNewClickOpen} />
          <Table
            dataSource={arrayData}
            bordered
            pagination={false}
            columns={Research_columns_Edit}
          ></Table>
        </>
      ) : (
        <Table
          dataSource={arrayData}
          bordered
          pagination={false}
          columns={Research_columns}
        ></Table>
      )}

      {/*New Dialog*/}
      <AddThreeDialog
        actionOpen={newOpen}
        actionClose={handleNewClose}
        titleName="新增資訊"
        actionSubmit={handleNewSubmit}
        actionInfoChange={handleNewInfo}
        textFieldValue1={newInfo.year}
        textFieldValue2={newInfo.employer}
        textFieldValue3={newInfo.position}
        textFieldLabel1="From and to"
        textFieldName1="year"
        textFieldName2="employer"
        textFieldLabel2="Employer"
        textFieldName3="position"
        textFieldLabel3="Position"
      />
      {/*Edit dialog*/}
      <EditThreeDialog
        actionOpen={editOpen}
        actionClose={handleEditClose}
        titleName="修改資訊"
        actionInfoChange={handleNewInfo}
        actionSubmit={handleEditSubmit}
        currentId={currentValue.id}
        currentValue1={currentValue.year}
        currentValue2={currentValue.employer}
        currentValue3={currentValue.position}
        textFieldLabel1="From and to"
        textFieldName1="year"
        textFieldName2="employer"
        textFieldLabel2="Employer"
        textFieldName3="position"
        textFieldLabel3="Position"
      />
      {/*Delete dialog*/}
      <DeleteThreeDialog
        actionOpen={deleteOpen}
        actionClose={handleDeleteClose}
        titleName="刪除資訊"
        actionSubmit={handleDeleteSubmit}
        currentId={currentValue.id}
        currentValue1={currentValue.year}
        currentValue2={currentValue.employer}
        currentValue3={currentValue.position}
        textFieldLabel1="From and to"
        textFieldLabel2="Employer"
        textFieldLabel3="Position"
      />
    </>
  );
}

export function JournalArt(props) {
  const [arrayData, setArrayData] = useState([]);
  const url = "http://140:125:45:164:6969/api/lab/articles";
  const [newOpen, setNewOpen] = useState(false);
  const [newInfo, setNewInfo] = useState([]);
  const [editOpen, setEditOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState("");
  const [deleteOpen, setDeleteOpen] = useState(false);
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
  };
  useEffect(() => {
    const edu_api = async () => {
      try {
        let { data } = await axios.get(url);
        setArrayData(data.data);
      } catch (e) {}
    };
    edu_api();
  }, []);

  const handleNewClickOpen = () => {
    setNewOpen(true);
  };
  const handleNewClose = () => {
    setNewOpen(false);
  };

  const handleNewInfo = (e) => {
    const { value, name } = e.target;
    setNewInfo((preData) => ({
      ...preData,
      [name]: value,
    }));
    console.log(newInfo);
  };

  const handleNewSubmit = async () => {
    try {
      await axios.post(url, JSON.stringify(newInfo), config);
      alert("新增成功");
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditClickOpen = (item) => {
    setEditOpen(true);

    setCurrentValue({
      id: item.id,
      num: item.num,
      author: item.author,
      article: item.article,
      reference: item.reference,
    });
  };
  const handleEditClose = () => {
    setEditOpen(false);
  };

  const handleEditSubmit = async () => {
    const formData = new FormData();

    if (newInfo.num) {
      formData.append("num", newInfo.num);
    } else {
      formData.append("num", currentValue.num);
    }

    if (newInfo.author) {
      formData.append("author", newInfo.author);
    } else {
      formData.append("author", currentValue.author);
    }

    if (newInfo.article) {
      formData.append("article", newInfo.article);
    } else {
      formData.append("article", currentValue.article);
    }

    if (newInfo.reference) {
      formData.append("reference", newInfo.reference);
    } else {
      formData.append("reference", currentValue.reference);
    }

    const Jsondata = {};
    formData.forEach((value, key) => (Jsondata[key] = value));

    try {
      await axios.put(url + "/" + currentValue.id, Jsondata, config);
      alert("編輯成功");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteClickOpen = (item) => {
    setDeleteOpen(true);
    setCurrentValue({
      id: item.id,
      num: item.num,
      author: item.author,
      article: item.article,
      reference: item.reference,
    });
  };
  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };

  const handleDeleteSubmit = async () => {
    try {
      await axios.delete(url + "/" + currentValue.id, config);
      alert("刪除成功");
    } catch (error) {
      console.log(error);
    }
  };

  const Journal_columns = [
    { title: "Num", dataIndex: "num" },
    { title: "Author", dataIndex: "author" },
    { title: "Articles", dataIndex: "article" },
    { title: "", dataIndex: "reference" },
  ];

  const Journal_columns_Edit = [
    { title: "Num", dataIndex: "num" },
    { title: "Author", dataIndex: "author" },
    { title: "Articles", dataIndex: "article" },
    { title: "", dataIndex: "reference" },
    {
      title: "Edit",
      key: "key",
      dataIndex: "key",
      render: (text, record) => (
        <EditBtn action={() => handleEditClickOpen(record)} />
      ),
    },
    {
      title: "Delete",
      key: "key",
      dataIndex: "key",
      render: (text, record) => (
        <DeleteBtn action={() => handleDeleteClickOpen(record)} />
      ),
    },
  ];

  return (
    <>
      {props.action === "Edit" ? (
        <>
          <AddBtn action={handleNewClickOpen} />
          <Table
            dataSource={arrayData}
            bordered
            columns={Journal_columns_Edit}
          ></Table>
        </>
      ) : (
        <Table
          dataSource={arrayData}
          bordered
          columns={Journal_columns}
        ></Table>
      )}
      {/*New Dialog*/}
      <AddFourDialog
        actionOpen={newOpen}
        actionClose={handleNewClose}
        titleName="新增資訊"
        actionSubmit={handleNewSubmit}
        actionInfoChange={handleNewInfo}
        textFieldValue1={newInfo.num}
        textFieldValue2={newInfo.author}
        textFieldValue3={newInfo.article}
        textFieldValue4={newInfo.reference}
        textFieldLabel1="Num"
        textFieldName1="num"
        textFieldLabel2="Author"
        textFieldName2="author"
        textFieldLabel3="Article"
        textFieldName3="article"
        textFieldLabel4="Reference"
        textFieldName4="reference"
      />
      {/*Edit dialog*/}
      <EditFourDialog
        actionOpen={editOpen}
        actionClose={handleEditClose}
        titleName="修改資訊"
        actionInfoChange={handleNewInfo}
        actionSubmit={handleEditSubmit}
        textFieldLabel1="Num"
        textFieldName1="num"
        textFieldLabel2="Author"
        textFieldName2="author"
        textFieldLabel3="Article"
        textFieldName3="article"
        textFieldLabel4="Reference"
        textFieldName4="reference"
        currentId={currentValue.id}
        currentValue1={currentValue.num}
        currentValue2={currentValue.author}
        currentValue3={currentValue.article}
        currentValue4={currentValue.reference}
      />
      {/*Delete dialog*/}
      <DeleteFourDialog
        actionOpen={deleteOpen}
        actionClose={handleDeleteClose}
        titleName="刪除資訊"
        actionSubmit={handleDeleteSubmit}
        textFieldLabel1="Num"
        textFieldLabel2="Author"
        textFieldLabel3="Article"
        textFieldLabel4="Reference"
        currentId={currentValue.id}
        currentValue1={currentValue.num}
        currentValue2={currentValue.author}
        currentValue3={currentValue.article}
        currentValue4={currentValue.reference}
      />
    </>
  );
}

export function Talks(props) {
  const [arrayData, setArrayData] = useState([]);
  const [newOpen, setNewOpen] = useState(false);
  const [newInfo, setNewInfo] = useState([]);
  const [editOpen, setEditOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState("");
  const [deleteOpen, setDeleteOpen] = useState(false);
  const url = "http://140:125:45:164:6969/api/lab/talks";
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
  };
  useEffect(() => {
    const edu_api = async () => {
      try {
        let { data } = await axios.get(url);
        setArrayData(data.data);
      } catch (e) {}
    };
    edu_api();
  }, []);

  const handleNewClickOpen = () => {
    setNewOpen(true);
  };
  const handleNewClose = () => {
    setNewOpen(false);
  };

  const handleNewInfo = (e) => {
    const { value, name } = e.target;
    setNewInfo((preData) => ({
      ...preData,
      [name]: value,
    }));
    console.log(newInfo);
  };

  const handleNewSubmit = async () => {
    try {
      await axios.post(url, JSON.stringify(newInfo), config);
      alert("新增成功");
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditClickOpen = (item) => {
    setEditOpen(true);

    setCurrentValue({
      id: item.id,
      year: item.year,
      place: item.place,
      topic: item.topic,
    });
  };
  const handleEditClose = () => {
    setEditOpen(false);
  };

  const handleEditSubmit = async () => {
    const formData = new FormData();

    if (newInfo.year) {
      formData.append("year", newInfo.year);
    } else {
      formData.append("year", currentValue.year);
    }

    if (newInfo.place) {
      formData.append("place", newInfo.place);
    } else {
      formData.append("place", currentValue.place);
    }

    if (newInfo.topic) {
      formData.append("topic", newInfo.topic);
    } else {
      formData.append("topic", currentValue.topic);
    }

    const Jsondata = {};
    formData.forEach((value, key) => (Jsondata[key] = value));

    try {
      await axios.put(url + "/" + currentValue.id, Jsondata, config);
      alert("編輯成功");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteClickOpen = (item) => {
    setDeleteOpen(true);
    setCurrentValue({
      id: item.id,
      year: item.year,
      place: item.place,
      topic: item.topic,
    });
  };
  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };

  const handleDeleteSubmit = async () => {
    try {
      await axios.delete(url + "/" + currentValue.id, config);
      alert("刪除成功");
    } catch (error) {
      console.log(error);
    }
  };

  const Talks_columns = [
    { title: "Date", dataIndex: "year" },
    { title: "Place", dataIndex: "place" },
    { title: "Topic", dataIndex: "topic" },
  ];

  const Talks_columns_Edit = [
    { title: "Date", dataIndex: "year" },
    { title: "Place", dataIndex: "place" },
    { title: "Topic", dataIndex: "topic" },
    {
      title: "Edit",
      key: "key",
      dataIndex: "key",
      render: (text, record) => (
        <EditBtn action={() => handleEditClickOpen(record)} />
      ),
    },
    {
      title: "Delete",
      key: "key",
      dataIndex: "key",
      render: (text, record) => (
        <DeleteBtn action={() => handleDeleteClickOpen(record)} />
      ),
    },
  ];
  return (
    <>
      {props.action === "Edit" ? (
        <>
          <AddBtn action={handleNewClickOpen} />
          <Table
            dataSource={arrayData}
            bordered
            pagination={false}
            columns={Talks_columns_Edit}
          ></Table>
        </>
      ) : (
        <Table
          dataSource={arrayData}
          bordered
          pagination={false}
          columns={Talks_columns}
        ></Table>
      )}
      {/*New Dialog*/}
      <AddThreeDialog
        actionOpen={newOpen}
        actionClose={handleNewClose}
        titleName="新增資訊"
        actionSubmit={handleNewSubmit}
        actionInfoChange={handleNewInfo}
        textFieldValue1={newInfo.year}
        textFieldValue2={newInfo.employer}
        textFieldValue3={newInfo.position}
        textFieldLabel1="Date"
        textFieldName1="year"
        textFieldName2="place"
        textFieldLabel2="Place"
        textFieldName3="topic"
        textFieldLabel3="Topic"
      />
      {/*Edit dialog*/}
      <EditThreeDialog
        actionOpen={editOpen}
        actionClose={handleEditClose}
        titleName="修改資訊"
        actionInfoChange={handleNewInfo}
        actionSubmit={handleEditSubmit}
        currentId={currentValue.id}
        currentValue1={currentValue.year}
        currentValue2={currentValue.place}
        currentValue3={currentValue.topic}
        textFieldLabel1="Date"
        textFieldName1="year"
        textFieldName2="place"
        textFieldLabel2="Place"
        textFieldName3="topic"
        textFieldLabel3="Topic"
      />
      {/*Delete dialog*/}
      <DeleteThreeDialog
        actionOpen={deleteOpen}
        actionClose={handleDeleteClose}
        titleName="刪除資訊"
        actionSubmit={handleDeleteSubmit}
        currentId={currentValue.id}
        currentValue1={currentValue.year}
        currentValue2={currentValue.place}
        currentValue3={currentValue.topic}
        textFieldLabel1="Date"
        textFieldLabel2="Place"
        textFieldLabel3="Topic"
      />
    </>
  );
}

export function ServiceTag1(props) {
  const [arrayData, setArrayData] = useState([]);

  const [newOpen, setNewOpen] = useState(false);
  const [newInfo, setNewInfo] = useState({ tag: props.num });
  const [editOpen, setEditOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState("");
  const [deleteOpen, setDeleteOpen] = useState(false);
  const num = props.num;
  const urlOld = "http://140:125:45:164:6969/api/lab/service?tag=";
  const url = urlOld + num;
  const url2 = "http://140:125:45:164:6969/api/lab/service";
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
  };

  useEffect(() => {
    const api = async () => {
      try {
        let { data } = await axios.get(url);
        setArrayData(data.data);
        console.log(data.data);
      } catch (e) {}
    };
    api();
  }, [url]);

  const handleNewClickOpen = () => {
    setNewOpen(true);
  };
  const handleNewClose = () => {
    setNewOpen(false);
  };

  const handleNewInfo = (e) => {
    const { value, name } = e.target;
    setNewInfo((preData) => ({
      ...preData,
      [name]: value,
    }));
    console.log(newInfo);
  };

  const handleNewSubmit = async () => {
    try {
      await axios.post(url2, JSON.stringify(newInfo), config);
      alert("新增成功");
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditClickOpen = (item) => {
    setEditOpen(true);

    setCurrentValue({
      id: item.id,
      date: item.date,
      place: item.place,
      description: item.description,
    });
  };
  const handleEditClose = () => {
    setEditOpen(false);
  };

  const handleEditSubmit = async () => {
    const formData = new FormData();
    formData.append("tag", newInfo.tag);
    if (newInfo.date) {
      formData.append("date", newInfo.date);
    } else {
      formData.append("date", currentValue.date);
    }

    if (newInfo.place) {
      formData.append("place", newInfo.place);
    } else {
      formData.append("place", currentValue.place);
    }

    if (newInfo.description) {
      formData.append("description", newInfo.description);
    } else {
      formData.append("description", currentValue.description);
    }

    const Jsondata = {};
    formData.forEach((value, key) => (Jsondata[key] = value));

    try {
      await axios.put(url2 + "/" + currentValue.id, Jsondata, config);
      alert("編輯成功");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteClickOpen = (item) => {
    setDeleteOpen(true);
    setCurrentValue({
      id: item.id,
      date: item.date,
      place: item.place,
      description: item.description,
    });
  };
  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };

  const handleDeleteSubmit = async () => {
    try {
      await axios.delete(url2 + "/" + currentValue.id, config);
      alert("刪除成功");
    } catch (error) {
      console.log(error);
    }
  };

  const Service_columns3 = [
    { title: "Date", dataIndex: "date" },
    { title: "Place", dataIndex: "place" },
    { title: "", dataIndex: "description" },
  ];
  const Service_columns3_Edit = [
    { title: "Date", dataIndex: "date" },
    { title: "Place", dataIndex: "place" },
    { title: "", dataIndex: "description" },
    {
      title: "Edit",
      key: "key",
      dataIndex: "key",
      render: (text, record) => (
        <EditBtn action={() => handleEditClickOpen(record)} />
      ),
    },
    {
      title: "Delete",
      key: "key",
      dataIndex: "key",
      render: (text, record) => (
        <DeleteBtn action={() => handleDeleteClickOpen(record)} />
      ),
    },
  ];
  return (
    <>
      {props.action === "Edit" ? (
        <>
          <Collapse defaultActiveKey={["1"]}>
            <Panel
              header={props.header}
              key="1"
              style={{ backgroundColor: "#d4d3d3" }}
            >
              <AddBtn action={handleNewClickOpen} />
              <br /> <br />
              <Table
                dataSource={arrayData}
                bordered
                pagination={false}
                columns={Service_columns3_Edit}
              ></Table>
            </Panel>
          </Collapse>
          {/*New Dialog*/}
          <AddThreeDialog
            actionOpen={newOpen}
            actionClose={handleNewClose}
            titleName="新增資訊"
            actionSubmit={handleNewSubmit}
            actionInfoChange={handleNewInfo}
            textFieldValue1={newInfo.date}
            textFieldValue2={newInfo.place}
            textFieldValue3={newInfo.description}
            textFieldLabel1="Date"
            textFieldName1="date"
            textFieldLabel2="Place"
            textFieldName2="place"
            textFieldLabel3="Description"
            textFieldName3="description"
          />
          {/*Edit dialog*/}
          <EditThreeDialog
            actionOpen={editOpen}
            actionClose={handleEditClose}
            titleName="修改資訊"
            actionInfoChange={handleNewInfo}
            actionSubmit={handleEditSubmit}
            currentId={currentValue.id}
            currentValue1={currentValue.date}
            currentValue2={currentValue.place}
            currentValue3={currentValue.description}
            textFieldLabel1="Date"
            textFieldName1="date"
            textFieldLabel2="Place"
            textFieldName2="place"
            textFieldLabel3="Description"
            textFieldName3="description"
          />
          {/*Delete dialog*/}
          <DeleteThreeDialog
            actionOpen={deleteOpen}
            actionClose={handleDeleteClose}
            titleName="刪除資訊"
            actionSubmit={handleDeleteSubmit}
            currentId={currentValue.id}
            currentValue1={currentValue.date}
            currentValue2={currentValue.place}
            currentValue3={currentValue.description}
            textFieldLabel1="Date"
            textFieldLabel2="Place"
            textFieldLabel3="Description"
          />
        </>
      ) : (
        <>
          <Collapse defaultActiveKey={["1"]}>
            <Panel
              header={props.header}
              key="1"
              style={{ backgroundColor: "#d4d3d3" }}
            >
              <Table
                dataSource={arrayData}
                bordered
                pagination={false}
                columns={Service_columns3}
              ></Table>
            </Panel>
          </Collapse>
        </>
      )}
    </>
  );
}

export function ServiceTag2(props) {
  const [arrayData, setArrayData] = useState([]);

  const [newOpen, setNewOpen] = useState(false);
  const [newInfo, setNewInfo] = useState({ tag: props.num });
  const [editOpen, setEditOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState("");
  const [deleteOpen, setDeleteOpen] = useState(false);
  const num = props.num;
  const urlOld = "http://140:125:45:164:6969/api/lab/service?tag=";
  const url = urlOld + num;
  const url2 = "http://140:125:45:164:6969/api/lab/service";
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
  };

  useEffect(() => {
    const api = async () => {
      try {
        let { data } = await axios.get(url);
        setArrayData(data.data);
      } catch (e) {}
    };
    api();
  }, [url]);

  const handleNewClickOpen = () => {
    setNewOpen(true);
  };
  const handleNewClose = () => {
    setNewOpen(false);
  };

  const handleNewInfo = (e) => {
    const { value, name } = e.target;
    setNewInfo((preData) => ({
      ...preData,
      [name]: value,
    }));
    console.log(newInfo);
  };

  const handleNewSubmit = async () => {
    try {
      await axios.post(url2, JSON.stringify(newInfo), config);
      alert("新增成功");
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditClickOpen = (item) => {
    setEditOpen(true);

    setCurrentValue({
      id: item.id,
      date: item.date,
      description: item.description,
    });
  };
  const handleEditClose = () => {
    setEditOpen(false);
  };

  const handleEditSubmit = async () => {
    const formData = new FormData();
    formData.append("tag", newInfo.tag);
    if (newInfo.date) {
      formData.append("date", newInfo.date);
    } else {
      formData.append("date", currentValue.date);
    }

    if (newInfo.description) {
      formData.append("description", newInfo.description);
    } else {
      formData.append("description", currentValue.description);
    }

    const Jsondata = {};
    formData.forEach((value, key) => (Jsondata[key] = value));

    try {
      await axios.put(url2 + "/" + currentValue.id, Jsondata, config);
      alert("編輯成功");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteClickOpen = (item) => {
    setDeleteOpen(true);
    setCurrentValue({
      id: item.id,
      date: item.date,
      description: item.description,
    });
  };
  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };

  const handleDeleteSubmit = async () => {
    try {
      await axios.delete(url2 + "/" + currentValue.id, config);
      alert("刪除成功");
    } catch (error) {
      console.log(error);
    }
  };

  const Service_columns2 = [
    { title: "Date", dataIndex: "date" },
    { title: "", dataIndex: "description" },
  ];
  const Service_columns2_Edit = [
    { title: "Date", dataIndex: "date" },
    { title: "", dataIndex: "description" },
    {
      title: "Edit",
      key: "key",
      dataIndex: "key",
      render: (text, record) => (
        <EditBtn action={() => handleEditClickOpen(record)} />
      ),
    },
    {
      title: "Delete",
      key: "key",
      dataIndex: "key",
      render: (text, record) => (
        <DeleteBtn action={() => handleDeleteClickOpen(record)} />
      ),
    },
  ];
  return (
    <>
      {props.action === "Edit" ? (
        <>
          <Collapse defaultActiveKey={["2"]}>
            <Panel
              header={props.header}
              key="1"
              style={{ backgroundColor: "#d4d3d3" }}
            >
              <AddBtn action={handleNewClickOpen} />
              <br /> <br />
              <Table
                dataSource={arrayData}
                bordered
                pagination={false}
                columns={Service_columns2_Edit}
              ></Table>
            </Panel>
          </Collapse>
          {/*New Dialog*/}
          <AddTwoDialog
            actionOpen={newOpen}
            actionClose={handleNewClose}
            titleName="新增資訊"
            actionSubmit={handleNewSubmit}
            actionInfoChange={handleNewInfo}
            textFieldValue1={newInfo.date}
            textFieldValue2={newInfo.description}
            textFieldLabel1="Date"
            textFieldName1="date"
            textFieldLabel2="Description"
            textFieldName2="description"
          />
          {/*Edit dialog*/}
          <EditTwoDialog
            actionOpen={editOpen}
            actionClose={handleEditClose}
            titleName="修改資訊"
            actionInfoChange={handleNewInfo}
            actionSubmit={handleEditSubmit}
            currentId={currentValue.id}
            currentValue1={currentValue.date}
            currentValue2={currentValue.description}
            textFieldLabel1="Date"
            textFieldName1="date"
            textFieldLabel2="Description"
            textFieldName2="description"
          />
          {/*Delete dialog*/}
          <DeleteTwoDialog
            actionOpen={deleteOpen}
            actionClose={handleDeleteClose}
            titleName="刪除資訊"
            actionSubmit={handleDeleteSubmit}
            currentId={currentValue.id}
            currentValue1={currentValue.date}
            currentValue2={currentValue.description}
            textFieldLabel1="Date"
            textFieldLabel2="Description"
          />
        </>
      ) : (
        <>
          <Collapse defaultActiveKey={["1"]}>
            <Panel
              header={props.header}
              key="1"
              style={{ backgroundColor: "#d4d3d3" }}
            >
              <Table
                dataSource={arrayData}
                bordered
                pagination={false}
                columns={Service_columns2}
              ></Table>
            </Panel>
          </Collapse>
        </>
      )}
    </>
  );
}

export function ServiceTag3(props) {
  const [arrayData, setArrayData] = useState([]);

  const [newOpen, setNewOpen] = useState(false);
  const [newInfo, setNewInfo] = useState({ tag: props.num });
  const [editOpen, setEditOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState("");
  const [deleteOpen, setDeleteOpen] = useState(false);
  const num = props.num;
  const urlOld = "http://140:125:45:164:6969/api/lab/service?tag=";
  const url = urlOld + num;
  const url2 = "http://140:125:45:164:6969/api/lab/service";
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
  };

  useEffect(() => {
    const api = async () => {
      try {
        let { data } = await axios.get(url);
        setArrayData(data.data);
      } catch (e) {}
    };
    api();
  }, [url]);

  const handleNewClickOpen = () => {
    setNewOpen(true);
  };
  const handleNewClose = () => {
    setNewOpen(false);
  };

  const handleNewInfo = (e) => {
    const { value, name } = e.target;
    setNewInfo((preData) => ({
      ...preData,
      [name]: value,
    }));
    console.log(newInfo);
  };

  const handleNewSubmit = async () => {
    try {
      await axios.post(url2, JSON.stringify(newInfo), config);
      alert("新增成功");
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditClickOpen = (item) => {
    setEditOpen(true);

    setCurrentValue({
      id: item.id,
      description: item.description,
    });
  };
  const handleEditClose = () => {
    setEditOpen(false);
  };

  const handleEditSubmit = async () => {
    const formData = new FormData();
    formData.append("tag", newInfo.tag);

    if (newInfo.description) {
      formData.append("description", newInfo.description);
    } else {
      formData.append("description", currentValue.description);
    }

    const Jsondata = {};
    formData.forEach((value, key) => (Jsondata[key] = value));

    try {
      await axios.put(url2 + "/" + currentValue.id, Jsondata, config);
      alert("編輯成功");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteClickOpen = (item) => {
    setDeleteOpen(true);
    setCurrentValue({
      id: item.id,
      description: item.description,
    });
  };
  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };

  const handleDeleteSubmit = async () => {
    try {
      await axios.delete(url2 + "/" + currentValue.id, config);
      alert("刪除成功");
    } catch (error) {
      console.log(error);
    }
  };

  const Service_columns1 = [{ title: "", dataIndex: "description" }];
  const Service_columns1_Edit = [
    { title: "", dataIndex: "description" },
    {
      title: "Edit",
      key: "key",
      dataIndex: "key",
      render: (text, record) => (
        <EditBtn action={() => handleEditClickOpen(record)} />
      ),
    },
    {
      title: "Delete",
      key: "key",
      dataIndex: "key",
      render: (text, record) => (
        <DeleteBtn action={() => handleDeleteClickOpen(record)} />
      ),
    },
  ];
  return (
    <>
      {props.action === "Edit" ? (
        <>
          <Collapse defaultActiveKey={["2"]}>
            <Panel
              header={props.header}
              key="1"
              style={{ backgroundColor: "#d4d3d3" }}
            >
              <AddBtn action={handleNewClickOpen} />
              <br /> <br />
              <Table
                dataSource={arrayData}
                bordered
                pagination={false}
                columns={Service_columns1_Edit}
              ></Table>
            </Panel>
          </Collapse>
          {/*New Dialog*/}
          <AddOneDialog
            actionOpen={newOpen}
            actionClose={handleNewClose}
            titleName="新增資訊"
            actionSubmit={handleNewSubmit}
            actionInfoChange={handleNewInfo}
            textFieldValue1={newInfo.description}
            textFieldLabel1="Description"
            textFieldName1="description"
          />
          {/*Edit dialog*/}
          <EditOneDialog
            actionOpen={editOpen}
            actionClose={handleEditClose}
            titleName="修改資訊"
            actionInfoChange={handleNewInfo}
            actionSubmit={handleEditSubmit}
            currentId={currentValue.id}
            currentValue1={currentValue.description}
            textFieldLabel1="Description"
            textFieldName1="description"
          />
          {/*Delete dialog*/}
          <DeleteOneDialog
            actionOpen={deleteOpen}
            actionClose={handleDeleteClose}
            titleName="刪除資訊"
            actionSubmit={handleDeleteSubmit}
            currentId={currentValue.id}
            currentValue1={currentValue.description}
            textFieldLabel1="Description"
          />
        </>
      ) : (
        <>
          <Collapse defaultActiveKey={["1"]}>
            <Panel
              header={props.header}
              key="1"
              style={{ backgroundColor: "#d4d3d3" }}
            >
              <Table
                dataSource={arrayData}
                bordered
                pagination={false}
                columns={Service_columns1}
              ></Table>
            </Panel>
          </Collapse>
        </>
      )}
    </>
  );
}

export function Conference(props) {
  const [arrayData, setArrayData] = useState([]);
  const [newOpen, setNewOpen] = useState(false);
  const [newInfo, setNewInfo] = useState([]);
  const [editOpen, setEditOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState("");
  const [deleteOpen, setDeleteOpen] = useState(false);
  const url = "http://140:125:45:164:6969/api/lab/conference";
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
  };
  useEffect(() => {
    const Conference_api = async () => {
      try {
        let { data } = await axios.get(url);
        setArrayData(data.data);
      } catch (e) {}
    };
    Conference_api();
  }, []);

  const handleNewClickOpen = () => {
    setNewOpen(true);
  };
  const handleNewClose = () => {
    setNewOpen(false);
  };

  const handleNewInfo = (e) => {
    const { value, name } = e.target;
    setNewInfo((preData) => ({
      ...preData,
      [name]: value,
    }));
  };

  const handleNewSubmit = async (e) => {
    try {
      await axios.post(url, JSON.stringify(newInfo), config);
      alert("新增成功");
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditClickOpen = (item) => {
    setEditOpen(true);

    setCurrentValue({
      id: item.id,
      year: item.year,
      author: item.author,
    });
  };
  const handleEditClose = () => {
    setEditOpen(false);
  };

  const handleEditSubmit = async () => {
    const formData = new FormData();

    if (newInfo.year) {
      formData.append("year", newInfo.year);
    } else {
      formData.append("year", currentValue.year);
    }

    if (newInfo.author) {
      formData.append("author", newInfo.author);
    } else {
      formData.append("author", currentValue.author);
    }

    const Jsondata = {};
    formData.forEach((value, key) => (Jsondata[key] = value));

    try {
      await axios.put(url + "/" + currentValue.id, Jsondata, config);
      alert("編輯成功");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteClickOpen = (item) => {
    setDeleteOpen(true);
    setCurrentValue({
      id: item.id,
      year: item.year,
      author: item.author,
    });
  };
  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };

  const handleDeleteSubmit = async () => {
    try {
      await axios.delete(url + "/" + currentValue.id, config);
      alert("刪除成功");
    } catch (error) {
      console.log(error);
    }
  };

  const Conference_columns = [
    { title: "Date", dataIndex: "year" },
    { title: "", dataIndex: "author" },
  ];

  const Conference_columns_Edit = [
    { title: "Date", dataIndex: "year" },
    { title: "", dataIndex: "author" },
    {
      title: "Edit",
      key: "key",
      dataIndex: "key",
      render: (text, record) => (
        <EditBtn action={() => handleEditClickOpen(record)} />
      ),
    },
    {
      title: "Delete",
      key: "key",
      dataIndex: "key",
      render: (text, record) => (
        <DeleteBtn action={() => handleDeleteClickOpen(record)} />
      ),
    },
  ];

  return (
    <>
      {props.action === "Edit" ? (
        <>
          <AddBtn action={handleNewClickOpen} />
          <Table
            dataSource={arrayData}
            bordered
            pagination={false}
            columns={Conference_columns_Edit}
          ></Table>
        </>
      ) : (
        <Table
          dataSource={arrayData}
          bordered
          pagination={false}
          columns={Conference_columns}
        ></Table>
      )}
      {/*New Dialog*/}
      <AddTwoDialog
        actionOpen={newOpen}
        actionClose={handleNewClose}
        titleName="新增資訊"
        actionSubmit={handleNewSubmit}
        actionInfoChange={handleNewInfo}
        textFieldValue1={newInfo.year}
        textFieldValue2={newInfo.author}
        textFieldLabel1="Date"
        textFieldName1="year"
        textFieldLabel2="Author"
        textFieldName2="author"
      />
      {/*Edit dialog*/}
      <EditTwoDialog
        actionOpen={editOpen}
        actionClose={handleEditClose}
        titleName="修改資訊"
        actionInfoChange={handleNewInfo}
        actionSubmit={handleEditSubmit}
        currentId={currentValue.id}
        currentValue1={currentValue.year}
        currentValue2={currentValue.author}
        textFieldLabel1="Date"
        textFieldName1="year"
        textFieldLabel2="Author"
        textFieldName2="author"
      />
      {/*Delete dialog*/}
      <DeleteTwoDialog
        actionOpen={deleteOpen}
        actionClose={handleDeleteClose}
        titleName="刪除資訊"
        actionSubmit={handleDeleteSubmit}
        currentId={currentValue.id}
        currentValue1={currentValue.year}
        currentValue2={currentValue.author}
        textFieldLabel1="Date"
        textFieldLabel2="Author"
      />
    </>
  );
}

export function ProfessorAward(props) {
  const [arrayData, setArrayData] = useState([]);
  const [newOpen, setNewOpen] = useState(false);
  const [newInfo, setNewInfo] = useState([]);
  const [editOpen, setEditOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState("");
  const [deleteOpen, setDeleteOpen] = useState(false);
  const url = "http://140:125:45:164:6969/api/lab/teacherAwards";
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
  };

  useEffect(() => {
    const ProfessorAwards_api = async () => {
      try {
        let { data } = await axios.get(url);
        setArrayData(data.data);
      } catch (e) {}
    };
    ProfessorAwards_api();
  }, []);

  const handleNewClickOpen = () => {
    setNewOpen(true);
  };
  const handleNewClose = () => {
    setNewOpen(false);
  };

  const handleNewInfo = (e) => {
    const { value, name } = e.target;
    setNewInfo((preData) => ({
      ...preData,
      [name]: value,
    }));
  };

  const handleNewSubmit = async (e) => {
    try {
      await axios.post(url, JSON.stringify(newInfo), config);
      alert("新增成功");
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditClickOpen = (item) => {
    setEditOpen(true);

    setCurrentValue({
      id: item.id,
      year: item.year,
      item: item.item,
      order: item.order,
    });
  };
  const handleEditClose = () => {
    setEditOpen(false);
  };

  const handleEditSubmit = async () => {
    const formData = new FormData();

    if (newInfo.year) {
      formData.append("year", newInfo.year);
    } else {
      formData.append("year", currentValue.year);
    }

    if (newInfo.item) {
      formData.append("item", newInfo.item);
    } else {
      formData.append("item", currentValue.item);
    }

    if (newInfo.order) {
      formData.append("order", newInfo.order);
    } else {
      formData.append("order", currentValue.order);
    }

    const Jsondata = {};
    formData.forEach((value, key) => (Jsondata[key] = value));

    try {
      await axios.put(url + "/" + currentValue.id, Jsondata, config);
      alert("編輯成功");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteClickOpen = (item) => {
    setDeleteOpen(true);
    setCurrentValue({
      id: item.id,
      year: item.year,
      item: item.item,
      order: item.order,
    });
  };
  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };

  const handleDeleteSubmit = async () => {
    try {
      await axios.delete(url + "/" + currentValue.id, config);
      alert("刪除成功");
    } catch (error) {
      console.log(error);
    }
  };

  const ProfessorAwards_columns = [
    { title: "時間", dataIndex: "year" },
    { title: "地點/項目", dataIndex: "item" },
    { title: "獎項", dataIndex: "order" },
  ];
  const ProfessorAwards_columns_Edit = [
    { title: "時間", dataIndex: "year" },
    { title: "地點/項目", dataIndex: "item" },
    { title: "獎項", dataIndex: "order" },
    {
      title: "Edit",
      key: "key",
      dataIndex: "key",
      render: (text, record) => (
        <EditBtn action={() => handleEditClickOpen(record)} />
      ),
    },
    {
      title: "Delete",
      key: "key",
      dataIndex: "key",
      render: (text, record) => (
        <DeleteBtn action={() => handleDeleteClickOpen(record)} />
      ),
    },
  ];
  return (
    <>
      {props.action === "Edit" ? (
        <>
          <AddBtn action={handleNewClickOpen} />
          <Table
            dataSource={arrayData}
            bordered
            columns={ProfessorAwards_columns_Edit}
          ></Table>
        </>
      ) : (
        <Table
          dataSource={arrayData}
          bordered
          columns={ProfessorAwards_columns}
        ></Table>
      )}
      {/*New Dialog*/}
      <AddThreeDialog
        actionOpen={newOpen}
        actionClose={handleNewClose}
        titleName="新增資訊"
        actionSubmit={handleNewSubmit}
        actionInfoChange={handleNewInfo}
        textFieldValue1={newInfo.year}
        textFieldValue2={newInfo.item}
        textFieldValue3={newInfo.order}
        textFieldLabel1="時間"
        textFieldName1="year"
        textFieldLabel2="地點/項目"
        textFieldName2="item"
        textFieldLabel3="獎項"
        textFieldName3="order"
      />
      {/*Edit dialog*/}
      <EditThreeDialog
        actionOpen={editOpen}
        actionClose={handleEditClose}
        titleName="修改資訊"
        actionInfoChange={handleNewInfo}
        actionSubmit={handleEditSubmit}
        currentId={currentValue.id}
        currentValue1={currentValue.year}
        currentValue2={currentValue.item}
        currentValue3={currentValue.order}
        textFieldLabel1="時間"
        textFieldName1="year"
        textFieldLabel2="地點/項目"
        textFieldName2="item"
        textFieldLabel3="獎項"
        textFieldName3="order"
      />
      {/*Delete dialog*/}
      <DeleteThreeDialog
        actionOpen={deleteOpen}
        actionClose={handleDeleteClose}
        titleName="刪除資訊"
        actionSubmit={handleDeleteSubmit}
        currentId={currentValue.id}
        currentValue1={currentValue.year}
        currentValue2={currentValue.item}
        currentValue3={currentValue.order}
        textFieldLabel1="時間"
        textFieldLabel2="地點/項目"
        textFieldLabel3="獎項"
      />
    </>
  );
}
