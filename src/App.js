import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SinglrRoom from './pages/SinglrRoom';
import Error from './pages/Error';
import {Route,Switch} from 'react-router-dom'
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
    <Route exact path="/" component ={Home}></Route>
    <Route exact path="/rooms/" component ={Rooms}></Route>
    <Route exact path="/rooms/:singleRoom" component ={SinglrRoom}></Route>
    <Route component={Error}></Route>
    </Switch>
    
    </>
  );
}

export default App;
