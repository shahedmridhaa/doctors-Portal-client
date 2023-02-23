import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import { authContext } from '../../Context/Authprovider'
import UseToken from '../../Hook/UseToken'

const Regester = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()
  const { createUser, userUpdet } = useContext(authContext)
  const [currentUser, setCurrentUser] = useState('')
  const [token] = UseToken(currentUser)
  const navigate = useNavigate()

  if (token) {
    navigate('/')
  }

  const handleForm = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user
        toast.success('successfully create account')

        const userInfo = {
          displayName: data.name,
        }
        userUpdet(userInfo)
          .then(() => {
            saveUser(data.name, data.email)
          })
          .catch(() => {})
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  const saveUser = (name, email) => {
    const user = { name, email }

    fetch('https://dentist-server-side.vercel.app/user', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCurrentUser(email)
      })
  }

  return (
    <div className="h-[800px] flex justify-center items-center ">
      <div className="shadow-lg p-8 rounded-md">
        <h1 className="text-2xl font-bold text-center py-5">Sign Up</h1>

        <form onSubmit={handleSubmit(handleForm)}>
          <div className="my-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              {...register('name')}
            />
          </div>

          <div className="my-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              {...register('email', {
                required: true,
              })}
            />
            {errors.email && <p className="text-red-700">Email is required</p>}
          </div>

          <div className="my-2">
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              {...register('password', {
                required: true,
                minLength: {
                  value: 6,
                  message: 'Password must be 6 Charaters or longer',
                },
              })}
            />
            {errors.password && (
              <p className="text-red-800">{errors.password?.message}</p>
            )}
          </div>

          <input
            className="btn btn-dark mt-2 w-full"
            value="Sign Up"
            type="submit"
          />
        </form>

        <div>
          <p className="py-5">
            Already have an account please{' '}
            <Link className="text-teal-600" to="/login">
              login
            </Link>
          </p>
          <div className="divider">or</div>
          <button className="btn btn-outline w-full">
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  )
}

export default Regester
