import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

import SliceContainer from '@/src/app/components/SliceContainer/sliceContainer'
import { Fade } from '@/src/app/components/Fade/fade'
import { PrismicNextLink } from '@prismicio/next'
import ToothIcon from '@/src/app/icons/tooth.svg'
import ArrowRight from '@/src/app/icons/ArrowRight.svg'

/**
 * Props for `ServiceOverview`.
 */
export type ServiceOverviewProps =
  SliceComponentProps<Content.ServiceOverviewSlice>

/**
 * Component for "ServiceOverview" Slices.
 */
const ServiceOverview = ({ slice }: ServiceOverviewProps): JSX.Element => {
  const section = slice.primary
  return (
    <SliceContainer className="bg-white" lessPadding>
      <section className="font-poppins text-black flex flex-col gap-fluid-40 md:gap-fluid-96 overflow-hidden ">
        <Fade className="flex flex-col gap-fluid-40 md:flex-row md:justify-between lg:px-[4%]">
          {section.title && (
            <div className=" border-b-[3px] pb-4 border-y-orange h-fit w-fit">
              <h2 className="text-h2 font-regular h-fit w-fit">
                {section.title}
              </h2>
            </div>
          )}
          {section.paragraph && (
            <p className="text-paragraph font-regular md:max-w-[60%]  ">
              {section.paragraph}
            </p>
          )}
        </Fade>
        <Fade className="flex noScrollbar gap-fluid-24 sm:gap-fluid-32 lg:gap-fluid-48 overflow-scroll snap-x snap-mandatory lg:overflow-hidden lg:flex-wrap lg:justify-center">
          {slice.items?.map((item, index) => {
            return (
              <PrismicNextLink
                field={item.link}
                key={index}
                className="flex group flex-col gap-fluid-32 md:gap-fluid-40  min-w-[80%] snap-x snap-mandatory bg-lighGrey hover:bg-lightGreyHover hover:text-softWhite px-fluid-40 md:px-fluid-48 pt-fluid-40 md:pt-fluid-48 pb-fluid-32 md:pb-fluid-40 rounded-12 shadow-lg transition-all duration-300 ease-in-out sm:min-w-[60%] md:min-w-[45%] lg:min-w-[30%] lg:max-w-[30%]"
              >
                <div className="flex justify-between">
                  <h3 className="text-h3 font-regular self-center">
                    {item.title}
                  </h3>
                  <ToothIcon className="text-orange h-32 w-32 sm:h-40 sm:w-40 self-center group-hover:text-white transition-all duration-300" />
                </div>
                <span className="h-[1px] w-fill  bg-grey opacity-20 group-hover:bg-white"></span>
                <p className="text-paragraph font-regular line-clamp-4">
                  {item.paragraph}
                </p>

                <div className="flex self-end pt-fluid-24">
                  <p className="text-paragraph font-medium ">
                    {item.link_text}
                  </p>
                  <ArrowRight className="self-center h-16 w-32 transition-all duration-300 group-hover:pl-16 " />
                </div>
              </PrismicNextLink>
            )
          })}
        </Fade>
      </section>
    </SliceContainer>
  )
}

export default ServiceOverview
