import type { Metadata } from 'next'
import Link from 'next/link'

import { NotionPageRoute } from '@/components/NotionPageRoute'
import { getPageData } from '@/lib/get-page-data'
import { getSiteMap } from '@/lib/get-site-map'
import { isDev, pageUrlOverrides } from '@/lib/config'
import { createPageMetadata } from '@/lib/page-metadata'

interface DynamicPageProps {
  params: Promise<{
    pageId: string
  }>
}

export const revalidate = 10
export const dynamic = 'force-dynamic'
export const dynamicParams = true

const targetBoardIds = [
  '3ceee6ae553b80f3beeadcc0742eb045', // Toolboard
  '3ceee6ae553b8056b22edd909831dfd1', // Grantboard
  '3ceee6ae553b80eaa4cfcca4c6b07b59', // Pinboard
  '3ceee6ae553b809b928dd08b834b5606'  // Chatboard
]

const targetSlugs = ['toolboard', 'grantboard', 'pinboard', 'chatboard']

export async function generateStaticParams() {
  if (isDev) {
    return []
  }

  const siteMap = await getSiteMap()
  const pageIds = [
    ...new Set([
      ...Object.keys(siteMap.canonicalPageMap),
      ...Object.keys(pageUrlOverrides)
    ])
  ]

  return pageIds.map((pageId) => ({ pageId }))
}

export async function generateMetadata({
  params
}: DynamicPageProps): Promise<Metadata> {
  const { pageId } = await params
  const cleanedId = pageId?.replace(/-/g, '').toLowerCase()

  if (targetBoardIds.includes(cleanedId) || targetSlugs.some(slug => cleanedId?.includes(slug))) {
    return {
      title: 'ZONplus Circles Forum',
      description: 'Collaborative discussion board'
    }
  }

  return createPageMetadata(await getPageData(pageId))
}

export default async function DynamicPage({ params }: DynamicPageProps) {
  const { pageId } = await params
  const cleanedId = pageId?.replace(/-/g, '').toLowerCase()

  const isTargetBoard = 
    targetBoardIds.includes(cleanedId) || 
    targetSlugs.some(slug => cleanedId?.includes(slug))

  if (isTargetBoard) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw', margin: 0, padding: 0, overflow: 'hidden', backgroundColor: 'var(--bg-color, #fff)' }}>
        <div style={{ display: 'flex', alignItems: 'center', padding: '10px 20px', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
          <Link 
            href="/" 
            style={{ display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', fontWeight: 500, color: 'inherit', fontSize: '14px' }}
          >
            🏠 Home
          </Link>
        </div>

        <iframe 
          src="https://zonpluscircles.freeflarum.com" 
          title="ZONplus Circles Forum"
          style={{ flex: 1, width: '100%', border: 'none' }}
        />
      </div>
    )
  }

  const pageProps = await getPageData(pageId)
  return <NotionPageRoute pageProps={pageProps} />
}
