'use client'

import * as React from 'react'
import { usePathname } from 'next/navigation'

export function BoardForumEmbed() {
  const pathname = usePathname()
  const lowerPath = pathname?.toLowerCase() || ''

  const targetBoards = ['toolboard', 'grantboard', 'pinboard', 'chatboard']
  const isTargetBoard = targetBoards.some((board) => lowerPath.includes(board))

  if (!isTargetBoard) {
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
