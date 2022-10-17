import React, { CSSProperties } from 'react';

const style: CSSProperties = {
  background: 'linear-gradient(90deg, rgba(155, 134, 216, 0.870107) 0.66%, rgba(155, 134, 216, 0.870107) 23.43%, rgba(96, 77, 151, 0.735434) 47.03%, rgba(49, 23, 124, 0.621424) 75.16%, rgba(114, 91, 181, 0.520833) 99.99%, rgba(13, 8, 29, 0) 100%)',
};

export const HeaderGradient: React.FC = () => (
  <div
    className="w-full h-2"
    style={style}
  />
);
