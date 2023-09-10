import { Metadata } from 'next'
import { createClient } from '../../../../prismicio'
import { BookAppointmentDocument } from '../../../../prismicio-types'

import SliceContainer from '../../components/SliceContainer/sliceContainer'
import RichText from '../../components/RichText/RichText'
import { Fade } from '../../components/Fade/fade'

import Form from '../../components/Form/Form'

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
    <main className="font-poppins text-black bg-backgroundWhite">
      <SliceContainer>
        <div className="flex flex-col gap-fluid-32  md:flex-row  md:justify-between">
          <Fade className="flex flex-col gap-fluid-32 md:w-[40%]  ">
            <h1 className="text-h4 font-regular border-b-[3px] pb-4 border-y-orange w-fit ">
              {section.title}
            </h1>
            <RichText text={section.paragraph} />
          </Fade>
          <Fade className="md:w-[50%]">
            <Form data={page} />
          </Fade>
        </div>
      </SliceContainer>
    </main>
  )
}
