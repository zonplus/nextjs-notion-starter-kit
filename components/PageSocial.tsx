'use client'
import * as React from 'react'

export function PageSocial({ tag = '' }: { tag?: string }) {
  const [isRoot, setIsRoot] = React.useState(true)

  React.useEffect(() => {
    const path = window.location.pathname
    if (path && path !== '/' && path !== '') {
      setIsRoot(false)
    } else {
      setIsRoot(true)
    }
  }, [])

  if (isRoot) {
    return null
  }

  return (
    <div className='page-social'>
      <h3>Discussions for #{tag}</h3>
      {/* Add your community board or widget implementation here */}
    </div>
  )
}
