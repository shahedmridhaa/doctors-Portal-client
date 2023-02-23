import React, { useContext } from 'react'
import { authContext } from '../../../Context/Authprovider'
import toast from 'react-hot-toast'
import { format } from 'date-fns'

const BookingModal = ({ treatment, selectedDate, refetch }) => {
  const { user } = useContext(authContext)
  const { name: treatmentname, slots, price } = treatment
  const date = format(selectedDate, 'PP')

  const handleform = (event) => {
    event.preventDefault()
    const form = event.target
    const time = form.slots.value
    const name = form.name.value
    const email = form.email.value
    const number = form.number.value

    const booking = {
      appoinmentDate: date,
      treatment: treatmentname,
      patient: name,
      slot: time,
      email: email,
      Phone: number,
      price: price,
    }

    fetch('https://dentist-server-side.vercel.app/booking', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success('successfully added')
          refetch()
        } else {
          toast.error(data.message)
        }
      })
  }

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{treatmentname}</h3>
          <div className="mt-5 ">
            <form onSubmit={handleform} className="grid grid-clos-1 gap-5">
              <input
                type="text"
                disabled
                value={date}
                name="date"
                className="input w-full input-bordered "
              />
              <select name="slots" className="input w-full input-bordered">
                {slots?.map((slot) => (
                  <option>{slot}</option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Name"
                name="name"
                defaultValue={user?.displayName}
                readOnly
                className="input w-full input-bordered "
              />
              <input
                type="email"
                placeholder="email"
                defaultValue={user?.email}
                readOnly
                name="email"
                className="input w-full input-bordered "
              />
              <input
                type="number"
                placeholder="number"
                name="number"
                className="input w-full input-bordered "
              />
              <input
                type="number"
                placeholder="number"
                name="price"
                defaultValue={price}
                readOnly
                className="input w-full input-bordered "
              />

              <button type="submit" className="btn bg-teal-700">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingModal
