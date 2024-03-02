import "./cart.scss";
import { Link } from "react-router-dom";
import { useCarritoContext } from "../../context/CartContext";
import { ItemList } from "../itemList/ItemLis";
import { ItemCart } from "../itemCart/ItemCart";

export const Cart = () => {
  const { carrito, totalPrice, emptyCart } = useCarritoContext();

  return (
    <>
      {carrito.length === 0 ? (
        <>
          <h1>carrito vacio</h1>
          <Link to="/">
            <button className="btnInicio">Volver al inicio</button>
          </Link>
        </>
      ) : (
        <>
          {<ItemList products={carrito} plantilla={ItemCart} />}
          <div>
            <p>Resumen de la compra: $ {totalPrice()}</p>
            <button onClick={emptyCart}>Vaciar carrito</button>
            <Link to={"/"}>
              <button>Seguir comprando</button>
            </Link>
            <Link to={"/checkout"}>
              <button>Finalizar compra</button>
            </Link>
          </div>
        </>
      )}
    </>
  );
};
