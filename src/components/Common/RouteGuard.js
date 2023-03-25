import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext} from '../../contexts/UserContext'

const RouteGuard = () => {

 const {isAuthenticated} = useContext(UserContext);


 if(!isAuthenticated){

    return <Navigate to="/login" replace/>
 }

 return <Outlet/>

}

export default RouteGuard;