import React from 'react';

interface PlaceholderImageProps {
  width?: number;
  height?: number;
  text?: string;
  bgColor?: string;
  textColor?: string;
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  width = 400,
  height = 300,
  text = 'Placeholder Image',
  bgColor = '#D4A76A',
  textColor = '#ffffff',
}) => {
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: bgColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: textColor,
        fontFamily: 'sans-serif',
        fontSize: '1rem',
        textAlign: 'center',
        borderRadius: '0.5rem',
      }}
    >
      {text}
    </div>
  );
};

export default PlaceholderImage; 