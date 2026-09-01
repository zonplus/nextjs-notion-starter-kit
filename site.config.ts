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
  description: 'ZONplus Community Hub and Resources',

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
  pageUrlOverrides: null,

  // navigation style
  navigationStyle: 'default',

  // persistent header navigation links (shows on landing page and all nested pages)
  navigationLinks: [
    {
      title: 'FreeFlarum',
      url: 'https://your-community-url.freeflarum.com' // Replace with your actual FreeFlarum URL
    }
  ]
})
