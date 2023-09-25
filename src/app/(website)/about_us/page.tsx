import { Metadata } from 'next'
import { createClient } from '../../../../prismicio'
import { AboutUsDocument } from '../../../../prismicio-types'
import { SliceZone } from '@prismicio/react'
import { components } from '../../../../slices'
import { PrismicNextImage } from '@prismicio/next'

import { Fade } from '../../components/Fade/fade'
import SliceContainer from '../../components/SliceContainer/sliceContainer'

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient()
  const page = await client.getSingle('about_us')

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  }
}

export default async function Apiko() {
  const client = createClient()

  const page = await client.getSingle<AboutUsDocument>('about_us')
  const section = page.data

  return (
    <main className="font-poppins text-black">
      {/* ------------------------ hides on 1025px -----------------------------*/}
      {section.image && (
        <div className="relative overflow-hidden w-fill px-fluid-8 md:hidden">
          <div className="relative pb-[70%] ">
            <PrismicNextImage
              field={section.image}
              className="object-cover z-0 rounded-12"
              imgixParams={{ fit: 'crop' }}
              priority
              fill
              sizes="(max-width: 768px) 100vw"
            />
          </div>
        </div>
      )}
      <SliceContainer className="relative flex gap-fluid-96 lg:gap-fluid-122 xl:gap-fluid-144 ">
        <div className="relative flex flex-col gap-fluid-40 lg:gap-fluid-48 md:w-[30%] self-start">
          {section.title && (
            <Fade className="border-b-[3px] pb-4 border-y-orange w-fit self-start">
              <h1 className="text-h2">{section.title}</h1>
            </Fade>
          )}
          {section.paragraph && (
            <Fade className=" lg:w-[90%] ">
              <p className="text-paragraph font-regular">{section.paragraph}</p>
            </Fade>
          )}
        </div>
        {section.image && (
          <Fade className="hidden md:flex relative md:overflow-hidden md:w-[65%] self-start ">
            <div className="relative  pb-[75%] lg:pb-[65%] xl:pb-[60%] w-fill">
              <PrismicNextImage
                field={section.image}
                className="object-cover z-0 rounded-12 "
                imgixParams={{ fit: 'crop' }}
                priority
                fill
                sizes="(max-width: 768px) 100vw"
              />
            </div>
          </Fade>
        )}
      </SliceContainer>

      <SliceZone slices={page.data.slices} components={components} />
    </main>
  )
}
