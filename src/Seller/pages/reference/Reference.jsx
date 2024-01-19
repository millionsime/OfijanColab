import "../list.scss";
import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import API_BASE_URL from "../../../Globals/apiConfig";
import axios from "axios";

export default function Reference() {
  const [data, setData] = useState([]);
  const [userID, setUserID] = useState('');
  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'author', headerName: 'Author Name', width: 200 },
    { field: 'description', headerName: 'Description', width: 150},
    { field: 'publication_date', headerName: 'Published Date', width: 200},
    {field: "action", headerName: "Action", width: 150,
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
const loggedInUser = localStorage.getItem("user");
if(loggedInUser)
{
  const users = JSON.parse(loggedInUser);
setUserID(users.user.id);

const uri = `${API_BASE_URL}/api/all_references/${userID}`;
console.log(uri)
axios.get(uri)
      .then(response => {
        setData(response.data.references);
        console.log(data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

}
},[userID]);
  

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
