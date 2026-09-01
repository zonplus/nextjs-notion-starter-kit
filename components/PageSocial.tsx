'use client'
import * as React from 'react'

export function PageSocial({ tag }: { tag: string }) {
  const [isRoot, setIsRoot] = React.useState(true)

  React.useEffect(() => {
    // If the window pathname is just '/' or empty, we are on the homepage
    const path = window.location.pathname
    if (path && path !== '/' && path !== '') {
      setIsRoot(false)
    } else {
      setIsRoot(true)
    }
  }, [])

  // If we are on the root homepage, render nothing at all
  if (isRoot) {
    return null
  }

  return (
    // ... keep your existing return/JSX layout for PageSocial here ...
  )
}
