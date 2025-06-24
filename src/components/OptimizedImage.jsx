import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * Enhanced OptimizedImage component for SEO-friendly images with lazy loading
 * Includes support for responsive images with srcset and sizes attributes
 * 
 * @param {Object} props - Component props
 * @param {string} props.src - Image source URL
 * @param {string} props.alt - Alt text for the image (required for SEO)
 * @param {string} props.className - CSS classes for the image
 * @param {number} props.width - Width of the image
 * @param {number} props.height - Height of the image
 * @param {boolean} props.priority - Whether to prioritize loading (no lazy loading)
 * @param {string} props.loading - Loading strategy ('lazy', 'eager')
 * @param {string} props.srcset - Comma-separated list of image URLs and their widths
 * @param {string} props.sizes - Media conditions for selecting image sizes
 * @param {string} props.fetchpriority - Fetch priority ('high', 'low', 'auto')
 * @param {string} props.decoding - Image decoding strategy ('async', 'sync', 'auto')
 * @param {string} props.title - Title attribute for the image (helps with SEO)
 * @param {string} props.caption - Caption for the image (used in structured data)
 */
const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  loading: loadingProp,
  srcset,
  sizes,
  fetchpriority,
  decoding = 'async',
  title,
  caption,
  ...rest
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(priority);
  
  // Determine loading strategy and fetch priority
  const loading = priority ? 'eager' : loadingProp || 'lazy';
  const imgFetchPriority = priority ? 'high' : fetchpriority || 'auto';
  
  useEffect(() => {
    // Skip intersection observer if priority is true
    if (priority) {
      return;
    }
    
    // Set up intersection observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '200px' } // Start loading when image is 200px from viewport
    );
    
    // Get the current image element
    const imgElement = document.getElementById(`img-${src.replace(/[^\w]/g, '-')}`);
    
    if (imgElement) {
      observer.observe(imgElement);
    }
    
    // Clean up observer on unmount
    return () => {
      if (imgElement) {
        observer.unobserve(imgElement);
      }
      observer.disconnect();
    };
  }, [src, priority]);
  
  // Handle image load event
  const handleLoad = () => {
    setIsLoaded(true);
  };
  
  // Generate a unique ID for the image based on src
  const imgId = `img-${src.replace(/[^\w]/g, '-')}`;
  
  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      {(isIntersecting || priority) && (
        <img
          id={imgId}
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          onLoad={handleLoad}
          className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          srcSet={srcset}
          sizes={sizes}
          fetchPriority={imgFetchPriority}
          decoding={decoding}
          title={title}
          {...rest}
        />
      )}
      
      {/* Add structured data for the image */}
      {isLoaded && (
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ImageObject',
            contentUrl: src,
            description: alt,
            name: title || alt,
            caption: caption || alt,
            width: width,
            height: height,
            representativeOfPage: priority
          })}
        </script>
      )}
    </div>
  );
};

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  priority: PropTypes.bool,
  loading: PropTypes.oneOf(['lazy', 'eager']),
  srcset: PropTypes.string,
  sizes: PropTypes.string,
  fetchpriority: PropTypes.oneOf(['high', 'low', 'auto']),
  decoding: PropTypes.oneOf(['async', 'sync', 'auto']),
  title: PropTypes.string,
  caption: PropTypes.string
};

export default OptimizedImage;
