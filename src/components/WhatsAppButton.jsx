//import React from "react";

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
        color: "white",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "30px",
        textDecoration: "none",
        boxShadow: "0 4px 6px rgba(0,0,0,0.3)"
      }}
    >
      💬
    </a>
  );
}

export default WhatsAppButton;