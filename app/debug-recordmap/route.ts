import { NextResponse } from 'next/server'
import { getPageData } from '@/lib/get-page-data'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const pageId = new URL(request.url).searchParams.get('pageId')
  if (!pageId) {
    return NextResponse.json({ error: 'add ?pageId=...' }, { status: 400 })
  }

  const pageProps = (await getPageData(pageId)) as any
  const recordMap = pageProps.recordMap ?? pageProps

  const collections = Object.fromEntries(
    Object.entries(recordMap.collection ?? {}).map(([id, v]: any) => [
      id,
      { name: v.value?.name, format: v.value?.format, schema: Object.keys(v.value?.schema ?? {}) }
    ])
  )

  const blocks = Object.fromEntries(
    Object.entries(recordMap.block ?? {}).map(([id, v]: any) => [
      id,
      { type: v.value?.type, format: v.value?.format }
    ])
  )

  return NextResponse.json({ propKeys: Object.keys(pageProps), collections, blocks })
}
