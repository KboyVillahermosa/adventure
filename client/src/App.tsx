
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import { Component as Navbar } from './components/navabr/Navbar';


const App = () => {

  return (
    <>
    <Router>
      <Routes>
        <Route path='' element={ <>
        <Navbar />
         < Header/> </>} />
      </Routes>
    </Router>
    
    
    </>

  );
};

export default App;
