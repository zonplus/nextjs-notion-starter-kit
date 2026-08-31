import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '3cdee6ae553b80c79e80e904ec1992ae',

  // if you want to restrict pages to a single notion workspace (optional)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'ZONplus Circles',
  domain: 'nextjs-notion-starter-kit-ochre-ten-27.vercel.app',
  author: 'JP Silva',

  // open graph metadata (optional)
  description: 'ZONplus Community Hub and Resources',

  // social usernames (set to null to remove side & footer social icons)
  twitter: null,
  github: null,
  linkedin: null,
  newsletter: null,
  youtube: null,

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
  navigationStyle: 'default'
})
