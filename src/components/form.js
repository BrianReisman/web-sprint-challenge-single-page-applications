import React, {useState} from 'react';
import * as yup from 'yup';
import axios from 'axios';
import {useHistory} from 'react-router-dom';



export default function Form(props) {
  const {push} = useHistory();

  const blankObj = {
    name: "",
    size: "",
    pineapple: false,
    peppers: false,
    onions: false,
    chives: false,
    instructions: "",
  };
  const [input, setInput] = useState(blankObj);
  console.log(input);
  const [err, setErr] = useState(false);
  const [storeOrders, setStoreOrders] = useState([]);
// console.log(storeOrders);


  function validate(e){
    // console.log(e.target.value.length)
if(e.target.value.length < 3){
  console.log('too short!')
  setErr(true);
} else {
  setErr(false);
}
    // const type = e.target.type === "checkbox" ? e.target.checked : e.target.name;
    // console.log(type)

    // yup.reach(formSchema, e.target.name)
    //   .validate(type)
    //   .then( (valid)=>{
    //     setErr({...err, [e.target.name]: ''})
    //   })
    //   .catch( (err)=>{
    //     console.log(err.errors)
    //     setErr({...err, [e.target.name]: err.errors[0]});
    //   } )
  }

  const onSubmit = function (e) {
    e.preventDefault();

    axios
      .post('https://reqres.in/api/users', input)
      .then(res => {
        setStoreOrders([...storeOrders, res.data]);
      setInput(blankObj);
        // console.log('yes!', res)
      })
      .catch(err => {console.log('trouble!', err)})


  };

  const onChange = function (e) {
    if(e.target.name === 'name'){
      validate(e);
    }
    const type = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setInput({ ...input, [e.target.name]: type });
  };

  return (
    <div>
      <h6>hi from Form</h6>
      <button id="homeBtn" onClick={()=>{push(`/`)}}>Want to go back to the empty home page?</button>
        <br />
        <br />

      <form onSubmit={onSubmit}>
        <label htmlFor="name">
          Name:
          <input type="text" id="name" name="name" onChange={onChange} value={input.name}/>
        </label>
        {err ? <div>You dont messed up!</div> : null }
        <br />

        <label htmlFor="size">
          {" "}
          What size zzah would you like?
          <select name="size" id="size" onChange={onChange} value={input.size}>
            <option value="1">---Please Select Your Size---</option>
            <option value="10">10 inch</option>
            <option value="12">12 inch</option>
            <option value="16">16 inch</option>
            <option value="24">24 inch</option>
          </select>
          <br />
        </label>

        <label htmlFor="pineapple">
          <input
            type="checkbox"
            name="pineapple"
            id="pineapple"
            onChange={onChange}
            checked={input.pineapple}
          />
          pineapple
        </label>
        <br />
        <label htmlFor="peppers">
          <input
            type="checkbox"
            name="peppers"
            id="peppers"
            onChange={onChange}
            checked={input.peppers}
          />
          peppers
        </label>
        <br />
        <label htmlFor="onions">
          <input
            type="checkbox"
            name="onions"
            id="onions"
            onChange={onChange}
            checked={input.onions}
          />
          onions
        </label>
        <br />
        <label htmlFor="chives">
          <input
            type="checkbox"
            name="chives"
            id="chives"
            onChange={onChange}
            checked={input.chives}
          />
          chives
        </label>

        <br />
        <label htmlFor="instructions">
          special instructions
          <textarea
            type="text"
            id="instructions"
            name="instructions"
            onChange={onChange}
            value={input.instructions}
          ></textarea>
        </label>

        <br />
        <button type="submit">Click to Submit</button>
      </form>
    </div>
  );
}