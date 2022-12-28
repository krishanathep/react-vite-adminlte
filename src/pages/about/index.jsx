import React,{useState,useEffect} from "react";
import axios from 'axios'

export default function About() {

  const [users, setUsers] = useState([])

  const getData = () => {
    axios.get('https://www.melivecode.com/api/users')
      .then((response)=>{
        setUsers(response.data)
      })
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">About</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">About</li>
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
                  <table
                    className="table table-bordered table-striped"
                  >
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th>Avatar</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user,index)=>(
                        <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.fname}</td>
                        <td>{user.laname}</td>
                        <td>{user.username}</td>
                        <td>{user.avatar}</td>
                      </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
