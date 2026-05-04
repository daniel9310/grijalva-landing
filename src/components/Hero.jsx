//import React from "react";

function Hero() {
  return (
    <div className="bg-light py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* Texto */}
          <div className="col-md-6">
            <h1 className="fw-bold">
              Instalación y mantenimiento de aire acondicionado
            </h1>

            <p className="text-muted mt-3">
              Servicio profesional para hogares y empresas en tu zona.
              Calidad, rapidez y garantía en cada instalación.
            </p>

            <a
              href="https://wa.me/5216621044346"
              className="btn btn-success btn-lg mt-3"
              target="_blank"
            >
              Cotizar por WhatsApp
            </a>
          </div>

          {/* Imagen */}
          <div className="col-md-6 text-center mt-4 mt-md-0">
            <img
              src="https://images.unsplash.com/photo-1581092160607-5c7f1b0b5b3a"
              className="img-fluid rounded shadow"
              alt="Aire acondicionado"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Hero;