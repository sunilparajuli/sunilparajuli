import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sunil Parajuli — Solution Architect & Health Informatics Specialist',
    short_name: 'Sunil Parajuli',
    description: 'Portfolio of Sunil Parajuli, Solution Architect and Social Protection Technologist building interoperable public health systems and digital public goods.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAF8F5',
    theme_color: '#1C2B27',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
