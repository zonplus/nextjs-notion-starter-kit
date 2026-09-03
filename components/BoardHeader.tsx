'use client'

import * as React from 'react'
import Link from 'next/link'
import { MoonIcon } from '@/lib/icons/moon'
import { SunIcon } from '@/lib/icons/sun'
import { useDarkMode } from '@/lib/use-dark-mode'

const barStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  maxWidth: 'var(--notion-max-width, 720px)',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: 'max(calc(2vw - 8px), 0px)',
  paddingRight: 'max(calc(2vw - 8px), 0px)',
  paddingTop: '12px',
  paddingBottom: '12px',
  color: 'var(--fg-color, #111111)',
  flexShrink: 0
}

const buttonStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '6px 8px',
  textDecoration: 'none',
  color: 'inherit',
  cursor: 'pointer'
}

const iconStyle = { opacity: 0.85 }

export function BoardHeader() {
  const { hasMounted, isDarkMode, toggleDarkMode } = useDarkMode()

  return (
    <div style={barStyle}>
      <Link href='/' title='Home' style={buttonStyle}>
        <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' style={iconStyle}>
          <path d='M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
          <polyline points='9 22 9 12 15 12 15 22' />
        </svg>
      </Link>
      <div onClick={toggleDarkMode} title='Toggle theme' style={buttonStyle}>
        <span style={{ display: 'flex', width: '16px', height: '16px', alignItems: 'center', justifyContent: 'center', opacity: 0.85 }}>
          {hasMounted && isDarkMode ? <MoonIcon /> : <SunIcon />}
        </span>
      </div>
    </div>
  )
}
