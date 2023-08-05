'use client'

import { MouseEventHandler, ReactNode } from 'react'
import { KeyTextField, LinkField } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'
import ArrowRight from '../../icons/ArrowRight.svg'

export default function Button({
  text,
  ariaLabel,
  className,
  icon,
  arrow,
  type,
  href,
  onClick,
}: {
  text?: KeyTextField
  ariaLabel?: string | undefined
  className?: string
  icon?: ReactNode
  arrow?: boolean
  type: 'button' | 'anchor'
  href: LinkField
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement | undefined>
}) {
  return type === 'button' ? (
    <button
      aria-label={ariaLabel}
      className={`flex py-fl gap-8 py-fluid-12 px-fluid-18 shadow-button rounded-16 h-fit w-fit text-md font-poppins font-medium transition-all duration-300 ease-in-out ${className}`}
      onClick={onClick}
    >
      {icon ? <>{icon}</> : ''}
      {text}
      {arrow ? <ArrowRight className="self-center h-24 w-24" /> : ''}
    </button>
  ) : (
    <PrismicNextLink
      field={href}
      aria-label={ariaLabel}
      className={`flex py-fl gap-8 py-fluid-12 px-fluid-18 shadow-button rounded-16 h-fit w-fit text-md font-poppins font-medium transition-all duration-300 ease-in-out ${className}`}
      onClick={onClick}
    >
      {icon ? <>{icon}</> : ''}
      {text}
      {arrow ? (
        <ArrowRight className="self-center h-16 w-16 transition-all duration-300" />
      ) : (
        ''
      )}
    </PrismicNextLink>
  )
}
