//import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  const phone = "5216620000000"; // CAMBIA ESTO

  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
     style={{
      position: "fixed",
      bottom: "20px",
      right: "20px",
      backgroundColor: "#25D366",
      borderRadius: "50%",
      width: "65px",
      height: "65px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "28px",
      boxShadow: "0 6px 10px rgba(0,0,0,0.3)"
    }}
    >
      <FaWhatsapp className="py-6" />
    </a>
  );
}

export default WhatsAppButton;