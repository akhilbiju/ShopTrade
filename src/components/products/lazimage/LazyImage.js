import { useState } from 'react';
import './LazyImage.scss';
import LazyLoad from 'react-lazy-load';

function LazyImage({ src, alt }) {
  const [loading, setLoading] = useState(true);

  return (
    <LazyLoad width={300} height={400} debounce={false} offsetVertical={100}>
      <img
        className={'lazy-image' + (loading ? ' loading' : '')}
        src={src}
        alt={alt}
        onLoad={() => setLoading(false)}
      />
    </LazyLoad>
  );
}

export default LazyImage;
