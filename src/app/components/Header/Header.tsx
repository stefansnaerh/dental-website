import { createClient } from '../../../../prismicio'
import { PrismicNextLink } from '@prismicio/next'
import { KeyTextField } from '@prismicio/client'
import Logo from '../../icons/Logo.svg'
import CalendarIcon from '../../icons/Calendar.svg'
import NavGroup from './NavGroup/NavGroup'
import Button from '../Button/Button'
import MobileNav from './MobileNav/mobileNav'

export interface navGroups {
  title: KeyTextField
  navElements: object
}

export default async function Header() {
  const client = createClient()

  const data = await client.getSingle('header')
  const content = data.data

  const headerNavGroups: navGroups[] = [
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
  ]

  return (
    <header className="fixed top-0 left-0 right-0 justify-between flex bg-headerBeige h-[90px] xs:h-[100px] md:h-[120px] z-50 font-poppins text-md font-regular text-black ">
      <Logo className="h-[90px] xs:h-[100px] md:h-120 lg:w-[200px] w-[180px] pl-24" />

      {/*------------------------ Mobile Navigation ---------------------------------------*/}
      <MobileNav
        firstLink={content.first_link}
        firstLinkText={content.first_link_text}
        buttonLink={content.button_link}
        buttonText={content.button_text}
        navGroups={headerNavGroups}
      />
      {/*-------------------------- Desktop Navigation ---------------------------------------*/}

      <nav className="hidden md:flex gap-fluid-56 xl:gap-fluid-72 pr-24 ">
        <ul className="flex self-center  gap-20 lg:gap-fluid-56 ">
          <li>
            <PrismicNextLink
              aria-label={`Hlekkur á ${content.first_link_text}`}
              field={content.first_link}
            >
              {content.first_link_text}
            </PrismicNextLink>
          </li>

          <NavGroup headerNavGroups={headerNavGroups} />
          <li>{content.scroll_to_section_text}</li>
        </ul>
        <Button
          text={content.button_text}
          type="anchor"
          ariaLabel={`Hlekkur til að fara á ${content.button_text}`}
          icon={<CalendarIcon className="h-24 w-24" />}
          href={content.button_link}
          className="bg-brown text-white font-medium self-center hover:bg-brownHover transition-all duration-300 ease-in-out"
        />
      </nav>
    </header>
  )
}
