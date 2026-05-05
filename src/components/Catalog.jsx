//import React from "react";
import { products } from "../data/products";

function Catalog() {
  return (
    <div className="bg-light text-dark py-5" id="catalog">
      <div className="container">

        <h2 className="text-center mb-5">Catálogo</h2>

        <div className="row">
          {products.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card h-100 shadow border-0">

                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: "220px", objectFit: "cover" }}
                />

                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="text-muted">{product.brand}</p>
                  <h6 className="fw-bold text-primary">{product.price}</h6>

                  <a
                    href="https://wa.me/5216621044346"
                    target="_blank"
                    className="btn btn-outline-primary mt-2"
                  >
                    Solicitar info
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Catalog;