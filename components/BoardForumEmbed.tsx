'use client'

import * as React from 'react'

export function BoardForumEmbed({ pageId }: { pageId: string }) {
  console.log('Current Notion Page ID passed to component:', pageId)

  return (
    <div style={{ width: '100%', maxWidth: '1200px', margin: '60px auto', padding: '0 20px', zIndex: 999, position: 'relative' }}>
      <div style={{ padding: '10px', background: '#ffebee', color: '#c62828', marginBottom: '10px', borderRadius: '4px', fontFamily: 'monospace', fontSize: '14px' }}>
        DEBUG - Active Page ID: {pageId || 'None'}
      </div>
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
