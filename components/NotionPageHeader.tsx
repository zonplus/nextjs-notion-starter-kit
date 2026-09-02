'use client'
import type * as types from 'notion-types'
import cs from 'classnames'
import * as React from 'react'
import { useNotionContext } from 'react-notion-x'
import { MoonIcon } from '@/lib/icons/moon'
import { SunIcon } from '@/lib/icons/sun'
import { useDarkMode } from '@/lib/use-dark-mode'
import styles from './styles.module.css'

function ToggleThemeButton() {
  const { hasMounted, isDarkMode, toggleDarkMode } = useDarkMode()
  const onToggleTheme = React.useCallback(() => {
    toggleDarkMode()
  }, [toggleDarkMode])
  return (
    <div
      className={cs('breadcrumb', 'button', !hasMounted && styles.hidden)}
      onClick={onToggleTheme}
      title="Toggle theme"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6px 8px', cursor: 'pointer' }}
    >
      <span style={{ display: 'flex', width: '16px', height: '16px', alignItems: 'center', justifyContent: 'center', opacity: 0.85 }}>
        {hasMounted && isDarkMode ? <MoonIcon /> : <SunIcon />}
      </span>
    </div>
  )
}

export function NotionPageHeader({
  block
}: {
  block: types.CollectionViewPageBlock | types.PageBlock
}) {
  const { components } = useNotionContext()
  const [isRoot, setIsRoot] = React.useState(true)
  const navRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const updateRootState = () => {
      const path = window.location.pathname
      setIsRoot(!path || path === '/' || path === '')
    }

    updateRootState()
    window.addEventListener('popstate', updateRootState)
    return () => window.removeEventListener('popstate', updateRootState)
  }, [])

  // Applied after mount with setProperty so the !important priority sticks,
  // which a React style prop cannot express on its own.
  React.useEffect(() => {
    const el = navRef.current
    if (!el) return
    el.style.setProperty('max-width', 'var(--notion-max-width, 720px)', 'important')
    el.style.setProperty('margin-left', 'auto', 'important')
    el.style.setProperty('margin-right', 'auto', 'important')
    el.style.setProperty('padding-left', '0px', 'important')
    el.style.setProperty('padding-right', '0px', 'important')
  })

  return (
    <header className='notion-header' style={{ background: 'lime' }}>
      <div
        ref={navRef}
        className='notion-nav-header'
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          maxWidth: 'var(--notion-max-width, 720px)',
          margin: '0 auto',
          paddingLeft: 0,
          paddingRight: 0
        }}
      >
        {/* Left side: Home button only appears on nested pages */}
        <div style={{ display: 'flex', alignItems: 'center', minWidth: '40px', marginLeft: '-8px' }}>
          {!isRoot && (
            <components.PageLink
              href="/"
              className={cs(styles.navLink, 'breadcrumb', 'button')}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6px 8px' }}
              title="Home"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ opacity: 0.85 }}
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </components.PageLink>
          )}
        </div>
        {/* Right side: Only the dark mode toggle remains */}
        <div className='notion-nav-header-rhs breadcrumbs' style={{ display: 'flex', alignItems: 'center', gap: '8px', marginRight: '-8px' }}>
          <ToggleThemeButton />
        </div>
      </div>
    </header>
  )
}
