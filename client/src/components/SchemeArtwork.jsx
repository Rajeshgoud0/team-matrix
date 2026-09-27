import React from 'react';

const scenes = {
  Agriculture: {
    background: '#EAF6E9',
    drawing: <g>
      <circle cx="45" cy="17" r="7" fill="#F6C65B" />
      <path d="M0 39 Q17 25 33 39 T64 36 V64 H0Z" fill="#8DCB7A" />
      <path d="M0 48 Q18 35 34 48 T64 45 V64 H0Z" fill="#4D9A63" />
      <path d="M19 55V39m0 8q-7-1-8-8m8 13q7-1 8-8m13 11V37m0 8q-6-1-7-7m7 12q7-1 8-8" fill="none" stroke="#2D704A" strokeWidth="3" strokeLinecap="round" />
    </g>
  },
  Housing: {
    background: '#FFF1E6',
    drawing: <g>
      <path d="M10 31 32 13l22 18" fill="#D77455" stroke="#9A493B" strokeWidth="4" strokeLinejoin="round" />
      <path d="M16 30h32v25H16z" fill="#F7C889" />
      <path d="M27 40h10v15H27z" fill="#6E8C9A" />
      <path d="M20 35h6v6h-6zm18 0h6v6h-6z" fill="#91C9D5" />
    </g>
  },
  Health: {
    background: '#FDECEF',
    drawing: <g>
      <path d="M32 54S12 42 12 28c0-9 11-13 20-3 9-10 20-6 20 3 0 14-20 26-20 26Z" fill="#F08B9B" />
      <path d="M28 24h8v8h8v8h-8v8h-8v-8h-8v-8h8z" fill="#FFF" />
      <circle cx="48" cy="16" r="5" fill="#F6C65B" />
    </g>
  },
  Employment: {
    background: '#FFF3D8',
    drawing: <g>
      <path d="M14 34a18 18 0 0 1 36 0" fill="#E9A94A" stroke="#B8792D" strokeWidth="3" />
      <path d="M10 34h44v8H10z" rx="3" fill="#F3C85C" />
      <path d="M24 29v-5h16v5" fill="none" stroke="#B8792D" strokeWidth="3" />
      <path d="M22 48h20v7H22z" rx="3" fill="#658CA0" />
    </g>
  },
  Energy: {
    background: '#FFF7D9',
    drawing: <g>
      <circle cx="47" cy="17" r="8" fill="#F3BD4F" />
      <path d="m27 21-13 25h14l-3 16 25-31H35l5-10z" fill="#F0A93F" stroke="#C97D2B" strokeWidth="2" strokeLinejoin="round" />
    </g>
  },
  Banking: {
    background: '#E9F2FA',
    drawing: <g>
      <ellipse cx="32" cy="21" rx="19" ry="8" fill="#F5C957" stroke="#C39133" strokeWidth="2" />
      <path d="M13 21v8c0 4 9 8 19 8s19-4 19-8v-8" fill="#E9B747" stroke="#C39133" strokeWidth="2" />
      <path d="M13 29v8c0 4 9 8 19 8s19-4 19-8v-8" fill="#DDA63E" stroke="#C39133" strokeWidth="2" />
      <path d="M13 37v7c0 4 9 8 19 8s19-4 19-8v-7" fill="#F5C957" stroke="#C39133" strokeWidth="2" />
      <path d="M28 17h8m-4-4v16m-4-4h8" stroke="#8A6326" strokeWidth="2" strokeLinecap="round" />
    </g>
  },
  'Skill Development': {
    background: '#F0ECFF',
    drawing: <g>
      <path d="M8 23q12-5 24 2 12-7 24-2v29q-12-5-24 2-12-7-24-2z" fill="#FFF" stroke="#7867B2" strokeWidth="3" strokeLinejoin="round" />
      <path d="M32 25v29M14 31q7-2 13 1m-13 6q7-2 13 1m12-7q7-3 13-1m-13 7q7-3 13-1" fill="none" stroke="#A69AD3" strokeWidth="2" strokeLinecap="round" />
      <path d="m22 15 10-6 10 6-10 6z" fill="#F0C45B" />
      <path d="M39 16v7" stroke="#B28433" strokeWidth="2" />
    </g>
  },
  Business: {
    background: '#E8F5F1',
    drawing: <g>
      <path d="M13 28h38v28H13z" fill="#FFF" stroke="#548B79" strokeWidth="3" />
      <path d="M10 28 17 15h30l7 13z" fill="#F28E69" />
      <path d="M10 28h11v7H10zm11 0h11v7H21zm11 0h11v7H32zm11 0h10v7H43z" fill="#F4C85D" />
      <path d="M27 42h10v14H27z" fill="#81B8A4" />
    </g>
  },
  Pension: {
    background: '#FCEEE8',
    drawing: <g>
      <circle cx="26" cy="20" r="9" fill="#E8B38D" />
      <path d="M10 53q1-20 16-20t16 20z" fill="#7798B7" />
      <path d="M43 29c-7-6-15 3 0 14 15-11 7-20 0-14Z" fill="#E77D83" />
      <path d="M19 17q7-10 15 0" fill="none" stroke="#6A5149" strokeWidth="4" strokeLinecap="round" />
    </g>
  },
  Education: {
    background: '#EAF2FF',
    drawing: <g>
      <circle cx="32" cy="20" r="9" fill="#E8B38D" />
      <path d="M17 53q1-21 15-21t15 21z" fill="#6584BD" />
      <path d="m16 15 16-9 16 9-16 8z" fill="#4D6598" />
      <path d="M45 16v10" stroke="#D7A84A" strokeWidth="2" />
      <path d="M21 44q6-4 11 0 5-4 11 0v9q-6-4-11 0-5-4-11 0z" fill="#FFF" stroke="#E3B855" strokeWidth="2" />
    </g>
  },
  Technology: {
    background: '#E8F5F8',
    drawing: <g>
      <rect x="9" y="12" width="46" height="32" rx="4" fill="#526C98" />
      <rect x="13" y="16" width="38" height="24" rx="2" fill="#B9E5E8" />
      <path d="m24 25-5 4 5 4m16-8 5 4-5 4m-5-10-5 12" fill="none" stroke="#3A7180" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 50h54l-5 5H10z" fill="#71859F" />
    </g>
  },
  'Women & Children': {
    background: '#FFF0F4',
    drawing: <g>
      <circle cx="22" cy="22" r="8" fill="#DCA17E" />
      <circle cx="43" cy="25" r="7" fill="#E8B38D" />
      <path d="M8 53q1-20 14-20t14 20z" fill="#D8758B" />
      <path d="M34 53q1-17 9-17t13 17z" fill="#7A9BC4" />
      <path d="M16 16q7-8 13 0m10 3q5-7 10 0" fill="none" stroke="#55405B" strokeWidth="3" strokeLinecap="round" />
    </g>
  },
  Infrastructure: {
    background: '#EEF1F4',
    drawing: <g>
      <path d="M4 44h56v8H4z" fill="#59718A" />
      <path d="M9 44q4-27 23-27t23 27" fill="none" stroke="#E09A5F" strokeWidth="5" />
      <path d="M32 18v26M19 25v19m26-19v19" stroke="#7E91A5" strokeWidth="3" />
      <path d="M9 56h10m8 0h10m8 0h10" stroke="#F3C45B" strokeWidth="3" strokeLinecap="round" />
    </g>
  }
};

function SchemeArtwork({ scheme }) {
  const scene = scenes[scheme.category] || scenes.Education;

  return (
    <svg viewBox="0 0 64 64" className="block w-full h-full" aria-hidden="true" focusable="false">
      <rect width="64" height="64" rx="8" fill={scene.background} />
      {scene.drawing}
    </svg>
  );
}

export default SchemeArtwork;