/* eslint-disable react/prop-types */
import { useCarritoContext } from "../../context/CartContext";
import { useCounter } from "../../hooks/useCounter";

export const ItemCart = ({ product }) => {
  const { removeItem } = useCarritoContext();
  const { count, increment, decrement } = useCounter(
    product.quantity,
    product.stock,
    1
  );

  return (
    <section className="itemCart">
      <div className="contenedorImg">
        <img src={`../img/${product.img}`} alt={`Imagen de ${product.title}`} />
      </div>
      <div className="infoProduc">
        <h3 className="title">{product.title}</h3>
        <div className="precioProductos">
          <button className="modificar" onClick={decrement}>
            -
          </button>
          <span className="cantidadProduc">Productos {count}</span>
          <button className="modificar" onClick={increment}>
            +
          </button>
          <p className="totalPrice">Precio ${product.price * count}</p>
        </div>
      </div>
      <button className="eliminar" onClick={() => removeItem(product.id)}>
        Eliminar
      </button>
    </section>
  );
};
