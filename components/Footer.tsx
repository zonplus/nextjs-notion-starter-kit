import * as React from 'react'
import styles from './styles.module.css'

const footerStyle = {
  width: '100%',
  maxWidth: 'var(--notion-max-width, 720px)',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingTop: '8px',
  paddingBottom: '8px',
  paddingLeft: 'max(calc(2vw - 8px), 0px)',
  paddingRight: 'max(calc(2vw - 8px), 0px)'
}

const textStyle = { paddingLeft: '8px' }
const linkStyle = { display: 'flex', alignItems: 'center', padding: '6px 8px', color: 'var(--fg-color)' }

const IG = 'https://www.instagram.com/tmuzonplus/'

export const Footer = React.memo(function Footer() {
  return (
    <footer className={styles.footer} style={footerStyle}>
      <div className={styles.copyright} style={textStyle}>Made with 😊</div>
      <div className={styles.social}>
        <a href={IG} title='Instagram @tmuzonplus' target='_blank' rel='noopener noreferrer' style={linkStyle}>
          <svg width='16' height='16' viewBox='0 0 24 24' style={{ display: 'block', opacity: 0.85 }}>
            <rect x='2' y='2' width='20' height='20' rx='5' ry='5' fill='none' stroke='currentColor' strokeWidth='2' />
            <circle cx='12' cy='12' r='4' fill='none' stroke='currentColor' strokeWidth='2' />
            <circle cx='17.5' cy='6.5' r='1.2' fill='currentColor' />
          </svg>
        </a>
      </div>
    </footer>
  )
})
