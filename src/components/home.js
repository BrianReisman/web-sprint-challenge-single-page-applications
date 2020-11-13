import React from 'react';
import {useHistory} from 'react-router-dom';
//HAVE A LINK TO FORM

export default function Home(props) {
  const {push} = useHistory();

  return(
    <div>

      <button onClick={()=>{push(`/pizza`)}}>Order Pizza</button>

    </div>
  )
}