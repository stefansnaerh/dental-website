import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

import SliceContainer from '@/src/app/components/SliceContainer/sliceContainer'

export type NewsProps = SliceComponentProps<Content.NewsSlice>

const News = ({ slice }: NewsProps): JSX.Element => {
  const section = slice.primary
  return (
    <SliceContainer className="bg-white" lessPadding>
      <section>
        <div className=" border-b-[3px] pb-4 border-y-orange h-fit w-fit">
          <h2 className="text-h2 font-regular h-fit w-fit">{section.title}</h2>
        </div>
      </section>
    </SliceContainer>
  )
}

export default News
