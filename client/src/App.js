import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import {Switch,Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route exact path='/' element={<Home />}/>
      <Route exact path='/register' element={<Register />}/>
    </Routes>
    </>
  );
}

export default App;
