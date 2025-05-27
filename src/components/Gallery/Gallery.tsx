import Image from 'next/image';
import { useState } from 'react';

import type { ImageList } from './GalleryList';
import { imagesList } from './GalleryList';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<ImageList | null>(null);

  const handleImageClick = (image: ImageList): void => {
    setSelectedImage(image);
  };

  const closeModal = (): void => {
    setSelectedImage(null);
  };

  return (
    <section className="py-20 bg-black" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-10">Галерея</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {imagesList.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 group"
              onClick={() => handleImageClick(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-lg">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl w-full mx-4">
            <button
              className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300 transition-colors"
              onClick={closeModal}
            >
              &times;
            </button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className="max-h-[80vh] w-full object-contain"
            />
            <p className="text-white text-center mt-6 text-xl">{selectedImage.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
