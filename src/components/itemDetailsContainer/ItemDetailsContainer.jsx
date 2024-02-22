import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../itemDetail/ItemDetail";
export const ItemDetailsContainer = () => {
  const [item, setItem] = useState([]);
  const { pid } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    fetch("../data/productos.json")
      .then((response) => response.json())
      .then((productos) => {
        const prod = productos.find((producto) => producto.id == pid);
        if (prod) setItem(prod);
      });
  });
  return (
    <section className="itemDetalle">
      <ItemDetail item={item} />
    </section>
  );
};
