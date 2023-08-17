import { Metadata } from 'next'
import { createClient } from '../../../../prismicio'
import { AboutUsDocument } from '../../../../prismicio-types'
import { SliceZone } from '@prismicio/react'
import { components } from '../../../../slices'

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient()
  const page = await client.getSingle('about_us')

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  }
}

export default async function Apiko() {
  const client = createClient()

  const page = await client.getSingle<AboutUsDocument>('about_us')

  return (
    <main>
      <SliceZone slices={page.data.slices} components={components} />
    </main>
  )
}
