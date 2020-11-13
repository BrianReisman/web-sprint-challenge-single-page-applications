import React from "react";
import {Route} from 'react-router-dom';
import Home from './components/home';
import Form from './components/form';


const App = () => {
  return (
    <>
      <h1>Get your pizza here</h1>
      <p>Click below or order,,,always see me</p>

      <Route exact path='/'>
        <Home/>
      </Route>

      <Route path='/pizza'>
        <Form/>
      </Route>

    </>
  );
};

export default App;
