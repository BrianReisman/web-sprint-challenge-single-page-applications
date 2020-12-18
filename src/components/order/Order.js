import React, { useState } from "react";
import * as yup from "yup";
import axios from "axios";

const Order = (props) => {
  const blankFormObj = {
    name: "",
    size: 0,
    Peppers: false,
    Onions: false,
    Cilantro: false,
    Ham: false,
    instructions: "",
  };
  const [form, setForm] = useState(blankFormObj);
  console.log(form);

  //validation
  // const schema = yup.object().shape({
  //   name: yup.string().required().min(2),
  // });

  const submitHandler = (e) => {
    e.preventDefault();
    // submitting order to database
    axios
      .post("https://reqres.in/api/users", form)
      .then(res => {
        console.log(res.data);
        setForm(blankFormObj);
      })
      .catch((err) => {
        console.error(err);
        setForm(blankFormObj);
      });
  };

  const onChangeHandler = ({ target }) => {
    const type = target.type === "checkbox" ? "checked" : "value";
    setForm({ ...form, [target.name]: target[type] });
  };

  return (
    <div>
      <div>Order.js</div>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">
          {" "}
          Name:
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={onChangeHandler}
          />
        </label>
        <br />
        <label htmlFor="size">
          <select
            name="size"
            id="size"
            value={form.size}
            onChange={onChangeHandler}
          >
            <option value="0">---PLEASE SELECT A PIZZA SIZE---</option>
            <option value="12">12 inches</option>
            <option value="16">16 inches</option>
            <option value="24">24 inches</option>
          </select>
        </label>
        <br />
        <div className="checkboxes">
          <label htmlFor="Peppers">
            {" "}
            Peppers
            <input
              type="checkbox"
              id="Peppers"
              name="Peppers"
              checked={form.Peppers}
              onChange={onChangeHandler}
            />
          </label>
          <br />
          <label htmlFor="Onions">
            {" "}
            Onions
            <input
              type="checkbox"
              id="Onions"
              name="Onions"
              checked={form.Onions}
              onChange={onChangeHandler}
            />
          </label>
          <br />
          <label htmlFor="Cilantro">
            {" "}
            Cilantro
            <input
              type="checkbox"
              id="Cilantro"
              name="Cilantro"
              checked={form.Cilantro}
              onChange={onChangeHandler}
            />
          </label>
          <br />
          <label htmlFor="Ham">
            {" "}
            Ham
            <input
              type="checkbox"
              id="Ham"
              name="Ham"
              checked={form.Ham}
              onChange={onChangeHandler}
            />
          </label>
        </div>
        <br />
        <label htmlFor="instructions">
          Special instructions: <br />
          <textarea
            name="instructions"
            value={form.instructions}
            onChange={onChangeHandler}
          />
        </label>
        <br />
        <button>ORDER NOW</button>
      </form>
    </div>
  );
};

export default Order;
