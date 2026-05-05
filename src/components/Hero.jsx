//import React from "react";

function Hero() {
   const phone = "5216620000000";

  return (
    <div
      className="text-white d-flex align-items-center container-fluid text-center"
      style={{
        height: "90vh",
        background:
          "linear-gradient(rgba(13,110,253,0.8), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1581092160607-5c7f1b0b5b3a')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="container-fluid px-5">
        <h1 className="display-4 fw-bold">
          Expertos en Aire Acondicionado
        </h1>

        <p className="lead mt-3">
          Instalación, mantenimiento y reparación con garantía.
        </p>

        <a
          href={`https://wa.me/${phone}`}
          className="btn btn-success btn-lg mt-4 px-4"
        >
          Cotizar por WhatsApp
        </a>
      </div>
    </div>
  );
}

export default Hero;