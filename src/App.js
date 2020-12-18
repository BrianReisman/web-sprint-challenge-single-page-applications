import React, {useEffect} from "react";
import {Route} from 'react-router-dom';
import Home from './components/home/Home';
import Order from './components/order/Order';
import {useHistory} from 'react-router-dom';

const App = () => {
  const history = useHistory();
  console.log(history.location.pathname)
  
  return (
    <p>
      <h1 onClick={()=>history.push('/')}>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
    <button onClick={()=>history.push('/pizza')}>Order Your Pizza NOW!</button>
      <hr/>
      <Route exact path='/' component={Home}/>
      <Route exact path='/pizza' component={Order}/>

    </p>
  );
};
export default App;
