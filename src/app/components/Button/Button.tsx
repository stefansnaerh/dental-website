'use client'

import { MouseEventHandler, ReactNode } from 'react'
import { KeyTextField, LinkField } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'
import ArrowRight from '../../icons/ArrowRight.svg'

export default function Button({
  text,
  ariaLabel,
  className,
  noShadow,
  icon,
  arrow,
  type,
  href,
  aHref,
  onClick,
}: {
  text?: KeyTextField
  ariaLabel?: string | undefined
  className?: string
  noShadow?: boolean
  icon?: ReactNode
  arrow?: boolean
  type: 'button' | 'anchor' | 'none' | 'a'
  href?: LinkField
  aHref?: string
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement | undefined>
}) {
  if (type === 'button') {
    return (
      <button
        aria-label={ariaLabel}
        className={`flex py-fl gap-8 py-fluid-12 px-fluid-18 shadow-button rounded-16 h-fit w-fit text-md font-poppins font-medium transition-all duration-300 ease-in-out ${className} ${
          noShadow ? '' : 'shadow-button '
        }`}
        onClick={onClick}
      >
        {icon ? <>{icon}</> : ''}
        {text}
        {arrow ? <ArrowRight className="self-center h-24 w-24" /> : ''}
      </button>
    )
  } else if (type === 'anchor') {
    return (
      <PrismicNextLink
        field={href}
        aria-label={ariaLabel}
        className={`group flex  gap-8 py-fluid-16 px-fluid-24 rounded-16 h-fit w-fit text-md font-poppins font-medium transition-all duration-300 ease-in-out ${className} ${
          noShadow ? '' : 'shadow-button '
        }`}
        onClick={onClick}
      >
        {icon ? <>{icon}</> : ''}
        {text}
        {arrow ? (
          <ArrowRight className="self-center h-16 w-32 transition-all duration-300 group-hover:pl-16  " />
        ) : (
          ''
        )}
      </PrismicNextLink>
    )
  } else if (type === 'none') {
    return (
      <div
        className={`group flex py-fl gap-8 py-fluid-16 px-fluid-24 rounded-16 h-fit w-fit text-md font-poppins font-medium transition-all duration-300 ease-in-out ${className} ${
          noShadow ? '' : 'shadow-button '
        }`}
      >
        {icon ? <>{icon}</> : ''}
        {text}
        {arrow ? (
          <ArrowRight className="self-center h-16 w-32 transition-all duration-300 group-hover:pl-16  " />
        ) : (
          ''
        )}
      </div>
    )
  } else {
    return (
      <a
        href={aHref}
        className={`group flex py-fl gap-8 py-fluid-16 px-fluid-24 rounded-16 h-fit w-fit text-md font-poppins font-medium transition-all duration-300 ease-in-out ${className} ${
          noShadow ? '' : 'shadow-button '
        }`}
      >
        {icon ? <>{icon}</> : ''}
        {text}
        {arrow ? (
          <ArrowRight className="self-center h-16 w-32 transition-all duration-300 group-hover:pl-16  " />
        ) : (
          ''
        )}
      </a>
    )
  }
}
