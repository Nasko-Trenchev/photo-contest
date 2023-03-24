import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { userContext} from '../../contexts/userContext'

const RouteGuard = () => {

 const {isAuthenticated} = useContext(userContext);


 if(!isAuthenticated){

    return <Navigate to="/login" replace/>
 }

 return <Outlet/>

}

export default RouteGuard;