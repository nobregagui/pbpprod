// components/PhotoGallery.tsx
import React from 'react';

const PhotoGallery: React.FC<any> = (props) => {
  // Lista de URLs das imagens


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {props.photos.map((photo: any, index: number) => (
        <div key={index} className="relative overflow-hidden group">
          <img
            src={photo}
            alt={`Gallery photo ${index + 1}`}
            className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
