import React from 'react';

const Logo = ({ color }) => {
  return (
    <div>
        <h1 id="hero-header" style={{ color: color || '#f4ce14' }}>Little Lemon</h1>
        <h2 id="hero-subheading" style={{ color: color || 'hsl(150, 6%, 93%)' }}>Chicago</h2>
    </div>
  );
}

export default Logo;

