import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Daily News</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/"><b>Home</b></Link>
        </li>
        <li className="nav-item"><Link className="nav-link" to="/about"><b>About Us</b></Link></li>
        <li className="nav-item"><Link className="nav-link" to="/general"><b>General</b></Link></li>
        <li className="nav-item"><Link className="nav-link" to="/business"><b>Business</b></Link></li>
        <li className="nav-item"><Link className="nav-link" to="/entertainment"><b>Entertainment</b></Link></li>
        <li className="nav-item"><Link className="nav-link" to="/health"><b>Health</b></Link></li>
        <li className="nav-item"><Link className="nav-link" to="/science"><b>Science</b></Link></li>
        <li className="nav-item"><Link className="nav-link" to="/sports"><b>Sports</b></Link></li>
        <li className="nav-item"><Link className="nav-link" to="/technology"><b>Technology</b></Link></li>
        <li className="nav-item"><Link className="nav-link" to="/india"><b>India</b></Link></li>

      </ul>
    </div>
  </div>
</nav>
      </div>
    )
  }
}
