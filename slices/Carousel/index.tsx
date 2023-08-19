import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import SliceContainer from '@/src/app/components/SliceContainer/sliceContainer'
import { Fade } from '@/src/app/components/Fade/fade'

export type CarouselProps = SliceComponentProps<Content.CarouselSlice>

const Carousel = ({ slice }: CarouselProps): JSX.Element => {
  const section = slice.primary

  return (
    <SliceContainer>
      <section className="font-poppins overflow-hidden flex flex-col gap-fluid-56 md:gap-fluid-96">
        <Fade className="flex flex-col gap gap-fluid-40 lg:gap-fluid-48 md:flex-row md:gap-fluid-64">
          {section.title && (
            <h2 className="text-h2  w-[80%] md:w-[50%]">{section.title}</h2>
          )}
          {section.paragraph && (
            <h3 className=" text-paragraph font-regular md:w-[50%]">
              {section.paragraph}
            </h3>
          )}
        </Fade>
        {slice.items && (
          <Fade className="flex noScrollbar gap-fluid-24 sm:gap-fluid-32 lg:gap-fluid-48 overflow-scroll snap-x snap-mandatory">
            {slice.items.map((item, index) => {
              return (
                <div
                  key={index}
                  className="relative overflow-hidden w-fill snap-x snap-mandatory snap-always snap-center px-fluid-8  min-w-[85%] xs:min-w-[70%] md:min-w-[40%] lg:min-w-[30%] "
                >
                  <div className="relative pb-[110%] xxs:pb-[100%] xs:pb-[90%] ">
                    <PrismicNextImage
                      field={item.image}
                      className="object-cover z-0 rounded-12"
                      imgixParams={{ fit: 'crop' }}
                      fill
                      sizes=""
                    />
                  </div>
                </div>
              )
            })}
          </Fade>
        )}
      </section>
    </SliceContainer>
  )
}

export default Carousel
