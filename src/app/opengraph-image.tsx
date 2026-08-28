import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Sunil Parajuli — Solution Architect & Health Informatics Specialist';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#FAF8F5',
          padding: '60px 80px',
          fontFamily: 'sans-serif',
          border: '16px solid #1C2B27',
        }}
      >
        {/* Top Header / Branding */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                backgroundColor: '#1C2B27',
                color: '#FAF8F5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
                fontSize: '24px',
                letterSpacing: '-1px',
              }}
            >
              SP.
            </div>
            <div style={{ fontSize: '18px', fontWeight: 700, color: '#1C2B27', letterSpacing: '-0.5px' }}>
              SUNIL PARAJULI
            </div>
          </div>

          <div
            style={{
              padding: '6px 16px',
              backgroundColor: '#E05A36',
              color: '#FAF8F5',
              fontSize: '13px',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '2px',
            }}
          >
            Digital Public Goods · Nepal
          </div>
        </div>

        {/* Center Main Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '950px' }}>
          <div
            style={{
              fontSize: '64px',
              fontWeight: 900,
              color: '#1C2B27',
              lineHeight: 1.05,
              letterSpacing: '-2px',
            }}
          >
            Technology for <span style={{ color: '#E05A36' }}>systems</span> that serve people.
          </div>
          <div
            style={{
              fontSize: '24px',
              color: '#5C6E68',
              lineHeight: 1.4,
              fontWeight: 400,
            }}
          >
            Solution Architect · openIMIS Health Insurance · HL7 FHIR Interoperability · Social Protection AI
          </div>
        </div>

        {/* Bottom Tags / Metrics */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '2px solid #DDD8CD',
            paddingTop: '28px',
          }}
        >
          <div style={{ display: 'flex', gap: '24px', fontSize: '14px', fontWeight: 700, color: '#1C2B27', letterSpacing: '1px' }}>
            <span>OPENIMIS</span>
            <span>·</span>
            <span>HL7 FHIR</span>
            <span>·</span>
            <span>OPENCRVS</span>
            <span>·</span>
            <span>DCI APIS</span>
            <span>·</span>
            <span>PYTHON/DJANGO</span>
          </div>

          <div style={{ fontSize: '15px', fontWeight: 600, color: '#E05A36' }}>
            sunilparajuli.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
