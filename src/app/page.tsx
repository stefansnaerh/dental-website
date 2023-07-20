import { Metadata } from 'next'
import { createClient } from '../../prismicio'
import { FrontPageDocument } from '../../prismicio-types'
import { SliceZone } from '@prismicio/react'
import { components } from '../../slices'

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient()
  const page = await client.getSingle('front_page')

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  }
}

export default async function Home() {
  const client = createClient()

  const page = await client.getSingle<FrontPageDocument>('front_page')

  return (
    <section>
      <h1 className="font-poppins text-h1">{page.data.hero_text}</h1>
      <SliceZone slices={page.data.slices} components={components} />
    </section>
  )
}
