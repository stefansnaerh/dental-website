'use client'

import { useState } from 'react'

import { BookAppointmentDocument } from '@/prismicio-types'
import { Fade } from '../Fade/fade'

import cx from 'classnames'

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

  const [nafn, setNafn] = useState('')
  const [kennitala, setKennitala] = useState('')
  const [simanumer, setSimanumer] = useState('')
  const [netfang, setNetfang] = useState('')
  const [astaeda, setAstaeda] = useState('')

  const [formError, setFormError] = useState<boolean>()
  const [kennitalaError, setKennitalaError] = useState<boolean>(false)
  const [simanumerError, setSimanumerError] = useState<boolean>(false)
  const [nameError, setNameError] = useState<boolean>(false)
  const [emailError, setEmailError] = useState<boolean>(false)
  const [astaedaError, setAstaedaError] = useState<boolean>(false)

  const handleOnChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    stateToChange: React.Dispatch<React.SetStateAction<string>>,
    setError: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    stateToChange(e.target.value)
    setError(false)
    setFormError(false)
  }

  async function handleOnSubmit(e: React.FormEvent) {
    e.preventDefault()
    const SSDlength = /^\d{10}$/
    const phoneLength = /^\d{7}$/

    let noSubmit = false

    if (SSDlength.test(kennitala) === false) {
      setKennitalaError(true)
      setFormError(true)
      noSubmit = true
    }

    if (phoneLength.test(simanumer) === false) {
      setSimanumerError(true)
      setFormError(true)
      noSubmit = true
    }

    if (nafn.length < 3) {
      setNameError(true)
      setFormError(true)
      noSubmit = true
    }

    if (netfang.length < 3) {
      setEmailError(true)
      setFormError(true)
      noSubmit = true
    }

    if (astaeda.length < 3) {
      setAstaedaError(true)
      setFormError(true)
      noSubmit = true
    }

    if (noSubmit) return

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

    fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify(formData),
    })
  }
  return (
    <Fade>
      <form
        method="POST"
        onSubmit={handleOnSubmit}
        className="flex flex-col gap-fluid-18"
      >
        <Fade>
          <label htmlFor="kafn" className="flex flex-col gap-4">
            {section.customer_name_input}
            <input
              className={cx('', {
                ['border-red bg-softRed']: nameError,
                ['border-greyInput']: !nameError,
              })}
              placeholder={`${section.customer_name_placeholder}`}
              name="nafn"
              type="text"
              onChange={(e) => handleOnChange(e, setNafn, setNameError)}
            />
            {nameError && (
              <p className="text-sm text-red">
                Nafn þarf að vera rétt fyllt út
              </p>
            )}
          </label>
        </Fade>
        <Fade>
          <label
            htmlFor="kennitala"
            className={cx('flex flex-col gap-4', {
              ['border-red']: kennitalaError,
              ['border-greyInput']: !kennitalaError,
            })}
          >
            {section.customer_ssd_input}
            <input
              className={cx('', {
                ['border-red bg-softRed']: kennitalaError,
                ['border-greyInput']: !kennitalaError,
              })}
              placeholder={`${section.customer_ssd_placeholder}`}
              name="kennitala"
              type="number"
              onChange={(e) =>
                handleOnChange(e, setKennitala, setKennitalaError)
              }
            />
            {kennitalaError && (
              <p className="text-sm text-red">
                Kennitala þarf að vera rétt fyllt út
              </p>
            )}
          </label>
        </Fade>
        <Fade>
          <label htmlFor="simanumer" className="flex flex-col gap-4">
            {section.customer_phone_input}
            <input
              className={cx('', {
                ['border-red bg-softRed']: simanumerError,
                ['border-greyInput']: !simanumerError,
              })}
              placeholder={`${section.customer_phone_placeholder}`}
              name="simanumer"
              type="tel"
              onChange={(e) =>
                handleOnChange(e, setSimanumer, setSimanumerError)
              }
            />
            {simanumerError && (
              <p className="text-sm text-red">
                Símanúmer þarf að vera rétt fyllt út
              </p>
            )}
          </label>
        </Fade>
        <Fade>
          <label htmlFor="netfang" className="flex flex-col gap-4">
            {section.customer_email_input}
            <input
              className={cx('', {
                ['border-red bg-softRed']: emailError,
                ['border-greyInput']: !emailError,
              })}
              placeholder={`${section.customer_email_placeholder}`}
              name="netfang"
              type="email"
              onChange={(e) => handleOnChange(e, setNetfang, setEmailError)}
            />
            {emailError && (
              <p className="text-sm text-red">
                Netfang þarf að vera rétt fyllt út
              </p>
            )}
          </label>
        </Fade>
        <Fade>
          <label htmlFor="astaeda">
            {section.customer_appointment_reason_input}
            <textarea
              className={cx('', {
                ['border-red bg-softRed']: astaedaError,
                ['border-greyInput']: !setAstaedaError,
              })}
              maxLength={500}
              placeholder={`${section.appointment_reason_placeholder}`}
              name="astaeda"
              onChange={(e) => handleOnChange(e, setAstaeda, setAstaedaError)}
            />
            {simanumerError && (
              <p className="text-sm text-red">
                Við þurfum að fá ástæðu tímapöntunar með
              </p>
            )}
          </label>
        </Fade>
        <Fade>
          <label htmlFor="tilvisun">
            {section.additional_info_title}
            <textarea
              maxLength={500}
              placeholder={`${section.customer_additional_info}`}
              name="tilvisun"
            />
          </label>
        </Fade>
        <Fade className="w-fill">
          <button
            type="submit"
            className={cx(
              ' text-white w-fill py-fl  py-fluid-12  shadow-button rounded-16  text-md font-poppins font-medium transition-all duration-300 ease-in-out',
              {
                ['bg-red']: formError,
                ['bg-brown']: !formError,
              }
            )}
          >
            {!formError ? section.button_text : 'Úps'}
          </button>
        </Fade>
        {formError && (
          <p className="text-sm text-red text-center">
            Úps! Einhverjar upplýsingar hafa verið skrifaðar vitlausar inn
          </p>
        )}
      </form>
    </Fade>
  )
}
