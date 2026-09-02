import * as React from 'react'
import * as config from '@/lib/config'
import { GitHubIcon } from '@/lib/icons/github'
import { LinkedInIcon } from '@/lib/icons/linkedin'
import { TwitterIcon } from '@/lib/icons/twitter'
import styles from './styles.module.css'

export function FooterImpl() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        Made with 😊
      </div>
      <div className={styles.settings}>
        {/* Dark mode toggle removed to prevent duplicates */}
      </div>
      <div className={styles.social}>
        {config.twitter && (
          
            className={styles.twitter}
            href={`https://x.com/${config.twitter}`}
            title={`X @${config.twitter}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <TwitterIcon />
          </a>
        )}
        {config.github && (
          
            className={styles.github}
            href={`https://github.com/${config.github}`}
            title={`GitHub @${config.github}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <GitHubIcon />
          </a>
        )}
        {config.linkedin && (
          
            className={styles.linkedin}
            href={`https://www.linkedin.com/in/${config.linkedin}`}
            title={`LinkedIn ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <LinkedInIcon />
          </a>
        )}
      </div>
    </footer>
  )
}

export const Footer = React.memo(FooterImpl)
