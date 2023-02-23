import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../Context/Authprovider';
import useAdmin from '../../Hook/UseAdmin';
import Loading from '../../pages/Shared/Loading/Loading';


const AdminRoutes = ({children}) => {
     
    const {user, loading} = useContext(authContext)
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    const location = useLocation()

     
    if(loading || isAdminLoading){
        return <Loading></Loading>
    }
   

    if(user && isAdmin){
        return children
    }
    return <Navigate to="/login" state={{form:location}} replace></Navigate>

    
};

export default AdminRoutes;