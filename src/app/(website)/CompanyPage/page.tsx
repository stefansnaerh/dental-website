import { Metadata } from 'next'
import { createClient } from '../../../../prismicio'
import { CompanyPageDocument } from '../../../../prismicio-types'
import { SliceZone } from '@prismicio/react'
import { components } from '../../../../slices'

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient()
  const page = await client.getSingle('company_page')

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  }
}

export default async function CompanyPage() {
  const client = createClient()

  const page = await client.getSingle<CompanyPageDocument>('company_page')

  return (
    <main>
      <SliceZone slices={page.data.slices} components={components} />
    </main>
  )
}
