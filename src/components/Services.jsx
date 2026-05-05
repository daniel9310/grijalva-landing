//import React from "react";

function Services() {
  const services = [
    {
      title: "Instalación",
      description: "Instalación profesional de minisplit y sistemas de aire acondicionado.", 
      icon: "❄️"
    },
    {
      title: "Mantenimiento",
      description: "Limpieza, revisión y optimización para mayor eficiencia.", 
      icon: "🔧" 
    },
    {
      title: "Reparación",
      description: "Diagnóstico y reparación de fallas en equipos de aire acondicionado.", 
      icon: "🛠️"
    },
    {
      title: "Venta de equipos",
      description: "Equipos nuevos de las mejores marcas al mejor precio.", 
      icon: "🔥"
    }
  ];

  return (
    <div className="py-5" id="services">
      <div className="container text-center">

        <h2 className="mb-4">Nuestros Servicios</h2>

        <div className="row">
          {services.map((service, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="card h-100 border-0 shadow-sm text-center p-3 hover-card">
                <div className="card-body text-center">

                  <div style={{ fontSize: "40px" }}>{service.icon}</div>

                  <h5 className="mt-3">{service.title}</h5>
                  <p className="text-muted">{service.description}</p>

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