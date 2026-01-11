import { NextResponse } from 'next/server'

const BASE_URL =
  'https://api.mapbox.com/search/searchbox/v1/suggest'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const searchText = searchParams.get('q')

  if (!searchText) {
    return NextResponse.json({ suggestions: [] })
  }

  const sessionToken = crypto.randomUUID() // ✅ REQUIRED

  const res = await fetch(
    `${BASE_URL}?q=${encodeURIComponent(searchText)}&language=en&limit=6&country=IN&session_token=${sessionToken}&access_token=${process.env.MAPBOX_ACCESS_TOKEN}`
  )

  const data = await res.json()
  return NextResponse.json(data)
}
