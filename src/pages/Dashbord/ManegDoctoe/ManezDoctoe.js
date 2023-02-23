import { useQuery } from '@tanstack/react-query'
import { AiOutlineClose } from 'react-icons/ai'

import React, { useState } from 'react'
import toast from 'react-hot-toast'
import Modal from './Modal/Modal'

const ManezDoctoe = () => {
  const [deletingdoctor, setDeletingdoctor] = useState(null)

  const closeModal = () => {
    setDeletingdoctor(null)
  }

  const { data: doctors, refetch } = useQuery({
    queryKey: ['doctors'],
    queryFn: async () => {
      const res = await fetch('https://dentist-server-side.vercel.app/doctors')
      const data = res.json()
      return data
    },
  })
  console.log(doctors)

  const handledelete = (email) => {
    console.log(email)
    fetch(`https://dentist-server-side.vercel.app/doctors/${email}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success(`successfully deleted ${email}`)
          refetch()
        }
      })
  }

  return (
    <div>
      <h3 className="text-3xl font-bold">Manez Doctor</h3>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>email</th>
              <th>Specilty</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {doctors?.map((doctor, i) => (
              <tr>
                <td>{i + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={doctor.img} alt="" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{doctor.name}</div>
                    </div>
                  </div>
                </td>
                <td>{doctor.email}</td>
                <td>{doctor.specilty}</td>
                <th>
                  <label
                    htmlFor="delete-doctor"
                    onClick={() => setDeletingdoctor(doctor)}
                    className="btn"
                  >
                    {' '}
                    <AiOutlineClose />
                  </label>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingdoctor && (
        <Modal
          doctor={deletingdoctor}
          handledelete={handledelete}
          closeModal={closeModal}
        ></Modal>
      )}
    </div>
  )
}

export default ManezDoctoe
