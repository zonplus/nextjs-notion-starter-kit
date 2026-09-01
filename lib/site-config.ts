export interface NavigationLink {
  title: string
  pageId?: string
  url?: string
}

export interface SiteConfig {
  rootNotionPageId: string
  rootNotionSpaceId?: string | null
  name: string
  domain: string
  author: string
  description?: string
  twitter?: string
  github?: string
  linkedin?: string
  newsletter?: string
  youtube?: string
  defaultPageIcon?: string | null
  defaultPageCover?: string | null
  defaultPageCoverPosition?: number
  isPreviewImageSupportEnabled?: boolean
  isRedisEnabled?: boolean
  pageUrlOverrides?: Record<string, string> | null
  navigationStyle?: 'default' | 'custom'
  navigationLinks?: NavigationLink[]
}

export function siteConfig(config: SiteConfig): SiteConfig {
  return config
}

export default siteConfig({
  rootNotionPageId: '3cdee6ae553b80c79e80e904ec1992ae',
  rootNotionSpaceId: null,

  name: 'ZONplus Circles',
  domain: 'nextjs-notion-starter-kit-ochre-ten-27.vercel.app',
  author: '',

  description: 'ZONplus Circles',

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
  navigationStyle: 'default'
})
