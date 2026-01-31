import React, { useState, useEffect } from 'react';
import { ImageOff } from 'lucide-react';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  baseName: string; // The filename without extension (e.g., 'cherry-shoppe')
  folder?: string;
}

const EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp', 'svg'];

const SmartImage: React.FC<SmartImageProps> = ({ baseName, folder = '/images/', className, alt, ...props }) => {
  const [currentExtIndex, setCurrentExtIndex] = useState(0);
  const [error, setError] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  // Reset when baseName changes
  useEffect(() => {
    setCurrentExtIndex(0);
    setError(false);
    setImageSrc(`${folder}${baseName}.${EXTENSIONS[0]}`);
  }, [baseName, folder]);

  const handleError = () => {
    const nextIndex = currentExtIndex + 1;
    if (nextIndex < EXTENSIONS.length) {
      // Try next extension
      setCurrentExtIndex(nextIndex);
      setImageSrc(`${folder}${baseName}.${EXTENSIONS[nextIndex]}`);
    } else {
      // All extensions failed
      setError(true);
    }
  };

  if (error) {
    return (
      <div className={`flex flex-col items-center justify-center bg-gray-100 text-gray-400 ${className}`}>
        <ImageOff size={32} />
        <span className="text-xs mt-2">Img Not Found</span>
      </div>
    );
  }

  return (
    <img
      {...props}
      src={imageSrc || ''}
      alt={alt}
      className={className}
      onError={handleError}
    />
  );
};

export default SmartImage;
