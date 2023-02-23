import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../Context/Authprovider';

const Privateroute = ({children}) => {
    const {user, loading} = useContext(authContext)
    const location = useLocation()
  
 if(loading){
   return <div>Loding...................</div>
 }

  if(user?.uid){
    return children
  }
   return <Navigate to="/login" state = {{from: location}} replace></Navigate>
};

export default Privateroute;