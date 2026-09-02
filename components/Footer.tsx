import * as React from 'react'
import styles from './styles.module.css'

const footerStyle = {
  width: '100%',
  maxWidth: 'var(--notion-max-width, 720px)',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: 'max(calc(2vw - 8px), 0px)',
  paddingRight: 'max(calc(2vw - 8px), 0px)'
}

const copyrightStyle = { paddingLeft: '8px' }

const linkStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '6px 8px',
  color: 'inherit'
}

const iconStyle = { opacity: 0.85 }

export function FooterImpl() {
  return (
    <footer className={styles.footer} style={footerStyle}>
      <div className={styles.copyright} style={copyrightStyle}>Made with 😊</div>
      <div className={styles.social}>
        <a href='https://www.instagram.com/tmuzonplus/' title='Instagram @tmuzonplus' target='_blank' rel='noopener noreferrer' style={linkStyle}>
          <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' style={iconStyle}>
            <rect x='2' y='2' width='20' height='20' rx='5' ry='5' />
            <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
            <line x1='17.5' y1='6.5' x2='17.51' y2='6.5' />
          </svg>
        </a>
      </div>
