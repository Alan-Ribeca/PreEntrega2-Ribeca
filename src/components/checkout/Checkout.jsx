import { useRef } from "react"

export const Checkout = () => {
  const formRef = useRef()
  const enviar = (e) => {
    e.preventDefault()
    const datForm = new FormData(formRef.current) //paso un formulario HTML a un objeto iterator
    const data = Object.fromEntries(datForm) //paso un objeto iterator a un objeto simple
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
