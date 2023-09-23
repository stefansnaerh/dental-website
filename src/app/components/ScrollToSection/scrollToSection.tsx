'use client'

import { KeyTextField } from '@prismicio/client'

interface ScrollToSectionProps {
  sectionID: string
  buttonText: KeyTextField
}

const ScrollToSection = (props: ScrollToSectionProps) => {
  const { sectionID, buttonText } = props

  const handleScroll = () => {
    const element = document.getElementById(`${sectionID}`)
    if (!element) return

    element.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <button
      onClick={handleScroll}
      className="hover:bg-softWhite font-merriWeather py-fluid-16 px-fluid-24 rounded-16 hover:shadow-nav transition-all duration-300 ease-in-out "
    >
      {buttonText}
    </button>
  )
}

export default ScrollToSection
