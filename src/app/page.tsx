import { Metadata } from 'next'
import { createClient } from '../../prismicio'
import { FrontPageDocument } from '../../prismicio-types'
import { SliceZone } from '@prismicio/react'
import { components } from '../../slices'
import { PrismicNextImage } from '@prismicio/next'
import Button from './components/Button/Button'

import CalendarIcon from './icons/Calendar.svg'

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient()
  const page = await client.getSingle('front_page')

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  }
}

export default async function Home() {
  const client = createClient()

  const page = await client.getSingle<FrontPageDocument>('front_page')
  const content = page.data

  return (
    <section className="relative">
      <div className="relative w-fill  overflow-hidden ">
        <div className="relative lg:pb-[50%] md:pb-[60%] sm:pb-[80%] pb-[165%]">
          <PrismicNextImage
            field={content.hero_image}
            className="object-cover z-0 rounded-b-12 sm:rounded-12 group-hover:scale-105 transform duration-300"
            imgixParams={{ fit: 'crop' }}
            priority
            fill
          />
        </div>
        <h1 className="absolute z-10 m-auto w-[240px] right-[17%] text-center text-black leading-snug top-[20%] font-poppins text-h1">
          {content.hero_text}
        </h1>
        <div className="absolute m-auto w-fit left-0 right-0 bottom-[10%] flex gap-24">
          <Button
            text={content.first_link_text}
            type="anchor"
            arrow
            href={content.first_link}
            ariaLabel={`Hlekkur á ${content.first_link_text}`}
            className="bg-brown  text-white font-medium  hover:bg-brownHover transition-all duration-300 ease-in-out"
          />{' '}
          <Button
            text={content.second_link_text}
            type="anchor"
            icon={<CalendarIcon className="h-24 w-24" />}
            href={content.second_link}
            ariaLabel={`Hlekkur á ${content.second_link_text}`}
            className="bg-brown  text-white font-medium  hover:bg-brownHover transition-all duration-300 ease-in-out"
          />
        </div>
      </div>

      <SliceZone slices={page.data.slices} components={components} />
    </section>
  )
}
