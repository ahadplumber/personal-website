import { ImageResponse } from 'next/og'
import * as React from 'react'

export const runtime = 'edge'
export const alt = 'Ahad Plumber'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#001B3E',
          fontSize: 128,
          fontWeight: 600,
        }}
      >
        A
      </div>
    ),
    {
      ...size,
    }
  )
} 