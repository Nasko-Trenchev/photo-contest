import NavigationHeader from "./components/NavigationHeader/NavigationHeader";
import Login from './components/Login/Login';
import Register from "./components/Register/Register";
import Gallery from "./components/Gallery/Gallery";
import Details from "./components/Details/Details";
import Main from './components/Main/Main'
import Footer from "./components/Footer/Footer";
import ContestAnimals from "./components/ContestAnimals/ContestAnimals";

import {Routes, Route} from "react-router-dom";
import ContestNature from "./components/ContestNature/ContestNature";

function App() {
  return (
    <>
    <NavigationHeader/>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/details" element={<Details/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/animals" element={<ContestAnimals/>}/>
      <Route path="/nature" element={<ContestNature/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
