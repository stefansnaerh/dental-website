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
      className="hover:text-pureBlack transition-all duration-75 ease-in-out "
    >
      {buttonText}
    </button>
  )
}

export default ScrollToSection
