import React, { useState, useEffect } from "react";
import DataTable, { defaultThemes } from "react-data-table-component";
import axios from "axios";

export default function Users() {
  const [users, setUsers] = useState([]);

  const getData = () => {
    axios.get("https://www.melivecode.com/api/users").then((response) => {
      setUsers(response.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const customStyles = {
    header: {
      style: {
        minHeight: "56px",
      },
    },
    headRow: {
      style: {
        borderTopStyle: "solid",
        borderTopWidth: "1px",
        borderTopColor: defaultThemes.default.divider.default,
      },
    },
    headCells: {
      style: {
        "&:not(:last-of-type)": {
          borderRightStyle: "solid",
          borderRightWidth: "1px",
          borderRightColor: defaultThemes.default.divider.default,
        },
      },
    },
    cells: {
      style: {
        "&:not(:last-of-type)": {
          borderRightStyle: "solid",
          borderRightWidth: "1px",
          borderRightColor: defaultThemes.default.divider.default,
        },
      },
    },
  };

  const columns = [
    {
      name: "ID",
      grow: 0,
      selector: (row) => row.id,
      sortable: true,
    },
    {
		name: 'Picture',
		grow: 0,
		cell: row => <img height="40px" width="40px" alt={row.avatar} src={row.avatar} />,
	},
    {
      name: "First name",
      selector: (row) => row.fname,
      sortable: true,
    },
    {
      name: "Last name",
      selector: (row) => row.lname,
      sortable: true,
    },
    {
      name: "Username",
      selector: (row) => row.username,
      sortable: true,
    },
    {
      name: "Avatar",
      selector: (row) => row.avatar,
      sortable: true,
    },
  ];

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Users</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Users</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <DataTable
                    title="Users List"
                    columns={columns}
                    data={users}
                    pagination
                    striped
                    customStyles={customStyles}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
