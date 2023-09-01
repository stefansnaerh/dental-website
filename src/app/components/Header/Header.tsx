import { createClient } from '../../../../prismicio'
import { PrismicNextLink } from '@prismicio/next'
import { KeyTextField } from '@prismicio/client'
import Logo from '../../icons/LogoNew.svg'
import CalendarIcon from '../../icons/Calendar.svg'
import NavGroup from './NavGroup/NavGroup'
import Button from '../Button/Button'
import MobileNav from './MobileNav/mobileNav'

import ScrollToSection from '../ScrollToSection/scrollToSection'

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
    <header className="fixed top-0  left-0 right-0 justify-between flex bg-headerBeige h-[90px] xs:h-[100px] md:h-[120px] z-50 font-poppins text-md font-medium text-softBlack ">
      <a aria-label="hlekkur til að fara heim á forsíðu" href="/" className="">
        <Logo className="h-[90px] xs:h-[100px] md:h-120 lg:w-[200px] w-[180px] pl-24" />
      </a>

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
        <div className="flex self-center  gap-fluid-32 lg:gap-fluid-56 ">
          <PrismicNextLink
            aria-label={`Hlekkur á ${content.first_link_text}`}
            field={content.first_link}
            className="hover:text-pureBlack transition-all duration-75 ease-in-out"
          >
            {content.first_link_text}
          </PrismicNextLink>

          <NavGroup headerNavGroups={headerNavGroups} />
          <ScrollToSection
            sectionID={data.uid}
            buttonText={content.scroll_to_section_text}
          />
        </div>
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
