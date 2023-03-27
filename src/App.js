import { Routes, Route } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import { AlertProvider } from "./contexts/AlertContext";

import NavigationHeader from "./components/NavigationHeader/NavigationHeader";
import Login from './components/Login/Login';
import Register from "./components/Register/Register";
import Gallery from "./components/Gallery/Gallery";
import Details from "./components/Details/Details";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Logout from "./components/Logout/Logout";
import CreateCategoryForm from './components/Admin/CreateCategoryForm/CreateCategoryForm'
import Admin from "./components/Admin/Admin";
import Photos from "./components/CreatePhoto/CreatePhoto";
import EditPhoto from "./components/EditPhoto/EditPhoto";
import EditComment from "./components/Comment/EditComment/EditComment";
import RouteGuard from "./components/Common/RouteGuard";
import Profile from "./components/Profile/Profile";
import Alert from './components/Alert/Alert'

function App() {
  return (
    <UserProvider>
      <AlertProvider>
        <NavigationHeader />
        <Alert />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/details" element={<Details />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/categories/:categoryId" element={<Gallery />} />
          <Route path="/photos/:photoId" element={<Details />} />
          <Route
            element={<RouteGuard />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/categories/:categoryId/createPhoto" element={<Photos />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/edit/:categoryId/:photoId" element={<EditPhoto />} />
            <Route path="/comments/:photoId/:commentId/edit" element={<EditComment />} />
            <Route path="/createCategory" element={<CreateCategoryForm />} />
            <Route path="/admin" element={<Admin />} />
          </Route>
        </Routes>
        <Footer />
      </AlertProvider>
    </UserProvider>
  );
}

export default App;
