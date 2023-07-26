'use client'

import { ReactNode, useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import flattenChildren from '../../utils/flatten'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'
type Variant = 'list' | 'normal' | 'heading'

export interface FadeProps {
  children: ReactNode
  variant?: Variant
  className?: string
  childClassNames?: string | string[]
  threshold?: number
  direction?: Direction
  duration?: number
  stagger?: boolean
  staggerChildren?: number
  offset?: number
  scaleFrom?: number
  popIn?: boolean
  delay?: number
  scaleTo?: number
  triggerOnce?: boolean
  disable?: boolean
  displayChildrenInline?: boolean
}

const easing = [0.21, 0.46, 0.37, 0.91]

export const Fade = ({
  children,
  className,
  childClassNames,
  variant = 'normal',
  direction = 'up',
  threshold = 0.2,
  duration = 0.8,
  offset = 25,
  staggerChildren = 0.2,
  stagger,
  scaleFrom,
  scaleTo,
  popIn,
  delay,
  triggerOnce = true,
  disable = false,
  displayChildrenInline = false,
}: FadeProps) => {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: threshold, once: triggerOnce })
  const childrenArray: ReactNode[] = flattenChildren(children)

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  let staggerVariant = {}
  let variants = {}

  if (!disable) {
    staggerVariant = {
      hidden: {
        transition: { staggerChildren: 0, ease: easing },
      },
      visible: {
        transition: { staggerChildren, ease: easing },
      },
    }

    const xAxes = ['left', 'right']
    const yAxes = ['up', 'down']

    variants = {
      hidden: {
        opacity: 0,
        ...(xAxes.includes(direction) && {
          x: direction === 'right' ? offset : -offset,
        }),
        ...(yAxes.includes(direction) && {
          y: direction === 'up' ? offset : -offset,
        }),
        ...(scaleFrom && { scale: scaleFrom }),
      },
      visible: {
        opacity: 1,
        ...(xAxes.includes(direction) && { x: 0 }),
        ...(yAxes.includes(direction) && { y: 0 }),
        ...(scaleFrom && { scale: scaleTo || 1 }),
        ...(popIn && {
          scale: [0.98, 1.02, 0.98, 1],
          opacity: [0, 1, 1, 1],
        }),
        transition: {
          duration,
          ease: easing,
          ...(popIn && { times: [0, 0.3, 0.7, 1] }),
          ...(delay && !stagger && { delay }),
        },
      },
    }
  }

  const getChildClassNames = (i: number) => {
    if (typeof childClassNames == 'string') return childClassNames
    return childClassNames && childClassNames[i]
  }

  if (variant === 'list') {
    return (
      <motion.ul>
        {stagger
          ? childrenArray.map((element, i) => {
              return (
                <motion.li
                  style={
                    displayChildrenInline
                      ? { display: 'inline-block' }
                      : { display: 'block' }
                  }
                  key={`${i}-${element?.toString()}`}
                  className={getChildClassNames(i)}
                  variants={variants}
                >
                  {element}
                </motion.li>
              )
            })
          : children}
      </motion.ul>
    )
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      animate={controls}
      initial="hidden"
      variants={stagger ? staggerVariant : variants}
    >
      {stagger
        ? childrenArray.map((element, i) => {
            return (
              <motion.div
                style={
                  displayChildrenInline
                    ? { display: 'inline-block' }
                    : { display: 'block' }
                }
                key={`${i}-${element?.toString()}`}
                className={getChildClassNames(i)}
                variants={variants}
              >
                {element}
              </motion.div>
            )
          })
        : children}
    </motion.div>
  )
}

Fade.displayName = 'Fade'
