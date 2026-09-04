import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Muhammed Sayed — Junior Front-End Developer',
    short_name: 'Muhammed Sayed',
    description:
      'Junior Front-End Developer and UI/UX Designer — React.js, Next.js, TypeScript, Tailwind CSS, Figma. Giza, Egypt. Projects: VEYRA, ORRA, Mira.',
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
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
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
