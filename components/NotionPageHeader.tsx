'use client'

import type * as types from 'notion-types'
import cs from 'classnames'
import * as React from 'react'
import { Breadcrumbs, Search, useNotionContext } from 'react-notion-x'

import { isSearchEnabled, navigationLinks } from '@/lib/config'
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
    >
      {hasMounted && isDarkMode ? <MoonIcon /> : <SunIcon />}
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
        {/* On homepage, omit title breadcrumbs completely */}
        {!isRoot ? <Breadcrumbs block={block} rootOnly={true} /> : <div style={{ width: '1px' }} />}

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
                  >
                    {link.title}
                  </components.Link>
                )
              }
            })
            .filter(Boolean)}

          <ToggleThemeButton />

          {/* Omit the search popup button on the homepage */}
          {!isRoot && isSearchEnabled && <Search block={block} title={null} />}
        </div>
      </div>
    </header>
  )
}
