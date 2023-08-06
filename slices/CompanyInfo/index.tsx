import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import SliceContainer from '../../src/app/components/SliceContainer/sliceContainer'
import Button from '@/src/app/components/Button/Button'

export type CompanyInfoProps = SliceComponentProps<Content.CompanyInfoSlice>

const CompanyInfo = ({ slice }: CompanyInfoProps): JSX.Element => {
  const section = slice.primary
  return (
    <SliceContainer>
      <section className="font-poppins text-black flex flex-col md:flex-row gap-fluid-64 md:gap-fluid-144">
        <div className="relative flex flex-col gap-fluid-40 md:gap-fluid-56 md:w-[40%]">
          <div className=" border-b-[3px] pb-4 border-y-orange w-fit">
            <h2 className="text-h2 font-regular w-fit">{section.title}</h2>
          </div>
          <p className="text-paragraph font-regular ">{section.paragraph}</p>
          <Button
            text={section.button_text}
            href={section.button_link}
            type="anchor"
            arrow
            ariaLabel={`hlekkur til að ${section.button_text}`}
            className="w-fit bg-orange hover:bg-orangeHover transition-all duration-300 ease-in-out"
          ></Button>
        </div>
        <div className="flex noScrollbar gap-fluid-24 overflow-scroll snap-x snap-mandatory sm:overflow-hidden sm:grid sm:grid-cols-5 sm:grid-rows-2 md:w-[60%]">
          <div className="relative snap-center  min-w-[80%] overflow-hidden sm:min-w-[60%] sm:col-start-1 sm:col-end-4 sm:row-start-1 sm:row-end-3">
            <div className="relative pb-[122%] ">
              <PrismicNextImage
                field={section.first_image}
                className="object-cover z-0 rounded-12 group-hover:scale-105 transform duration-300"
                imgixParams={{ fit: 'crop' }}
                priority
                fill
              />
            </div>
          </div>

          <div className="relative min-w-[80%] snap-center overflow-hidden sm:min-w-[40%] sm:col-start-4 sm:col-end-6 sm:row-start-1 sm:row-end-1">
            <div className="relative pb-[110%]  sm:pb-[90%]">
              <PrismicNextImage
                field={section.second_image}
                className="object-cover z-0 rounded-12 group-hover:scale-105 transform duration-300"
                imgixParams={{ fit: 'crop' }}
                priority
                fill
              />
            </div>
          </div>
          <div className="relative w-fill min-w-[80%] snap-center  overflow-hidden sm:min-w-[40%] sm:col-start-4 sm:col-end-6 sm:row-start-2 sm:row-end-4">
            <div className="relative pb-[110%] sm:pb-[90%]">
              <PrismicNextImage
                field={section.third_image}
                className="object-cover z-0 rounded-12 group-hover:scale-105 transform duration-300"
                imgixParams={{ fit: 'crop' }}
                priority
                fill
              />
            </div>
          </div>
        </div>
      </section>
    </SliceContainer>
  )
}

export default CompanyInfo
