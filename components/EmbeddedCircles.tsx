'use client'

import * as React from 'react'
import { usePathname } from 'next/navigation'

export function EmbeddedCircles() {
  const pathname = usePathname()

  // Define the exact target paths where the forum should appear
  const targetPaths = ['/toolboard', '/grantboard', '/pinboard', '/chatboard']

  // If we aren't on one of those specific pages, render nothing
  if (!targetPaths.includes(pathname)) {
    return null
  }

  return (
    <div style={{ width: '100%', maxWidth: '1200px', margin: '40px auto', padding: '0 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ width: '100%', height: '700px', border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#fff' }}>
        <iframe 
          src="https://zonpluscircles.freeflarum.com" 
          title="ZONplus Circles Forum"
          style={{ width: '100%', height: '100%', border: 'none' }}
        />
      </div>
    </div>
  )
}
