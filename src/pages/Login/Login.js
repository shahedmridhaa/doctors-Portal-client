import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../Context/Authprovider';
import UseToken from '../../Hook/UseToken';

const Login = () => {

    const { register, formState:{errors} ,handleSubmit } = useForm();
    const {loginUser} = useContext(authContext)
    const [loginUserEmail, setLoginUserEmail] = useState('')
    const [token] = UseToken(loginUserEmail)
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    if(token){
      navigate(from, { replace: true });

    }

    const handleogin = (data) =>{
        loginUser(data.email, data.password)
        .then(result =>{
          const user = result.user  
          setLoginUserEmail(user.email)
          toast.success('successfully login')
        })
        .catch(err =>{
          console.log(err.message);
        })
    }
  

    return (
        <div className='h-[800px] flex justify-center items-center '>
       <div className="shadow-lg p-8 rounded-md">
<h1 className='text-2xl font-bold text-center py-5'>Login</h1>
       <form onSubmit={handleSubmit(handleogin)} >

      <div className='my-2'>
        <label htmlFor="">Email</label>
        <input type="email"   placeholder="Type here" className="input input-bordered w-full max-w-xs"
        {...register("email",{
            required:'Email is required'
        })} 
        />
      {errors.email && <p className='text-red-800'>{errors.email?.message}</p>}

      </div>

      <div className='my-2'>
        <label htmlFor="">Password</label>
        <input type="password"  placeholder="Type here" className="input input-bordered w-full max-w-xs"
        {...register("password",{
            required:"Password field is required",
            minLength:{value: 6 , message: "Password must be 6 Charaters or longer"}
            
        })}  />
        {errors.password && <p className='text-red-800'>{errors.password?.message}</p>}
        <label className='label text-teal-600 font-medium'>Forget Password</label>

      </div>
    
      
     
      <input className='btn btn-dark mt-2 w-full' value='login' type="submit" />
    </form>

     <div >
     <p className='py-5'>New to doctoes portal pleae <Link className='text-teal-600' to='/signUp'>Create a new accoutn</Link></p>
     <div className='divider'>or</div>
     <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
     </div>
       </div>
    </div>
    );
};
export default Login;