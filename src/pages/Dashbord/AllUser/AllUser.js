import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';

const AllUser = () => {



       const {data: user, isLoading, refetch} = useQuery({
        queryKey:['user'],
        queryFn: async () =>{
           const res = await fetch('https://dentist-server-side.vercel.app/user')
           const data = res.json()
           return data    
        }
       })


       const handleMakeAdmin = id =>{
         fetch(`https://dentist-server-side.vercel.app/user/admin/${id}`,{
           method:'PUT',
            headers:{
              authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
         })
         .then(res => res.json())
         .then(data => {
           console.log(data);
           refetch()
         })
       
       }

  if(isLoading){
    return <Loading></Loading>
  }


    return (
        <div className='mt-5 font-semibold'>
            <h2 className="text-3xl">All User</h2>

            <div className="overflow-x-auto">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Admin</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      
      {
        user.map((alluser, i) => <tr key={alluser._id}>
       
        <th>{i}</th>
        <td>{alluser._id}</td>
        <td>{alluser.email}</td>
        <td>
       {
            alluser?.role !== 'admin' && <button onClick={() => handleMakeAdmin(alluser._id)} className='btn btn-primary btn-sm'>Admin</button>
            } 
        </td>
        <td><button className='btn btn-dark btn-sm'>Delete</button></td>
    
        </tr>)
      }
      
      
     
    </tbody>
  </table>
</div>

        </div>
    );
};

export default AllUser;