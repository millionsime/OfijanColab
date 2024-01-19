import "../list.scss";
import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import useLoggedInUser from '../../../Globals/useLoggedInUser';
import API_BASE_URL from '../../../Globals/apiConfig';


export default function Exam() {
  const [data, setData] = useState([]);
  const { deptId, userId } = useLoggedInUser();
  const [userID, setUserID] = useState('');
  const [examsUri, setExamUri] = useState('');
  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'exam_name', headerName: 'Exam Name', width: 200 },
    { field: 'exam_duration', headerName: 'Duration', width: 150 },
    { field: 'description', headerName: 'Description', width: 350 },
    {
      field: "action", headerName: "Action", width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  useEffect(() => {
    setUserID(userId);
    setExamUri(`${API_BASE_URL}/all_exams/${userId}`);
    const loggedInUser = localStorage.getItem("user");
      axios.get(examsUri)
        .then(response => {
          setData(response.data.exams);
          console.log(data)
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
  }, [examsUri]);

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
