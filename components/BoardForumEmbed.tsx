'use client'

import * as React from 'react'

export function BoardForumEmbed({ pageId }: { pageId: string }) {
  // List of your target Notion page IDs for Toolboard, Grantboard, Pinboard, Chatboard
  const targetPageIds = [
    '3ceee6ae553b80f3beeadcc0742eb045', // Replace/add your exact Notion IDs here
    // Add the other board page IDs here if you have them
  ]

  // If this isn't one of the target boards, render nothing
  if (!targetPageIds.includes(pageId)) {
    return null
  }

  return (
    <div style={{ width: '100%', maxWidth: '1200px', height: '700px', margin: '40px auto', padding: '0 20px' }}>
      <iframe 
        src="https://zonpluscircles.freeflarum.com" 
        title="ZONplus Circles Forum"
        style={{ width: '100%', height: '100%', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '8px' }}
      />
    </div>
  )
}
