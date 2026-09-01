'use client'

import * as React from 'react'
import Link from 'next/link'

export default function CirclesPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw', margin: 0, padding: 0, overflow: 'hidden', backgroundColor: 'var(--bg-color, #fff)' }}>
      {/* Top minimal bar to navigate back home */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '10px 20px', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
        <Link 
          href="/" 
          style={{ display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', fontWeight: 500, color: 'inherit', fontSize: '14px' }}
        >
          🏠 Home
        </Link>
      </div>

      {/* Embedded FreeFlarum Forum */}
      <iframe 
        src="https://zonpluscircles.freeflarum.com" 
        title="ZONplus Circles Forum"
        style={{ flex: 1, width: '100%', border: 'none' }}
      />
    </div>
  )
}
