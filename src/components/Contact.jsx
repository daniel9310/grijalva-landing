//import React from "react";

function Contact() {
  const phone = "5216621044346"; // CAMBIA ESTO

  return (
    <div className="py-5" id="contact">
      <div className="container text-center">

        <h2 className="mb-4">Contacto</h2>

        <p className="mb-4">
          ¿Necesitas instalación o mantenimiento? Contáctanos directamente.
        </p>

        <div className="row justify-content-center">

          <div className="col-md-6">
            <div className="card p-4 shadow-sm">

              <h5>📱 WhatsApp</h5>
              <a
                href={`https://wa.me/${phone}`}
                target="_blank"
                className="btn btn-success my-2"
              >
                Enviar mensaje
              </a>

              <h5 className="mt-3">📞 Teléfono</h5>
              <p>{phone}</p>

              <h5 className="mt-3">📍 Ubicación</h5>
              <p>Hermosillo,Sonora, México</p>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Contact;