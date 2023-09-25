import { Metadata } from 'next'
import { createClient } from '../../../prismicio'
import { FrontPageDocument } from '../../../prismicio-types'
import { SliceZone } from '@prismicio/react'
import { components } from '../../../slices'
import { PrismicNextImage } from '@prismicio/next'

import { Fade } from '../components/Fade/fade'
import Button from '../components/Button/Button'

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
    <section className="relative font-poppins">
      <div className="relative w-fill  overflow-hidden pb-fluid-96 bg-beigeLighter">
        <div className="relative lg:pb-[60%] xxs:pb-[150%] md:pb-[70%] xl:pb-[45%]  sm:pb-[90%] pb-[165%]">
          <PrismicNextImage
            field={content.hero_image}
            className="object-cover z-0 rounded-b-12 sm:rounded-12 group-hover:scale-105 transform duration-300"
            imgixParams={{ fit: 'crop' }}
            priority
            fill
          />
        </div>
        <Fade className="absolute z-10 m-auto  right-[15%] text-center max-w-[240px] leading-snug top-[20%] xxs:hidden">
          <h1 className=" text-center text-black text-h1 max-w-[240px] leading-snug ">
            {content.hero_text}
          </h1>
        </Fade>
        <div>
          <Fade className="absolute m-auto w-fit left-0 right-0 bottom-[10%] flex flex-col gap-fluid-56  xxs:top-[12%] xxs:left-[15%]">
            <h1 className="hidden xxs:flex sm:max-w-[280px] md:max-w-[290px] lg:max-w-[310px]  max-w-[250px] self-center text-center text-black leading-snug text-h1">
              {content.hero_text}
            </h1>

            <div className="flex gap-fluid-32 xxs:gap-fluid-48 ">
              <Button
                text={content.first_link_text}
                type="anchor"
                arrow
                href={content.first_link}
                ariaLabel={`Hlekkur á ${content.first_link_text}`}
                className="bg-brown  text-white font-medium  hover:bg-brownHover"
              />{' '}
              <Button
                text={content.second_link_text}
                type="anchor"
                href={content.second_link}
                ariaLabel={`Hlekkur á ${content.second_link_text}`}
                className="bg-brown  text-white font-medium  hover:bg-brownHover"
              />
            </div>
          </Fade>
        </div>
      </div>

      <SliceZone slices={page.data.slices} components={components} />
    </section>
  )
}
