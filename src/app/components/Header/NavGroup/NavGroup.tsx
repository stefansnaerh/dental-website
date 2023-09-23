'use client'
import { useState } from 'react'
import { PrismicNextLink } from '@prismicio/next'
import ChevronDown from '../../../icons/ChevronDown.svg'
import { navGroups } from '../Header'
import { KeyTextField, LinkField } from '@prismicio/client'

export default function NavGroup({
  headerNavGroups,
}: {
  headerNavGroups: navGroups[]
}) {
  const [showNav, setShowNav] = useState<boolean>(true)
  const [currentIndex, setCurrentIndex] = useState<number>(-1)

  const showNavGroup = (i: number) => {
    setShowNav((prevShowNav) => (currentIndex === i ? !prevShowNav : true))
    setCurrentIndex(i)
  }

  return (
    <>
      {headerNavGroups?.map((group, i) => {
        return (
          <div key={i} className="flex relative">
            <button
              aria-label={`Takki til að sjá hlekki fyrir ${group.title}`}
              className="flex  gap-6 hover:bg-softWhite py-fluid-16 px-fluid-24 rounded-16 hover:shadow-nav transition-all duration-300 ease-in-out "
              onClick={() => showNavGroup(i)}
            >
              {group.title}
              <ChevronDown
                className={
                  currentIndex === i && showNav
                    ? 'rotate-180 h-20 w-20 text-black  self-center transition-all duration-300 ease-in-out'
                    : 'h-20 w-20 text-black  self-center transition-all duration-300 ease-in-out'
                }
              />
            </button>
            <ul
              className={
                currentIndex === i && showNav
                  ? 'absolute flex flex-col gap-24 bg-headerBeige py-fluid-32 shadow-nav px-fluid-32 rounded-b-12 md:-left-[30px] lg:-left-[32px] lg2:-left-[34px] xl:-left-[36px]  top-[90px]  transition-all duration-300 ease-in-out'
                  : 'hidden'
              }
            >
              {Object.values(group.navElements).map(
                (
                  el: { link_name: KeyTextField; link: LinkField },
                  i: number
                ) => {
                  return (
                    <li className="min-w-fit whitespace-nowrap" key={i}>
                      <PrismicNextLink
                        aria-label={`Hlekkur á ${el.link_name}`}
                        field={el.link}
                        onClick={() => setShowNav(false)}
                        className="hover:bg-softWhite hover:shadow-sm transition-all py-fluid-16 px-fluid-24 rounded-16  duration-150 w-fit ease-in-out "
                      >
                        {el.link_name}
                      </PrismicNextLink>
                    </li>
                  )
                }
              )}
            </ul>
          </div>
        )
      })}
    </>
  )
}
