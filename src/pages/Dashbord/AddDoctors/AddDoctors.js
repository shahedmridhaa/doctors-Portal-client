import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useForm } from 'react-hook-form'

const AddDoctors = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()
  const imgHostKey = process.env.REACT_APP_imgbb_key

  const { data: specilty } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await fetch(
        'https://dentist-server-side.vercel.app/appoinmentspecilty',
      )
      const data = res.json()
      return data
    },
  })

  const handleAdddoctor = (data) => {
    const image = data.image[0]
    const formData = new FormData()
    formData.append('image', image)
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imgHostKey}`
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const img = imgData.data.url

          const doctor = {
            name: data.name,
            email: data.email,
            specilty: data.specilty,
            img: img,
          }
          console.log(doctor)

          fetch('https://dentist-server-side.vercel.app/doctors', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              // authrozation : `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data)
            })
        }
      })
  }

  return (
    <div>
      <h3 className="text-2xl font-bold">Add a doctor</h3>

      <div className="h-[800px] flex justify-center items-center ">
        <div className="shadow-lg p-8 rounded-md">
          <form onSubmit={handleSubmit(handleAdddoctor)}>
            <div className="my-2">
              <label htmlFor="">Name</label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                {...register('name', {
                  required: 'Name is required',
                })}
              />
              {errors.name && (
                <p className="text-red-800">{errors.name?.message}</p>
              )}
            </div>

            <div className="my-2">
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                {...register('email', {
                  required: 'email field is required',
                })}
              />
              {errors.email && (
                <p className="text-red-800">{errors.email?.message}</p>
              )}
            </div>

            <div className="my-2">
              <label htmlFor="">Select</label>
              <select
                className="select input input-bordered w-full max-w-xs"
                {...register('specilty')}
              >
                {specilty?.map((speciltyname) => (
                  <option key={speciltyname._id}>{speciltyname.name}</option>
                ))}
              </select>

              <div className="my-2">
                <label htmlFor="">Photo</label>
                <input
                  type="file"
                  placeholder="Upload here"
                  className=" w-full max-w-xs"
                  {...register('image', {
                    required: 'Image is required',
                  })}
                />
                {errors.img && (
                  <p className="text-red-800">{errors.img?.message}</p>
                )}
              </div>
            </div>

            <input
              className="btn btn-dark mt-2 w-full"
              value="ADD DOCTOR"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddDoctors
