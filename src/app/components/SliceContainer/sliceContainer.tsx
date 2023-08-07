import { ReactNode } from 'react'

interface SliceContainerProps {
  children: ReactNode
  lessPadding?: boolean
  className?: string
}

const SliceContainer = (props: SliceContainerProps) => {
  const { lessPadding = false, children, className } = props

  return (
    <div
      className={`lg:py-fluid-96 py-64  flex w-full items-center content-center max-w-screen-xxl ${className} ${
        lessPadding ? 'px-container-56' : 'px-container-88'
      }`}
    >
      {children}
    </div>
  )
}

export default SliceContainer
