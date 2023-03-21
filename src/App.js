import NavigationHeader from "./components/NavigationHeader/NavigationHeader";
import Login from './components/Login/Login';
import Register from "./components/Register/Register";
import Gallery from "./components/Gallery/Gallery";
import Details from "./components/Details/Details";
import Footer from "./components/Footer/Footer";

import { userContext } from "./contexts/userContext";

import {Routes, Route} from "react-router-dom";
import Main from "./components/Main/Main";
import Logout from "./components/Logout/Logout";
import {useLocalStorage} from './hooks/useLocalStorage';
import CreateCategoryForm from './components/Admin/CreateCategoryForm/CreateCategoryForm'
import Admin from "./components/Admin/Admin";
import CreateContest from "./components/Admin/Photos/Photos";
import Photos from "./components/Admin/Photos/Photos";

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
      <Route path="/categories/:categoryId" element={<Gallery/>}/>
      <Route path="/galery" element={<Gallery/>}/>
      <Route path="/logout" element={<Logout/>}/>
      <Route path="/createCategory" element={<CreateCategoryForm/>}/>
      <Route path="/categories/:categoryId/photos" element={<Photos/>}/>
      <Route path="/photos/:photoId" element={<Details/>}/>
      <Route path="/createContest" element={<CreateContest/>}/>
      <Route path="/admin" element={<Admin/>}/>
    </Routes>
    <Footer/>
    </>
    </userContext.Provider>
  );
}

export default App;
