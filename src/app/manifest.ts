import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'AXIOM — Software & Digital Product Studio',
    short_name: 'AXIOM',
    description:
      'AXIOM is a software and digital product studio that designs and builds modern digital products and experiences. Web Development, E-Commerce, Custom Software, Digital Product Design, Mobile Apps, API & Backend.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fcfcf9',
    theme_color: '#0b0b0c',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/favicon.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
