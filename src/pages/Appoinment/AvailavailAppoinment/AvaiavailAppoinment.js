import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import AppoinmentCard from '../AppoinmentCard/AppoinmentCard'
import BookingModal from '../BookingModal/BookingModal'
import { format } from 'date-fns'
import Loading from '../../Shared/Loading/Loading'

const AvaiavailAppoinment = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState([])
  const date = format(selectedDate, 'PP')

  const { data: appoinmnetOption = [], refetch, isLoading } = useQuery({
    queryKey: ['service', date],
    queryFn: () =>
      fetch(
        `https://dentist-server-side.vercel.app/service?date=${date}`,
      ).then((res) => res.json()),
  })
  console.log(appoinmnetOption)

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div>
      <div>
        <p className="text-center text-secondary font-bold">
          Available Appointments on {format(selectedDate, 'PP')}
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20">
        {appoinmnetOption.map((option) => (
          <AppoinmentCard
            key={option._id}
            allcard={option}
            setTreatment={setTreatment}
          ></AppoinmentCard>
        ))}
      </div>
      <BookingModal
        selectedDate={selectedDate}
        treatment={treatment}
        refetch={refetch}
      ></BookingModal>
    </div>
  )
}

export default AvaiavailAppoinment
