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
  '3ceee6ae553b80f3beeadcc0742eb045': 'https://zonpluscircles.freeflarum.com', // Toolboard
  'toolboard': 'https://zonpluscircles.freeflarum.com',
  
  '3ceee6ae553b8056b22edd909831dfd1': 'https://zonpluscircles.freeflarum.com', // Grantboard
  'grantboard': 'https://zonpluscircles.freeflarum.com',
  
  '3ceee6ae553b80eaa4cfcca4c6b07b59': 'https://zonpluscircles.freeflarum.com', // Pinboard
  'pinboard': 'https://zonpluscircles.freeflarum.com',
  
  '3ceee6ae553b809b928dd08b834b5606': 'https://zonpluscircles.freeflarum.com', // Chatboard
  'chatboard': 'https://zonpluscircles.freeflarum.com'
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

  return createPageMetadata(await getPageData(pageId))
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
        {/* Minimal navigation header with clean SVG home icon */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          padding: '10px 20px', 
          borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
          backgroundColor: 'var(--bg-color, #ffffff)',
          color: 'var(--fg-color, #111111)',
          flexShrink: 0
        }}>
          <Link 
            href="/" 
            title="Home"
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              textDecoration: 'none', 
              padding: '6px',
              borderRadius: '6px',
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
              color: 'inherit',
              transition: 'background-color 0.2s'
            }}
          >
            {/* Outline Home Icon */}
            <svg 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </Link>
        </div>

        {/* Embedded FreeFlarum Forum */}
        <iframe 
          src={forumUrl} 
          title="ZONplus Circles Forum"
          style={{ flex: 1, width: '100%', border: 'none' }}
        />
      </div>
    )
  }

  const pageProps = await getPageData(pageId)
  return <NotionPageRoute pageProps={pageProps} />
}
