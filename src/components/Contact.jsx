//import React from "react";
import { FaLocationArrow  ,FaPhoneAlt,FaWhatsapp    } from "react-icons/fa";
function Contact() {
  const phone = "5216620000000";

  return (
    <div className="container-fluid py-5 bg-light" id="contact">
      <div className="container">

        <h2 className="text-center mb-5" style={{ color: "var(--blue-main)" }}>
          Contacto
        </h2>

        <div className="row">

          {/* Info */}
          <div className="col-md-5">
            
            <div className="card p-4 shadow border-0 h-100">
             <p className="mb-4">
                ¿Necesitas instalación o mantenimiento? Contáctanos directamente.
              </p>

              <h5><FaWhatsapp/>  WhatsApp</h5>
              <a
                href={`https://wa.me/${phone}`}
                target="_blank"
                className="btn btn-success my-2"
              >
                Enviar mensaje
              </a>

              <h5 className="mt-3"><FaPhoneAlt/>  Teléfono</h5>
              <p>{phone}</p>

              <h5 className="mt-3"><FaLocationArrow   /> Ubicación</h5>
              <p>Hermosillo, Sonora, México</p>


            </div>
          </div>

          {/* Mapa */}
          <div className="col-md-7 mt-4 mt-md-0">
            <div className="shadow rounded overflow-hidden">

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3485.414732372897!2d-110.98041538851626!3d29.122955375297984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ce8793cb89d3f3%3A0x82ff3a2836e243e0!2sGrupo%20Grijalva!5e0!3m2!1ses-419!2sus!4v1777996328530!5m2!1ses-419!2sus" // pega aquí tu link
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Contact;