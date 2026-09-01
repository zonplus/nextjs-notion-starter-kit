import React from 'react'
import Giscus from '@giscus/react'

export const PageSocial: React.FC = () => {
  return (
    <div style={{ marginTop: '4rem', width: '100%' }}>
      <Giscus
        id="comments"
        repo="zonplus/nextjs-notion-starter-kit"
        repoId="PASTE_YOUR_REPO_ID_HERE"
        category="General"
        categoryId="PASTE_YOUR_CATEGORY_ID_HERE"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang="en"
        loading="lazy"
      />
    </div>
  )
}

export default PageSocial
