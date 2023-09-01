import { Metadata } from 'next'
import { createClient } from '../../../../prismicio'
import { BookAppointmentDocument } from '../../../../prismicio-types'

import SliceContainer from '../../components/SliceContainer/sliceContainer'
import RichText from '../../components/RichText/RichText'
import { Fade } from '../../components/Fade/fade'

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient()
  const page = await client.getSingle('book_appointment')

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  }
}

export default async function BokaTima() {
  const client = createClient()

  const page = await client.getSingle<BookAppointmentDocument>(
    'book_appointment'
  )
  const section = page.data

  return (
    <main className="font-poppins text-black">
      <SliceContainer>
        <div className="flex flex-col gap-fluid-32">
          <Fade className="flex flex-col gap-fluid-32">
            <h1 className="text-h4 font-regular border-b-[3px] pb-4 border-y-orange w-fit ">
              {section.title}
            </h1>
            <RichText text={section.paragraph} />
          </Fade>
          <form className="flex flex-col gap-fluid-18">
            <label htmlFor="name" className="flex flex-col gap-4">
              {section.customer_name_input}
              <input placeholder="Jón Jónsson" name="name" type="text" />
            </label>
            <label
              htmlFor="social-security-number"
              className="flex flex-col gap-4"
            >
              {section.customer_ssd_input}
              <input
                placeholder="000000-0000"
                name="social-security-number"
                type="number"
              />
            </label>
            <label htmlFor="phone" className="flex flex-col gap-4">
              {section.customer_phone_input}
              <input placeholder="000-0000" name="phone" type="tel" />
            </label>
            <label htmlFor="email" className="flex flex-col gap-4">
              {section.customer_email_input}
              <input placeholder="Jón Jónsson" name="emil" type="email" />
            </label>
          </form>
        </div>
      </SliceContainer>
    </main>
  )
}
