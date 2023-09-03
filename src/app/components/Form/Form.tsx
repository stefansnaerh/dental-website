'use client'

import { BookAppointmentDocument } from '@/prismicio-types'
import { useState } from 'react'

export default function Form({ data }: { data: BookAppointmentDocument }) {
  const [name, setName] = useState('')
  const [ssd, setSsd] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [reason, setReason] = useState('')
  const [extraInfo, setExtraInfo] = useState('')

  const section = data.data
  return (
    <form className="flex flex-col gap-fluid-18">
      <label htmlFor="name" className="flex flex-col gap-4">
        {section.customer_name_input}
        <input
          placeholder={`${section.customer_name_placeholder}`}
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label htmlFor="social-security-number" className="flex flex-col gap-4">
        {section.customer_ssd_input}
        <input
          placeholder={`${section.customer_ssd_placeholder}`}
          name="social-security-number"
          type="number"
          value={ssd}
          onChange={(e) => setSsd(e.target.value)}
        />
      </label>
      <label htmlFor="phone" className="flex flex-col gap-4">
        {section.customer_phone_input}
        <input
          placeholder={`${section.customer_phone_placeholder}`}
          name="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <label htmlFor="email" className="flex flex-col gap-4">
        {section.customer_email_input}
        <input
          placeholder={`${section.customer_email_placeholder}`}
          name="emil"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label htmlFor="reason">
        {section.customer_appointment_reason_input}
        <textarea
          maxLength={500}
          placeholder={`${section.appointment_reason_placeholder}`}
          name="reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
      </label>
      <label htmlFor="extra-info">
        {section.additional_info_title}
        <textarea
          maxLength={500}
          placeholder={`${section.customer_additional_info}`}
          name="extra-info"
          value={extraInfo}
          onChange={(e) => setExtraInfo(e.target.value)}
        />
      </label>
      <button className="bg-brown text-white  py-fl  py-fluid-12  shadow-button rounded-16  text-md font-poppins font-medium transition-all duration-300 ease-in-out">
        {section.button_text}
      </button>
    </form>
  )
}
