import React from "react";
import {Route} from 'react-router-dom';
import Home from './components/home';
import Form from './components/form';


const App = () => {
  return (
    <>
      <h1>Get your pizza here</h1>
      <p>Welcome to a site built in under three hours, testing and project set up included.</p>

      <Route exact path='/'>
        <Home/>
      </Route>

      <Route path='/pizza'>
        <Form/>
      </Route>

    <footer>
      <p>Please don't call us if you're order is not to your liking. That's your business and we respect your privacy.</p>
    </footer>
    </>
  );
};

export default App;
