import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { authContext } from '../../../Context/Authprovider'
import Loading from '../../Shared/Loading/Loading'

const MyAppoinment = () => {
  const { user } = useContext(authContext)

  const url = `https://dentist-server-side.vercel.app/booking?email=${user?.email}`

  const { data: booking, isLoading } = useQuery({
    queryKey: ['booking', user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      const result = await res.json()
      return result
    },
  })

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div className="mt-5">
      <h3 className="text-3xl font-semibold">My Appoinment</h3>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {booking?.length &&
              booking?.map((booked, i) => (
                <tr>
                  <th>{i + 1}</th>
                  <td>{booked.patient}</td>
                  <td>{booked.treatment}</td>
                  <td>{booked.appoinmentDate}</td>
                  <td>{booked.slot}</td>
                  <td>
                    {booked.price && !booked.paid && (
                      <Link to={`/dashbord/payment/${booked._id}`}>
                        <button className="btn btn-success btn-sm">Pay</button>
                      </Link>
                    )}
                    {booked.price && booked.paid && (
                      <button className="btn btn-accent btn-sm">Paid</button>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyAppoinment
