import { createClient } from '../../../../prismicio'
import Button from '../Button/Button'
import { Fade } from '../Fade/fade'
import SliceContainer from '../SliceContainer/sliceContainer'
import Phone from '@/src/app/icons/Phone.svg'
import Location from '@/src/app/icons/Location.svg'

export default async function Contact() {
  const client = createClient()

  const data = await client.getSingle('contact')

  const content = data.data

  return (
    <SliceContainer>
      <section className="w-fill flex justify-center font-poppins ">
        <Fade className="flex flex-col gap-fluid-56 max-w-[310px] self-center md:flex-row md:gap-fluid-40 md:max-w-none lg:gap-fluid-80">
          <Fade className="flex flex-col gap-fluid-32 md:justify-between ">
            <p className="text-center text-paragraph font-regular w-[90%] self-center md:max-w-[270px] md:self-center">
              {content.email_paragraph}
            </p>
            <Button
              type="a"
              text={content.email}
              aHref={`mailto:${content.email}`}
              aria-label={`Opnar tölvupóst til ${content.email} í nýjum glugga`}
              className="bg-brown text-white self-center"
            ></Button>
          </Fade>
          <div className="w-fill h-[3px] rounded-32 bg-orange  md:w-[4px] md:h-[170px] lg:h-[200px] xl:h-[240px] md:self-center"></div>
          <Fade className="flex  flex-col gap-fluid-32 md:justify-between ">
            <p className="text-center text-paragraph w-[90%] font-regular md:max-w-[270px] md:self-center">
              {content.location_paragraph}
            </p>
            <Button
              type="a"
              icon={<Location className="self-center" />}
              text={content.location}
              className="bg-brown text-white self-center "
              aHref={`https://maps.google.com/maps?q=${content.location}`}
              aria-label={`Opna leiðsögn til ${content.location} á Google Maps í nýjum glugga`}
            ></Button>
          </Fade>
          <div className="w-fill h-[3px] rounded-32 bg-orange md:h-[170px] lg:h-[200px] xl:h-[240px] md:w-[4px] md:self-center"></div>
          <Fade className="flex flex-col gap-fluid-32 md:justify-between ">
            <p className="text-center text-paragraph w-[90%] font-regular md:max-w-[270px] md:self-center">
              {content.phone_paragraph}
            </p>
            <Button
              type="a"
              text={content.phone_number}
              icon={
                <Phone className="self-center h-18 w-18 md:h-20 md:w-20 lg:h-22 lg:w-22" />
              }
              className="bg-brown text-white self-center "
              aHref={`tel:${content.phone_number}`}
              aria-label={`Hringja í síma ${content.phone_number} `}
            ></Button>
          </Fade>
        </Fade>
      </section>
    </SliceContainer>
  )
}
