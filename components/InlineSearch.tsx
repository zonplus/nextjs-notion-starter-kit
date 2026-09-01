'use client'
import * as React from 'react'

export function InlineSearch() {
  const [searchTerm, setSearchTerm] = React.useState('')

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchTerm(query)
    
    // Filters the Notion blocks on the page as you type
    const notionBlocks = document.querySelectorAll('.notion-collection-row, .notion-block')
    notionBlocks.forEach((block) => {
      const text = block.textContent?.toLowerCase() || ''
      if (query.trim() === '' || text.includes(query.toLowerCase())) {
        ;(block as HTMLElement).style.display = ''
      } else {
        ;(block as HTMLElement).style.display = 'none'
      }
    })
  }

  return (
    <div style={{ width: '100%', marginBottom: '24px', marginTop: '10px' }}>
      <input
        type="text"
        placeholder="🔍 Search circles, peers, projects..."
        value={searchTerm}
        onChange={handleSearch}
        style={{
          width: '100%',
          padding: '12px 16px',
          fontSize: '15px',
          borderRadius: '8px',
          border: '1px solid var(--fg-color-2, #e0e0e0)',
          backgroundColor: 'var(--bg-color, #ffffff)',
          color: 'var(--fg-color, #000000)',
          outline: 'none',
          boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
        }}
      />
    </div>
  )
}
