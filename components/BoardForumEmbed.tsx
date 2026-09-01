'use client'

import * as React from 'react'

export function BoardForumEmbed({ pageId }: { pageId: string }) {
  const targetPageIds = [
    '3ceee6ae553b80f3beeadcc0742eb045', // Toolboard
    '3ceee6ae553b8056b22edd909831dfd1', // Grantboard
    '3ceee6ae553b80eaa4cfcca4c6b07b59', // Pinboard
    '3ceee6ae553b809b928dd08b834b5606'  // Chatboard
  ]

  // Clean hyphens to guarantee a match against our raw target arrays
  const cleanedPageId = pageId?.replace(/-/g, '')
  const matches = targetPageIds.some((id) => cleanedPageId === id)

  if (!matches) {
    return null
  }

  return (
    <div style={{ width: '100%', maxWidth: '1200px', margin: '40px auto', padding: '0 20px', position: 'relative', zIndex: 10 }}>
      <div style={{ width: '100%', height: '750px', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '12px', overflow: 'hidden', background: '#fff', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
        <iframe 
          src="https://zonpluscircles.freeflarum.com" 
          title="ZONplus Circles Forum"
          style={{ width: '100%', height: '100%', border: 'none' }}
        />
      </div>
    </div>
  )
}
