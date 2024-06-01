
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import { Component as Navbar } from './components/navabr/Navbar';
import {Component as Message} from './components/message/Message';
import Spline3dViewer from './components/spline/Spline3DViewer'


const App = () => {

  return (
    <>
    <Router>
      <Routes>
        <Route path='' element={ <>
        <Navbar />
         < Header/> 
         </>} />
         <Route path='/message' element={ <Message />} />
         <Route path='Spline3dViewer' element={<Spline3dViewer />} />
      </Routes>
    </Router>
    
    
    </>

  );
};

export default App;
