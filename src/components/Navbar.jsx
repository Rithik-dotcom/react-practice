import React from 'react'
import '../App.css'
const Navbar = () => {
  return (
    <div>   <nav className="navbar navbar-expand-lg bg-body-tertiary nav-main">
    <div className="container-fluid">
    <div className='logo-div' >
   <img src='data:image/png;base64,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' className='logo-main' alt='logo' height='100px' width='100px' />
    </div>
    
  
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active list-one" aria-current="page" href="#">Movie</a>
          </li>
          <li className="nav-item">
            <a className="nav-link list-one" href="#">Link</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle list-one" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item list-one" href="#">Action</a></li>
              <li><a className="dropdown-item list-one" href="#">Another action</a></li>
              <li><hr className="dropdown-divider list-one" /></li>
              <li><a className="dropdown-item list-one" href="#">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled list-one" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success list-one" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav></div>
  )
}

export default  Navbar