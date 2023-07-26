import { ReactNode } from 'react'

interface SliceContainerProps {
  children: ReactNode
  lessPadding?: boolean
}

export const SliceContainer = (props: SliceContainerProps) => {
  const { lessPadding = false, children } = props

  return (
    <div
      className={`lg:py-fluid-96 py-64  flex w-full items-center content-center max-w-screen-xxl ${
        lessPadding ? 'px-container-56' : 'px-container-88'
      }`}
    >
      {children}
    </div>
  )
}
