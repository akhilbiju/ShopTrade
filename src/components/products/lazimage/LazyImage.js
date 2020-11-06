import { useState } from 'react';
import './LazyImage.scss';
import LazyLoad from 'react-lazy-load';

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
