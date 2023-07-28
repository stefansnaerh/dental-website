import { createClient } from '../../../../prismicio'
import Logo from '../../icons/Logo.svg'
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
    <footer className=" font-poppins sm:my-32 mx-fluid-12 flex flex-col gap-16 text-sm text-black md:gap-fluid-48 xxs:mx-fluid-16 sm:mx-fluid-40 lg:mx-fluid-56">
      <div className="flex flex-col w-fill md:flex-row px-24  md:justify-between gap-y-16 sm:gap-64 rounded-12 bg-footerBeige pt-40 p-8 xs:p-48 md:py-56 md:pt-56 md:pb-fluid-80">
        <Logo className="h-72 -ml-8 w-[190px]  sm:flex " />

        <nav className="bg-footerBeige rounded-12 flex overflow-hidden flex-wrap gap-y-64 gap-x-fluid-40 py-48 sm:p-0 ">
          {footerNavGroups.map((group, i) => {
            return (
              <ul
                aria-label={`${group.title}`}
                key={i}
                className="flex gap-8 md:min-h-[160px] w-[130px] flex-col font-regular before:content-[attr(aria-label)] before:font-medium"
              >
                {group.navElements.map((element, i) => {
                  return (
                    <PrismicNextLink key={i} field={element.link}>
                      <li className="font-regular opacity-80">
                        {element.link_name}
                      </li>
                    </PrismicNextLink>
                  )
                })}
              </ul>
            )
          })}
        </nav>

        <p className="text-sm opacity-80">©️ 2023 Stefán Snær</p>
        <div className="flex justify-between w-fill ">
          <div className="flex w-fill md:w-2/3 lg:w-[55%] justify-end gap-32">
            <ul className="w-fill flex flex-wrap  text-[9px] sm:text-[12px] md:text-sm md:text-rock justify-around self-center">
              <li>{content.company_address}</li>

              <li>{content.company_ssd_number}</li>

              <li>
                <a href={`mailto:${content.company_email}`} target="_blank">
                  {content.company_email}{' '}
                  <span className="sr-only">
                    Opnar tölvupóst í nýjum glugga
                  </span>
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
      </div>
    </footer>
  )
}
