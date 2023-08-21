import { RichTextField } from '@prismicio/client'
import { PrismicRichText } from '@prismicio/react'

interface RichTextProps {
  text: RichTextField
}

export default function RichText(props: RichTextProps) {
  const { text } = props
  return (
    <div
      className="w-fill max-w-[900px] [&_p]:text-md [&_p]:font-regular 
    [&_h2]:text-h3 [&_h2]:font-medium [&_h2]:pb-fluid-12 [&_h2]:pt-fluid-40
    [&_h3]:text-lg [&_h3]:font-medium [&_h3]:pb-fluid-12 [&_h3]:pt-fluid-40
    [&_img]:py-fluid-32 [&_img]:max-h-[400px] [&_img]:w-fill [&_img]:rounded-12  [&_img]:object-cover 
    [&_li]:list-disc [&_li]:marker:text-orange [&_li]:text-md [&_li]:before:bg-red [&_li]:before:bg-red [&_li]:py-4 [&_ul]:py-8 [&_ul]:pl-16"
    >
      <PrismicRichText field={text} />
    </div>
  )
}
