import "./checkout.scss"
import { useRef } from "react"

export const Checkout = () => {
  const formRef = useRef()
  const enviar = (e) => {
    e.preventDefault()
    const datForm = new FormData(formRef.current) 
    const data = Object.fromEntries(datForm) 
    console.log(data)
    e.target.reset()
  }

  return (
    <>
      <section className="formCompra">
        <form action="" ref={formRef} onSubmit={enviar} className="compra">
          <label>Nombre:</label>
          <input type="text" name="nombre" />
          <label>Apellido:</label>
          <input type="text" name="apellido"/>
          <label>DNI:</label>
          <input type="number" name="dni"/>
          <label>Email:</label>
          <input type="email" name="email"/>
          <label>Telefono:</label>
          <input type="number" name="telefono"/>
          <button type="submit">Finalizar Compra</button>
        </form>
      </section>
    </>
  );
};
