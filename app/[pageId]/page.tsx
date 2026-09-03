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

const boardMappings: Record<string, string> = {
  '3ceee6ae553b80f3beeadcc0742eb045': 'https://zonpluscircles.freeflarum.com/t/toolboard', 
  'toolboard': 'https://zonpluscircles.freeflarum.com/t/toolboard',
  '3ceee6ae553b8056b22edd909831dfd1': 'https://zonpluscircles.freeflarum.com/t/grantboard', 
  'grantboard': 'https://zonpluscircles.freeflarum.com/t/grantboard',
  '3ceee6ae553b80eaa4cfcca4c6b07b59': 'https://zonpluscircles.freeflarum.com/t/pinboard', 
  'pinboard': 'https://zonpluscircles.freeflarum.com/t/pinboard',
  '3ceee6ae553b809b928dd08b834b5606': 'https://zonpluscircles.freeflarum.com/t/chatboard', 
  'chatboard': 'https://zonpluscircles.freeflarum.com/t/chatboard'
}

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

  if (boardMappings[cleanedId] || Object.keys(boardMappings).some(k => cleanedId?.includes(k))) {
    return {
      title: 'ZONplus Circles Forum',
      description: 'Collaborative discussion board'
    }
  }

  try {
    const pageData = await getPageData(pageId)
    return createPageMetadata(pageData)
  } catch {
    return {
      title: 'ZONplus Circles',
      description: 'Collaborative curriculum and student-led project frameworks'
    }
  }
}

export default async function DynamicPage({ params }: DynamicPageProps) {
  const { pageId } = await params
  const cleanedId = pageId?.replace(/-/g, '').toLowerCase()

  const matchedKey = Object.keys(boardMappings).find(
    key => cleanedId === key || cleanedId?.includes(key)
  )

  if (matchedKey) {
    const forumUrl = boardMappings[matchedKey]

    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw', margin: 0, padding: 0, overflow: 'hidden', backgroundColor: 'var(--bg-color, #fff)' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          maxWidth: 'var(--notion-max-width, 720px)',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: 'max(calc(2vw - 8px), 0px)',
          paddingRight: 'max(calc(2vw - 8px), 0px)',
          paddingTop: '12px',
          paddingBottom: '12px',
          color: 'var(--fg-color, #111111)',
          flexShrink: 0
        }}>
          <Link 
            href="/" 
            title="Home"
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              textDecoration: 'none', 
              padding: '6px 8px',
              color: 'inherit'
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.85 }}>
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </Link>
        </div>

        <iframe 
          src={forumUrl} 
          title="ZONplus Circles Forum"
          style={{ flex: 1, width: '100%', border: 'none' }}
        />
      </div>
    )
  }

  try {
    const pageProps = await getPageData(pageId)
    return <NotionPageRoute pageProps={pageProps} />
  } catch (error) {
    // Fallback error screen if Notion block fetch fails
    return (
      <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'sans-serif' }}>
        <h2>Unable to load card</h2>
        <p>This item could not be retrieved from Notion. Please verify the page is publicly shared.</p>
        <p><Link href="/">Return to Home</Link></p>
      </div>
    )
  }
}
