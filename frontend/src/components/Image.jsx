import React from 'react';

const Image = ({ src, alt }) => {
  const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 });

  const handleImageLoad = (event) => {
    const { width, height } = event.target;
    setDimensions({ width, height });
  };

  const getStyles = () => {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const aspectRatio = dimensions.width / dimensions.height;
    const imageWidth = windowHeight * aspectRatio;
    const imageHeight = windowWidth / aspectRatio;

    if (imageWidth > windowWidth) {
      return { height: '100vh', width: 'auto' };
    } else {
      return { height: 'auto', width: '100vw' };
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
      }}
    >
      <img src={src} alt={alt} style={getStyles()} onLoad={handleImageLoad} />
    </div>
  );
};

export default Image;
