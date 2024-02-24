/* eslint-disable react/prop-types */
import "./item.scss";
import { Link } from "react-router-dom";

export const Item = ({ product }) => {
  return (
    <section className="Producto">
      <Link to={`/product/${product.id}`}>
      <div className="img-producto">
        <img src={`../img/${product.img}`} alt={`Imagen de ${product.title}`} />
      </div>
      <div className="infoProducto">
        <p className="titleProduc">{product.title}</p>
        <strong className="precio">${product.price}</strong>
        <strong className="envio">Envío gratis</strong>
        <strong className="stock">Stock: {product.stock}</strong>
        <button className="carrito">Agregar al carrito</button>
      </div>
      </Link>
    </section>
  );
};
