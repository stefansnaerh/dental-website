'use client'

import { MouseEventHandler } from 'react'
import ChevronDown from '@app/components/svgs/ChevronDown.svg'
import { KeyTextField } from '@prismicio/client'

export default function HeaderButton({
  text,
  ariaLabel,
  className,
  chevron = true,
  onClick,
}: {
  text: KeyTextField
  ariaLabel: string | undefined
  className?: string
  chevron?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement | undefined>
}) {
  return (
    <button className={className} onClick={onClick} aria-label={ariaLabel}>
      {text} {chevron ? <ChevronDown /> : ''}
    </button>
  )
}
