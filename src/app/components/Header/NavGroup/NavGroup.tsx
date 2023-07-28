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
      {headerNavGroups.map((group, i) => {
        return (
          <div className="flex">
            <li key={i}>
              <button className="flex  gap-6" onClick={() => showNavGroup(i)}>
                {group.title}
                <ChevronDown
                  className={
                    currentIndex === i && showNav
                      ? 'rotate-180 h-20 w-20 text-black self-center transition-all duration-300 ease-in-out'
                      : 'h-20 w-20 text-black self-center transition-all duration-300 ease-in-out'
                  }
                />
              </button>
              <ul
                className={
                  currentIndex === i && showNav
                    ? 'absolute flex flex-col gap-24 bg-headerBeige rounded-b-16 top-120 p-26 transition-all duration-300 ease-in-out'
                    : 'hidden'
                }
              >
                {Object.values(group.navElements).map(
                  (
                    el: { link_name: KeyTextField; link: LinkField },
                    i: number
                  ) => {
                    return (
                      <PrismicNextLink field={el.link}>
                        <li key={i}>{el.link_name}</li>
                      </PrismicNextLink>
                    )
                  }
                )}
              </ul>
            </li>
          </div>
        )
      })}
    </>
  )
}
