import React from 'react';
import { HeartHandshake } from 'lucide-react';

export function VitalisLogo({ variant = 'default' }: { variant?: 'default' | 'light' }) {
  const isLight = variant === 'light';
  return (
    <div className="brand-logo">
      <div 
        className="brand-icon-box"
        style={{
          background: isLight ? 'rgba(255, 255, 255, 0.12)' : 'linear-gradient(135deg, #065f46 0%, #022c22 100%)',
          color: isLight ? '#f59e0b' : '#ffffff'
        }}
      >
        <HeartHandshake size={22} />
      </div>
      <div>
        <div 
          className="brand-name"
          style={{ color: isLight ? '#ffffff' : 'var(--text-heading)' }}
        >
          VITALIS <span>FAMILY</span>
        </div>
        <div 
          className="brand-sub"
          style={{ color: isLight ? '#a7f3d0' : 'var(--text-muted)' }}
        >
          Integrative Health Polyclinic
        </div>
      </div>
    </div>
  );
}
