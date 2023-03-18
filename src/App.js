import NavigationHeader from "./components/NavigationHeader/NavigationHeader";
import Login from './components/Login/Login';
import Register from "./components/Register/Register";
import Gallery from "./components/Gallery/Gallery";
import Details from "./components/Details/Details";
import Main from './components/Main/Main'
import Footer from "./components/Footer/Footer";
import ContestAnimals from "./components/ContestAnimals/ContestAnimals";

import { userContext } from "./contexts/userContext";

import {Routes, Route} from "react-router-dom";
import ContestNature from "./components/ContestNature/ContestNature";
import { useState } from "react";
import Logout from "./components/Logout/Logout";
import {useLocalStorage} from './hooks/useLocalStorage';

function App() {
  const [user, setUser] = useLocalStorage("user", {});

  const userLoginHandler = (userData) =>{
    setUser(userData)
  }

  const userLogoutHandler = () =>{
    setUser({});
  }
  return (
    <userContext.Provider value={{user, userLoginHandler, userLogoutHandler}}>
    <>
    <NavigationHeader/>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/details" element={<Details/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/animals" element={<ContestAnimals/>}/>
      <Route path="/nature" element={<ContestNature/>}/>
      <Route path="/galery" element={<Gallery/>}/>
      <Route path="/logout" element={<Logout/>}/>

    </Routes>
    <Footer/>
    </>
    </userContext.Provider>
  );
}

export default App;
