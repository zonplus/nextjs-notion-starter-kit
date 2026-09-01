'use client'

import type * as types from 'notion-types'
import cs from 'classnames'
import * as React from 'react'
import { Breadcrumbs, useNotionContext } from 'react-notion-x'

import { navigationLinks } from '@/lib/config'
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
  const { components, mapPageUrl } = useNotionContext()

  const [isRoot, setIsRoot] = React.useState(true)

  React.useEffect(() => {
    const path = window.location.pathname
    if (path && path !== '/' && path !== '') {
      setIsRoot(false)
    } else {
      setIsRoot(true)
    }
  }, [])

  return (
    <header className='notion-header'>
      <div className='notion-nav-header'>
        {/* On nested pages, show the Home icon. On root, show a spacer. */}
        {!isRoot ? (
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
        ) : (
          <div style={{ width: '1px' }} />
        )}

        {/* Right-hand side navigation links & theme toggle styled consistently */}
        <div className='notion-nav-header-rhs breadcrumbs'>
          {navigationLinks
            ?.map((link, index) => {
              if (!link?.pageId && !link?.url) {
                return null
              }

              if (link.pageId) {
                return (
                  <components.PageLink
                    href={mapPageUrl(link.pageId)}
                    key={index}
                    className={cs(styles.navLink, 'breadcrumb', 'button')}
                  >
                    {link.title}
                  </components.PageLink>
                )
              } else {
                return (
                  <components.Link
                    href={link.url}
                    key={index}
                    className={cs(styles.navLink, 'breadcrumb', 'button')}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {link.title}
                  </components.Link>
                )
              }
            })
            .filter(Boolean)}

          <ToggleThemeButton />
        </div>
      </div>
    </header>
  )
}
