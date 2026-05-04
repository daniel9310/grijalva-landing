//import React from "react";

function Services() {
  const services = [
    {
      title: "Instalación",
      description: "Instalación profesional de minisplit y sistemas de aire acondicionado."
    },
    {
      title: "Mantenimiento",
      description: "Limpieza, revisión y optimización para mayor eficiencia."
    },
    {
      title: "Reparación",
      description: "Diagnóstico y reparación de fallas en equipos de aire acondicionado."
    },
    {
      title: "Venta de equipos",
      description: "Equipos nuevos de las mejores marcas al mejor precio."
    }
  ];

  return (
    <div className="py-5" id="services">
      <div className="container text-center">

        <h2 className="mb-4">Nuestros Servicios</h2>

        <div className="row">
          {services.map((service, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Services;