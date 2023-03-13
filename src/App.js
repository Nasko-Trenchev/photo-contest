import NavigationHeader from "./components/NavigationHeader/NavigationHeader";
import Login from './components/Login/Login';
import Register from "./components/Register/Register";
import Gallery from "./components/Gallery/Gallery";
import Details from "./components/Details/Details";
import Main from './components/Main/Main'
import Footer from "./components/Footer/Footer";

import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
    <NavigationHeader/>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/details" element={<Details/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
