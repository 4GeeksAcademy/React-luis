import React from "react";

const Navb = ({marca}) => {
    return(<nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid ">
        <a className="navbar-brand text-light" href="#">{marca}</a>
        <button className="navbar-toggler " style={{backgroundColor:"white"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" ></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav" style={{justifyContent:"end"}}>
          <ul className="navbar-nav " >
            <li className="nav-item">
              <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" aria-disabled="true">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>);
}

export default Navb;