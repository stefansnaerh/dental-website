'use client'
import { useState } from 'react'
import { navGroups } from '../Header'
import { KeyTextField, LinkField } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'
import ChevronDown from '../../../icons/ChevronDown.svg'
import CalendarIcon from '../../../icons/Calendar.svg'
import Button from '../../Button/Button'
import cx from 'classnames'

export default function MobileNav({
  navGroups,
  firstLink,
  firstLinkText,
  buttonLink,
  buttonText,
}: {
  navGroups: navGroups[]
  firstLink: LinkField
  firstLinkText: KeyTextField
  buttonLink: LinkField
  buttonText: KeyTextField
}) {
  const [showNestedNavElements, setShowNestedNavElements] =
    useState<boolean>(true)
  const [currentIndex, setCurrentIndex] = useState<number>(-1)
  const [showMobileNav, setShowMobileNav] = useState<boolean>()

  const showNavGroup = (i: number) => {
    setShowNestedNavElements((prevShowNav) =>
      currentIndex === i ? !prevShowNav : true
    )
    setCurrentIndex(i)
  }
  const toggleShowNav = () => {
    setShowMobileNav((prevShowMobileNav) => !prevShowMobileNav)
    setShowNestedNavElements(false)
  }

  return (
    <>
      <button
        onClick={toggleShowNav}
        aria-label="Takki til að sýna farsíma valmynd"
        className="md:hidden flex justify-between flex-col h-[30px] w-56 self-center pr-24 "
      >
        <div
          className={cx(
            'bg-black h-2 w-fill rounded-12  transform transition duration-500 ease-in-out ',
            {
              ['rotate-45 translate-y-[13.6px]']: showMobileNav,
              ['']: !showMobileNav,
            }
          )}
        ></div>
        <div
          className={cx(
            'bg-black h-2 w-fill rounded-12  transform transition duration-500 ease-in-out ',
            {
              ['opacity-0']: showMobileNav,
            }
          )}
        ></div>
        <div
          className={cx(
            'bg-black h-2 w-fill rounded-12  transform transition duration-500 ease-in-out ',
            {
              ['-rotate-45 -translate-y-[13.6px]']: showMobileNav,
              ['']: !showMobileNav,
            }
          )}
        ></div>
      </button>

      <nav
        className={cx(
          ' md:hidden absolute z-10 flex  flex-col gap-fluid-72 bg-softWhite top-[90px] xs:top-[100px] overflow-y-auto h-fill min-h-[calc(100vh-100px)] w-fill px-fluid-40 py-fluid-56 transform duration-500 ease-in-out',
          { ['ml-fill']: !showMobileNav, ['ml-0']: showMobileNav }
        )}
      >
        <ul className="text-[24px] flex flex-col gap-fluid-32 ">
          <li>
            {' '}
            <PrismicNextLink
              aria-label={`Hlekkur sem fer með þig á ${firstLinkText}`}
              field={firstLink}
            >
              {firstLinkText}
            </PrismicNextLink>
          </li>

          {navGroups.map((group, i) => {
            return (
              <li key={i}>
                <button className="flex  gap-6" onClick={() => showNavGroup(i)}>
                  {group.title}
                  <ChevronDown
                    className={
                      currentIndex === i && showNestedNavElements
                        ? 'rotate-180 h-20 w-20 text-black self-center transition-all duration-300 ease-in-out'
                        : 'h-20 w-20 text-black self-center transition-all duration-300 ease-in-out'
                    }
                  />
                </button>
                <ul
                  className={
                    currentIndex === i && showNestedNavElements
                      ? 'flex flex-col gap-24 rounded-b-16 top-120 p-26 transition-all duration-300 ease-in-out text-[20px]'
                      : 'hidden transition-all duration-300 ease-in-out'
                  }
                >
                  {Object.values(group.navElements).map(
                    (
                      el: { link_name: KeyTextField; link: LinkField },
                      i: number
                    ) => {
                      return (
                        <li key={i}>
                          {' '}
                          <PrismicNextLink
                            aria-label={`Hlekkur til að fara með þig á ${el.link_name}`}
                            field={el.link}
                          >
                            {el.link_name}
                          </PrismicNextLink>
                        </li>
                      )
                    }
                  )}
                </ul>
              </li>
            )
          })}
        </ul>
        <Button
          text={buttonText}
          type="anchor"
          icon={<CalendarIcon className="h-24 w-24" />}
          href={buttonLink}
          ariaLabel={`Hlekkur til að fara með þig á ${buttonText}`}
          className="bg-brown  text-white font-medium  hover:bg-brownHover transition-all duration-300 ease-in-out"
        />
      </nav>
    </>
  )
}
