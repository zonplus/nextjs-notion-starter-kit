'use client'

import * as React from 'react'

export function BoardForumEmbed({ pageId }: { pageId: string }) {
  const targetPageIds = [
    '3ceee6ae553b80f3beeadcc0742eb045', // Toolboard
    '3ceee6ae553b8056b22edd909831dfd1', // Grantboard
    '3ceee6ae553b80eaa4cfcca4c6b07b59', // Pinboard
    '3ceee6ae553b809b928dd08b834b5606'  // Chatboard
  ]

  const cleanedPageId = pageId?.replace(/-/g, '')
  const matches = targetPageIds.some((id) => cleanedPageId?.includes(id))

  if (!matches) {
    return null
  }

  return (
    <div style={{ width: '100%', maxWidth: '1200px', margin: '60px auto', padding: '0 20px', zIndex: 999, position: 'relative' }}>
      <div style={{ width: '100%', height: '750px', border: '2px solid #333', borderRadius: '12px', overflow: 'hidden', background: '#fff', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
        <iframe 
          src="https://zonpluscircles.freeflarum.com" 
          title="ZONplus Circles Forum"
          style={{ width: '100%', height: '100%', border: 'none' }}
        />
      </div>
    </div>
  )
}
