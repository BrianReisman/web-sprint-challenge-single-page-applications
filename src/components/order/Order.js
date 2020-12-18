import React, { useState, useEffect } from "react";
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
  const [errState, setErrState] = useState({ name: "" });
  const [btnAble, setBtnAble] = useState(true);
  // console.log(errState);
  // console.log(form);

  //allow btn to submit if form schema is valid.
  useEffect(()=>{ //useEffect because I want to control then this runs. When will it? When form updates.
    schema.isValid(form).then((valid) => { //check is schema is valid for form and then if successful
      console.log(valid)
      setBtnAble(!valid); //set BtnAble state to the opposite of what it is (it starts as false)
    }, [form]) //this is what must change in order to trigger the logic in useEffect to run.
  })

  // validation
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("You must provide a name")
      .min(2, "Too short! Keep going!"),
  });

  const validateNameInput = (e) => {
    yup
      //1) WHERE you're reaching into. 2) WHAT you're reaching in to check against
      .reach(schema, e.target.name)
      //3) the VALUE use are using to check against WHAT 2) you've pulled out from WHERE 1)
      .validate(e.target.value)
      //4) if things match up, do this
      .then((valid) => {
        setErrState({ name: "" });
        console.log(valid);
      })
      .catch((err) => {
        setErrState({ ...errState, name: err.errors[0] });
        console.log(err.errors[0]);
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // submitting order to database
    axios
      .post("https://reqres.in/api/users", form)
      .then((res) => {
        console.log(res.data);
        setForm(blankFormObj);
      })
      .catch((err) => {
        console.error(err);
        setForm(blankFormObj);
      });
  };

  const onChangeHandler = (e) => {
    const type = e.target.type === "checkbox" ? "checked" : "value";
    setForm({ ...form, [e.target.name]: e.target[type] });

    if (e.target.name === "name") {
      validateNameInput(e);
    }
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
            className="name"
            id="name"
            value={form.name}
            onChange={onChangeHandler}
          />
          {errState.name ? <div>{errState.name}</div> : null}
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
        <button disabled={btnAble} id="submit-btn">ORDER NOW</button>
      </form>
    </div>
  );
};

export default Order;
