import { Metadata } from 'next'
import { createClient } from '../../../../../prismicio'
import { ServiceDocument } from '../../../../../prismicio-types'
import { PrismicNextImage } from '@prismicio/next'

import SliceContainer from '@/src/app/components/SliceContainer/sliceContainer'
import RichText from '@/src/app/components/RichText/RichText'
import { Fade } from '@/src/app/components/Fade/fade'

type Params = { uid: string }

export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata> {
  const client = createClient()
  const page = await client.getByUID('service', params.uid)

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  }
}

export default async function Service({ params }: { params: Params }) {
  const client = createClient()

  const page = await client.getByUID<ServiceDocument>('service', params.uid)
  const section = page.data

  return (
    <main className="font-poppins text-black bg-backgroundWhite flex flex-col">
      {section.hero_image && (
        <div className="relative w-fill  overflow-hidden  bg-beigeLighter px-fluid-12 sm:px-container-56">
          <div className="relative lg:pb-[30%] xxs:pb-[65%] md:pb-[34%] xl:pb-[27%]  sm:pb-[36%] pb-[70%]">
            <PrismicNextImage
              field={section.hero_image}
              className="object-cover z-0 rounded-b-12 sm:rounded-12 group-hover:scale-105 transform duration-300"
              imgixParams={{ fit: 'crop' }}
              priority
              fill
            />
          </div>
        </div>
      )}
      <SliceContainer className="flex flex-col self-c gap-fluid-40 lg:gap-fluid-48 max-w-[950px] self-center">
        {section.title && (
          <Fade className="self-start">
            <h1 className="text-h2 font-regular  border-b-[3px] pb-4 border-y-orange w-fit ">
              {section.title}
            </h1>
          </Fade>
        )}
        {section.richtext && (
          <Fade>
            <RichText text={section.richtext} />
          </Fade>
        )}
      </SliceContainer>
    </main>
  )
}
