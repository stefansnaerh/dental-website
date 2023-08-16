import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'

import AcademicCap from '@/src/app/icons/AcademicCap.svg'
import { PrismicNextLink } from '@prismicio/next'
import SliceContainer from '@/src/app/components/SliceContainer/sliceContainer'
import Button from '@/src/app/components/Button/Button'
import { Fade } from '@/src/app/components/Fade/fade'

import cx from 'classnames'

export type NewsProps = SliceComponentProps<Content.NewsSlice>

const News = ({ slice }: NewsProps): JSX.Element => {
  const section = slice.primary

  return (
    <SliceContainer className="bg-white " lessPadding>
      <section className="w-fill flex flex-col gap-fluid-64 md:gap-fluid-144 ">
        <Fade className=" border-b-[3px] pb-4 border-y-orange h-fit w-fit">
          <h2 className="text-h2 font-regular h-fit w-fit">{section.title}</h2>
        </Fade>
        {/* -------------------------   Hides on 768px    --------------------------------------- */}
        <div className="relative w-fill flex flex-col gap-fluid-40 sm:hidden ">
          {slice.items.map((item, i) => {
            return (
              <Fade
                key={i}
                className="relative snap-center  min-w-[80%] group overflow-hidden rounded-12"
              >
                <PrismicNextLink
                  field={item.link}
                  aria-label={`Hlekkur til að lesa meira um ${item.title}`}
                >
                  <div className="relative pb-[60%] sm:pb-[122%] ">
                    <div className="absolute w-fill h-fill z-10 rounded-12 overflow-hidden bg-newsGradient opacity-50 transform transition-all duration-300"></div>
                    <PrismicNextImage
                      field={item.image}
                      className="object-cover z-0 rounded-12 group-hover:scale-105 transform duration-300 ease-in-out"
                      imgixParams={{ fit: 'crop' }}
                      priority
                      fill
                    />
                    <div className="absolute h-full z-20 w-fill flex flex-col gap-fluid-12  px-fluid-32 pt-fluid-32 ">
                      <div className="w-fill flex justify-between">
                        <h3 className="text-h3 text-white font-medium">
                          {item.title}
                        </h3>
                        <AcademicCap className="w-32 h-32 text-white" />
                      </div>
                      <div className="w-fill h-[1px] bg-white opacity-30 px-fluid-32"></div>

                      <Button
                        type="none"
                        href={item.link}
                        className="w-fit  bg-white self-end absolute bottom-fluid-32"
                        text=""
                        arrow
                        ariaLabel={`Takki til að lesa meira um ${item.title}`}
                      />
                    </div>
                  </div>
                </PrismicNextLink>
              </Fade>
            )
          })}
        </div>
        {/* -------------------------   Showes on 768px    --------------------------------------- */}
        <div className="sm:flex sm:flex-col gap-fluid-32 lg:gap-fluid-48">
          {slice.items.map((item, i) => {
            return (
              <Fade key={i}>
                <PrismicNextLink
                  field={item.link}
                  className={cx('flex gap-fluid-24 group', {
                    ['flex-row-reverse']: i === 1 || i === 3,
                  })}
                  aria-label={`Hlekkur til að lesa meira um ${item.title}`}
                >
                  <div className="relative pb-[40%] lg:pb-[35%] w-[40%] md:w-[50%] lg:w-[55%] overflow-hidden rounded-12">
                    <PrismicNextImage
                      field={item.image}
                      className="object-cover z-0 rounded-12 group-hover:scale-105 transform duration-300 ease-in-out"
                      imgixParams={{ fit: 'crop' }}
                      priority
                      fill
                    />
                  </div>
                  <div className="relative w-[60%] md:w-[50%] lg:w-[45%] bg-beigeDarker group-hover:bg-orangeHover rounded-12 flex flex-col gap-fluid-18 md:gap-fluid-24  px-fluid-40 pt-fluid-40 md:px-fluid-48 md:pt-fluid-48 lg:px-fluid-56 lg:pt-fluid-56 xl:px-fluid-64 xl:pt-fluid-64 transform duration-300 ease-in-out">
                    <Fade className="w-fill flex justify-between">
                      <h3 className="text-h3 text-black font-regular self-center">
                        {item.title}
                      </h3>
                      <AcademicCap className="w-32 h-32 md:h-40 md:w-40 text-black" />
                    </Fade>
                    <div className="w-fill h-[1px] bg-black opacity-20 px-fluid-32"></div>
                    <p className="text-paragraph text-black font-regular line-clamp-4 pt-16">
                      {item.paragraph}
                    </p>
                    <Button
                      type="none"
                      href={item.link}
                      className="w-fit  bg-white self-end absolute bottom-fluid-32 "
                      text=""
                      noShadow
                      arrow
                      ariaLabel={`Takki til að lesa meira um ${item.title}`}
                    />
                  </div>
                </PrismicNextLink>
              </Fade>
            )
          })}
        </div>
      </section>
    </SliceContainer>
  )
}

export default News
