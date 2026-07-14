import { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import noImage from '@/assets/images/no-image.png';

function Image({ src, alt, className, fallback: customFallback = noImage, ...props }, ref) {
  const [fallback, setFallback] = useState('');

  const handleError = () => {
    setFallback(customFallback);
  };

  return (
    <img
      className={className}
      ref={ref}
      src={fallback || src}
      alt={alt}
      {...props}
      onError={handleError}
    />
  );
}

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  fallback: PropTypes.string,
};

export default forwardRef(Image);
