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
      <section className="font-poppins overflow-hidden flex flex-col gap-fluid-56">
        <Fade className="flex flex-col gap gap-fluid-40 lg:gap-fluid-48">
          <h2 className="text-h2  w-[80%] ">{section.title}</h2>
          <h3 className=" text-paragraph font-regular">{section.paragraph}</h3>
        </Fade>
        <Fade className="flex noScrollbar gap-fluid-24 sm:gap-fluid-32 lg:gap-fluid-48 overflow-scroll snap-x snap-mandatory">
          {slice.items.map((item, index) => {
            return (
              <div
                key={index}
                className="relative overflow-hidden w-fill snap-x snap-mandatory px-fluid-8 md:hidden min-w-[85%]"
              >
                <div className="relative pb-[110%] ">
                  <PrismicNextImage
                    field={item.image}
                    className="object-cover z-0 rounded-12"
                    imgixParams={{ fit: 'crop' }}
                    priority
                    fill
                  />
                </div>
              </div>
            )
          })}
        </Fade>
      </section>
    </SliceContainer>
  )
}

export default Carousel
