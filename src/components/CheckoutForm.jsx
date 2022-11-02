import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "./cartContext";
import { createBuyOrder } from "../firestore";

function CheckoutForm() {
  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: "",
    surname: "",
  });

  const navigate = useNavigate();
  const context = useContext(cartContext);
  const { cart, getTotal, emptyCart } = context;

  function handleCheckout(event) {
    event.preventDefault();
    const orderData = {
      buyer: dataForm,
      items: cart,
      date: new Date(),
      total: getTotal(),
    };
    createBuyOrder(orderData).then((orderid) => {
      navigate(`/checkout/${orderid}`);
      emptyCart();
    });
  }

  function inputChangeHandler(event) {
    let inputName = event.target.name;
    let value = event.target.value;

    const newDataForm = { ...dataForm };
    newDataForm[inputName] = value;
    setDataForm(newDataForm);
  }

  return (
    <div className="form-container">
      <h4 className="title">
        Complete los siguientes datos para finalizar su compra
      </h4>
      <form className="form" onSubmit={handleCheckout}>
        <div className="formulario">
          <div className="form-item">
            <label htmlFor="name">
              Nombre/s <span>*</span>
            </label>
            <input
              className="input"
              value={dataForm.name}
              name="name"
              type="text"
              onChange={inputChangeHandler}
              required
            />
          </div>

          <div className="form-item">
            <label htmlFor="surname">
              Apellido/s <span>*</span>
            </label>
            <input
              className="input"
              value={dataForm.surname}
              name="surname"
              type="text"
              onChange={inputChangeHandler}
              required
            />
          </div>

          <div className="form-item">
            <label htmlFor="telefono">
              Teléfono <span>*</span>
            </label>
            <input
              className="input"
              value={dataForm.phone}
              name="phone"
              type="number"
              min={1}
              onChange={inputChangeHandler}
              required
            />
          </div>

          <div className="form-item">
            <label htmlFor="email">
              Email <span>*</span>
            </label>
            <input
              className="input"
              value={dataForm.email}
              name="email"
              type="text"
              onChange={inputChangeHandler}
              required
            />
          </div>
          <button
            className="btn_finalizar"
            type="submit"
            variant="outline-dark"
            onClick={handleCheckout}>
            Finalizar Compra
          </button>
        </div>
      </form>
    </div>
  );
}

export default CheckoutForm;
