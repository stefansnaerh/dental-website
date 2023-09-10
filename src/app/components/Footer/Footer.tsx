import { createClient } from '../../../../prismicio'
import Logo from '../../icons/ApikoLogo.svg'
import { PrismicNextLink } from '@prismicio/next'

export default async function Footer() {
  const client = createClient()

  const data = await client.getSingle('footer')
  const content = data.data

  interface footerNavGroups {
    title: string
    navElements: object
  }

  const footerNavGroups = [
    {
      title: content.link_group_1_title,
      navElements: content.link_group_1,
    },
    {
      title: content.link_group_2_title,
      navElements: content.link_group_2,
    },
    {
      title: content.link_group_3_title,
      navElements: content.link_group_3,
    },
    {
      title: content.link_group_4_title,
      navElements: content.link_group_4,
    },
  ]

  return (
    <footer className=" font-poppins sm:my-32 mx-fluid-12 pt-container-56 flex flex-col gap-16 text-sm text-black md:gap-fluid-48 xxs:mx-fluid-16 sm:mx-fluid-40 lg:mx-fluid-56 ">
      <div className=" flex flex-col w-fill md:flex-row px-24  md:justify-between lg:justify-around gap-y-16 sm:gap-64 rounded-12 bg-footerBeige py-fluid-40 p-8 xs:p-48 md:py-56 md:pt-56 md:pb-fluid-80">
        <Logo className="h-72 -ml-8 w-[190px]  sm:flex  lg:w-240 lg:h-104 xl:h-[158px] xl:w-[300px]" />

        <nav className="bg-footerBeige rounded-12 flex overflow-hidden flex-wrap gap-y-64 gap-x-fluid-40 md:gap-fluid-96 py-48 sm:p-0 ">
          {footerNavGroups.map((group, i) => {
            return (
              <ul
                aria-label={`${group.title}`}
                key={i}
                className="flex gap-8 md:min-h-[160px] w-[130px] md:w-fit flex-col font-regular before:content-[attr(aria-label)] before:font-medium"
              >
                {group.navElements.map((element, i) => {
                  return (
                    <li
                      key={i}
                      className="font-regular hover:text-pureBlack transition-all duration-75 "
                    >
                      <PrismicNextLink field={element.link}>
                        {element.link_name}
                      </PrismicNextLink>
                    </li>
                  )
                })}
              </ul>
            )
          })}
        </nav>

        <p className="text-sm md:hidden">©️ 2023 Stefán Snær</p>
      </div>
      <div className="flex justify-between w-fill ">
        <div className="flex w-fill justify-end md:justify-around gap-32">
          <ul className="w-fill flex flex-wrap  text-[9px] sm:text-[12px] md:text-sm md:text-rock justify-around self-center">
            <li>
              <a
                href={`https://maps.google.com/maps?q=${content.company_address}`}
                aria-label={`Opnar leiðbeiningar til ${content.company_address} í google maps`}
              >
                {content.company_address}
              </a>
            </li>

            <li>{content.company_ssd_number}</li>
            <li>
              <a
                href={`mailto:${content.company_email}`}
                aria-label={`Opnar tölvupóst til ${content.company_email} í nýjum glugga`}
                target="_blank"
              >
                {content.company_email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${content.company_phone_number}`}
                aria-label={`Hringja í síma ${content.company_phone_number}`}
              >
                {content.company_phone_number}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
