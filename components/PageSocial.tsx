'use client'

import React from 'react'

interface PageSocialProps {
  forumUrl?: string
  tag?: string
}

export const PageSocial: React.FC<PageSocialProps> = ({
  forumUrl = 'https://zonpluscircles.freeflarum.com/',
  tag
}) => {
  // Optional: If you want to append the tag to the forum URL or handle it:
  // const targetUrl = tag ? `${forumUrl}?tag=${tag}` : forumUrl

  return (
    <div style={{ width: '100%', marginTop: '2rem', minHeight: '700px' }}>
      <iframe
        src={forumUrl}
        style={{
          width: '100%',
          height: '750px',
          border: 'none',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
        }}
        title="ZONplus Circles Forum"
        allow="camera; microphone; clipboard-write; encrypted-media"
      />
    </div>
  )
}

export default PageSocial
