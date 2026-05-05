///import React from "react";
function Navbar() {
  return (
    <nav 
      className="navbar navbar-expand-lg shadow-sm py-3"
      style={{ backgroundColor: "white" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#">
        <img 
          src="/logo.png" 
          alt="Grupo Grijalva" 
          style={{ height: "50px", marginRight: "10px" }}
        /> 
        <p>Grupo Grijalva</p>
      </a>

        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#services">Servicios</a></li>
            <li className="nav-item"><a className="nav-link" href="#catalog">Catálogo</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contacto</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;