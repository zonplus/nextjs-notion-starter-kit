import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '3cdee6ae553b80c79e80e904ec1992ae',

  // if you want to restrict pages to a single notion workspace (optional)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'ZONplus Circles',
  domain: 'nextjs-notion-starter-kit-ochre-ten-27.vercel.app',
  author: '',

  // open graph metadata (optional)
  description: 'ZONplus Circles',

  // social usernames
  twitter: '',
  github: '',
  linkedin: '',
  newsletter: '',
  youtube: '',

  // default notion icon and cover images for site-wide consistency (optional)
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  pageUrlOverrides: {
    '/list-of-peers-and-projects-during-2023-2024': '3c8ee6ae553b8019a443ee5c5f71de31',
    '/list-of-peers-and-projects-during-2024-2025': '980ee6ae553b82d59ed8815f6ecc9704',
    '/list-of-peers-and-projects-during-2025-2026': '084ee6ae553b8277954701fe23853164',
    '/list-of-peers-and-projects-during-f26': '3cfee6ae553b8091b150d4d4df1810ca'
  },

  // navigation style
  navigationStyle: 'default',

  // persistent header navigation links (shows on landing page and all nested pages)
  navigationLinks: [
    {
      title: 'FreeFlarum',
      url: 'https://zonpluscircles.freeflarum.com'
    }
  ]
})
