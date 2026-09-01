'use client'

import * as React from 'react'
import { usePathname } from 'next/navigation'

export function BoardForumEmbed() {
  const pathname = usePathname()
  const lowerPath = (pathname || '').toLowerCase()

  const targetBoards = ['toolboard', 'grantboard', 'pinboard', 'chatboard']
  const isTargetBoard = targetBoards.some((board) => lowerPath.includes(board))

  // Temporary debug footer so we can see what pathname the browser is reading
  const debugMode = true

  return (
    <div style={{ width: '100%', maxWidth: '1200px', margin: '40px auto', padding: '0 20px', position: 'relative', zIndex: 10 }}>
      {debugMode && (
        <div style={{ background: '#222', color: '#0ff', padding: '10px', fontSize: '12px', marginBottom: '10px', borderRadius: '6px', fontFamily: 'monospace' }}>
          [Forum Debug] Pathname: &quot;{pathname}&quot; | Is Target Board?: {String(isTargetBoard)}
        </div>
      )}

      {isTargetBoard ? (
        <div style={{ width: '100%', height: '750px', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '12px', overflow: 'hidden', background: '#fff', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
          <iframe 
            src="https://zonpluscircles.freeflarum.com" 
            title="ZONplus Circles Forum"
            style={{ width: '100%', height: '100%', border: 'none' }}
          />
        </div>
      ) : (
        <div style={{ padding: '20px', background: '#fff3f3', border: '1px solid #ffcccc', color: '#c00', borderRadius: '8px', textAlign: 'center' }}>
          Forum hidden: Current path (&quot;{pathname}&quot;) does not match toolboard, grantboard, pinboard, or chatboard.
        </div>
      )}
    </div>
  )
}
