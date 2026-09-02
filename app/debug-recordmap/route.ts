import { NextResponse } from 'next/server'
import { getPageData } from '@/lib/get-page-data'

export const dynamic = 'force-dynamic'

const unwrap = (v: any) => v?.value?.value ?? v?.value ?? v

export async function GET(request: Request) {
  const url = new URL(request.url)
  const pageId = url.searchParams.get('pageId')
  const mode = url.searchParams.get('mode') ?? 'scan'
  if (!pageId) {
    return NextResponse.json({ error: 'add ?pageId=...' }, { status: 400 })
  }

  const pageProps = (await getPageData(pageId)) as any
  const recordMap = pageProps.recordMap

  if (mode === 'raw') {
    return NextResponse.json({
      collection: recordMap.collection,
      block: recordMap.block
    })
  }

  const hits: Record<string, any> = {}
  const walk = (node: any, path: string) => {
    if (!node || typeof node !== 'object') return
    for (const [k, v] of Object.entries(node)) {
      if (/layout|pinned|panel|section|module|group/i.test(k)) {
        hits[`${path}.${k}`] = v
      }
      walk(v, `${path}.${k}`)
    }
  }
  walk(recordMap.collection, 'collection')
  walk(recordMap.block, 'block')

  const collections = Object.fromEntries(
    Object.entries(recordMap.collection ?? {}).map(([id, v]: any) => {
      const c = unwrap(v)
      return [id, { name: c?.name, formatKeys: Object.keys(c?.format ?? {}), schemaCount: Object.keys(c?.schema ?? {}).length }]
    })
  )

  return NextResponse.json({ collections, hits })
}
