'use client'

import { useState } from 'react'

import { BookAppointmentDocument } from '@/prismicio-types'

interface FormProps {
  nafn: string
  kennitala: string
  simanumer: string
  netfang: string
  astaeda: string
  tilvisun: string
}

export default function Form({ data }: { data: BookAppointmentDocument }) {
  const section = data.data
  const [ssd, setSsd] = useState('')

  async function handleOnSubmit(e: React.FormEvent) {
    e.preventDefault()
    const formData: FormProps = {
      nafn: '',
      kennitala: '',
      simanumer: '',
      netfang: '',
      astaeda: '',
      tilvisun: '',
    }
    const form = e.currentTarget as HTMLFormElement

    Array.from(form.elements).forEach((field) => {
      if (field instanceof HTMLInputElement && field.name) {
        formData[field.name as keyof FormProps] = field.value
      }
    })
    console.log(formData)
  }
  return (
    <form
      method="POST"
      onSubmit={handleOnSubmit}
      className="flex flex-col gap-fluid-18"
    >
      <label htmlFor="kafn" className="flex flex-col gap-4">
        {section.customer_name_input}
        <input
          placeholder={`${section.customer_name_placeholder}`}
          name="nafn"
          type="text"
        />
      </label>
      <label htmlFor="kennitala" className="flex flex-col gap-4">
        {section.customer_ssd_input}
        <input
          placeholder={`${section.customer_ssd_placeholder}`}
          name="kennitala"
          type="number"
          value={ssd}
          onChange={(e) => setSsd(e.target.value)}
        />
      </label>
      <label htmlFor="símanúmer" className="flex flex-col gap-4">
        {section.customer_phone_input}
        <input
          placeholder={`${section.customer_phone_placeholder}`}
          name="símanúmer"
          type="tel"
        />
      </label>
      <label htmlFor="netfang" className="flex flex-col gap-4">
        {section.customer_email_input}
        <input
          placeholder={`${section.customer_email_placeholder}`}
          name="netfang"
          type="email"
        />
      </label>
      <label htmlFor="astaeda">
        {section.customer_appointment_reason_input}
        <textarea
          maxLength={500}
          placeholder={`${section.appointment_reason_placeholder}`}
          name="astaeda"
        />
      </label>
      <label htmlFor="tilvisun">
        {section.additional_info_title}
        <textarea
          maxLength={500}
          placeholder={`${section.customer_additional_info}`}
          name="tilvisun"
        />
      </label>

      <button
        type="submit"
        className="bg-brown text-white  py-fl  py-fluid-12  shadow-button rounded-16  text-md font-poppins font-medium transition-all duration-300 ease-in-out"
      >
        {section.button_text}
      </button>
    </form>
  )
}
