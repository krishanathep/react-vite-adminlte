import React from 'react'

export default function Home() {
  return (
    <div className="content-wrapper">
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0">Home</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item">
                <li className="breadcrumb-item active">Home</li>
              </li>
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
                <p>Title</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

