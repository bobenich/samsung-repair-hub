
import React from 'react';
import { cn } from '@/lib/utils';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
}

const Image = ({ className, fallback = "/placeholder.svg", alt = "", ...props }: ImageProps) => {
  const [src, setSrc] = React.useState(props.src);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setSrc(props.src);
    setError(false);
  }, [props.src]);

  const handleError = () => {
    if (!error) {
      setError(true);
      setSrc(fallback);
    }
  };

  return (
    <img
      {...props}
      className={cn("object-cover", className)}
      src={src}
      alt={alt}
      onError={handleError}
    />
  );
};

export default Image;
