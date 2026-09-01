import { siteConfig } from './lib/site-config'

export default siteConfig({
  rootNotionPageId: '3cdee6ae553b80c79e80e904ec1992ae',
  rootNotionSpaceId: null,

  name: 'ZONplus Circles',
  domain: 'nextjs-notion-starter-kit-ochre-ten-27.vercel.app',
  author: '',

  description: 'ZONplus Community Hub and Resources',

  twitter: '',
  github: '',
  linkedin: '',
  newsletter: '',
  youtube: '',

  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  isPreviewImageSupportEnabled: true,
  isRedisEnabled: false,
  pageUrlOverrides: null,
  navigationStyle: 'default',

  // Giscus configuration
  giscusRepo: 'zonplus/nextjs-notion-starter-kit',
  giscusRepoId: 'PASTE_YOUR_REPO_ID_HERE',
  giscusCategory: 'General',
  giscusCategoryId: 'PASTE_YOUR_CATEGORY_ID_HERE'
})
