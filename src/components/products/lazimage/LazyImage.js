import { useState } from 'react';
import LazyLoad from 'react-lazy-load';

import './LazyImage.scss';

function LazyImage({ src, alt, width, height }) {
  const [loading, setLoading] = useState(true);
  const imgStyle = {
    width: `${+width}px`,
    height: `${+height}px`,
    objectFit: 'cover',
  };

  return (
    <LazyLoad
      width={+width}
      height={+height}
      debounce={false}
      offsetVertical={100}
    >
      <img
        className={loading ? ' loading' : ''}
        style={imgStyle}
        src={src}
        alt={alt}
        onLoad={() => setLoading(false)}
      />
    </LazyLoad>
  );
}

export default LazyImage;
