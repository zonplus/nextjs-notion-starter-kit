'use client'

import * as React from 'react'

export function BoardForumEmbed({ pageId }: { pageId: string }) {
  // List of your target Notion page IDs for Toolboard, Grantboard, Pinboard, and Chatboard
  const targetPageIds = [
    '3ceee6ae553b80f3beeadcc0742eb045', // Toolboard
    '3ceee6ae553b8056b22edd909831dfd1', // Grantboard
    '3ceee6ae553b80eaa4cfcca4c6b07b59', // Pinboard
    '3ceee6ae553b809b928dd08b834b5606'  // Chatboard
  ]

  // Clean the incoming pageId by removing any hyphens if present to match cleanly
  const cleanedPageId = pageId?.replace(/-/g, '')
  const matches = targetPageIds.some((id) => cleanedPageId?.includes(id))

  if (!matches) {
    return null
  }

  return (
    <div style={{ width: '100%', maxWidth: '1200px', height: '700px', margin: '40px auto 0 auto', padding: '0 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ width: '100%', height: '100%', border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#fff' }}>
        <iframe 
          src="https://zonpluscircles.freeflarum.com" 
          title="ZONplus Circles Forum"
          style={{ width: '100%', height: '100%', border: 'none' }}
        />
      </div>
    </div>
  )
}
