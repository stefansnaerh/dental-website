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
              className="flex  gap-6 hover:text-pureBlack transition-all duration-75 ease-in-out "
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
                  ? 'absolute flex flex-col gap-24 bg-headerBeige py-fluid-32 px-fluid-40 rounded-b-12 md:-left-[30px] lg:-left-[32px] lg2:-left-[34px] xl:-left-[36px]  top-[60px]  transition-all duration-300 ease-in-out'
                  : 'hidden'
              }
            >
              {Object.values(group.navElements).map(
                (
                  el: { link_name: KeyTextField; link: LinkField },
                  i: number
                ) => {
                  return (
                    <li
                      className="hover:text-pureBlack transition-all duration-75 ease-in-out "
                      key={i}
                    >
                      <PrismicNextLink
                        aria-label={`Hlekkur á ${el.link_name}`}
                        field={el.link}
                        onClick={() => setShowNav(false)}
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
