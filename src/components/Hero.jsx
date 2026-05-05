//import React from "react";

function Hero() {
   const phone = "5216620000000";

  return (
    <div
      className="text-white d-flex align-items-center"
      style={{
        height: "90vh",
        background: `
          linear-gradient(90deg, rgba(220,53,69,0.8) 0%, rgba(11,94,215,0.8) 100%),
          url('https://images.unsplash.com/photo-1581092160607-5c7f1b0b5b3a')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
>
      <div className="container-fluid px-5">
        <h1 className="display-4 fw-bold">
          Expertos en Aire Acondicionado y Calefacción
        </h1>

        <p className="lead mt-3">
          Soluciones profesionales en clima para tu hogar y negocio.
        </p>
        <a
          href={`https://wa.me/${phone}`}
          className="btn btn-light btn-lg mt-4 px-4 fw-bold"
        >
          Cotizar por WhatsApp
        </a>
      </div>
    </div>
  );
}

export default Hero;