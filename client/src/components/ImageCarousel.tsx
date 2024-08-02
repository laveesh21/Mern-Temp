import React, { useState } from 'react';

interface CarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Define dimensions for images and container
  const imageWidth = 11; // Width of each image in rem units, converted to number for calculation
  const containerWidth = 44; // Width of the container in rem units, converted to number for calculation
  const imagesToShow = Math.floor(containerWidth / imageWidth); // Number of images to show at once

  // Functions to move to the Previous / Next set of images
  const prevSlide = () => {
    setCurrentImageIndex(prevIndex => {
      const newIndex = prevIndex === 0 ? images.length - 1 : prevIndex - 1;
      setCurrentIndex(Math.floor(newIndex / imagesToShow));
      return newIndex;
    });
  };

  const nextSlide = () => {
    setCurrentImageIndex(prevIndex => {
      const newIndex = prevIndex === images.length - 1 ? 0 : prevIndex + 1;
      setCurrentIndex(Math.floor(newIndex / imagesToShow));
      return newIndex;
    });
  };

  // Function to select image
  const selectImage = (index: number) => {
    setCurrentImageIndex(index);
    setCurrentIndex(Math.floor(index / imagesToShow));
  };

  // Calculate the width of the scroll indicator based on current index
  const scrollIndicatorWidth = `${((currentImageIndex + 1) / images.length) * 100}%`;

  return (
    <div>
      {/* Current Image */}
      <div className='w-full mb-2 h-96' style={{ backgroundImage: `url(${images[currentImageIndex]})`, backgroundSize: 'cover' }}></div>
      {/* Image Carousel Container */}
      <div className="overflow-hidden" style={{ width: `${containerWidth}rem` }}>
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * containerWidth}rem)`, width: `${images.length * imageWidth}rem` }}>
          {/* Render each image */}
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => selectImage(index)}
              className={`flex-shrink-0 cursor-pointer ${index === currentImageIndex ? 'border-2 border-white' : 'border-0'}`}
              style={{ width: `${imageWidth}rem`, height: '6rem', backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
          ))}
        </div>
      </div>

      {/* Bottom Scroll Buttons and Indicator */}
      <div className="flex items-center bg-gray-800" style={{ width: `${containerWidth}rem`, marginTop: '0.5rem' }}>
        {/* Previous Slide Button */}
        <button onClick={prevSlide} className="bg-green-600 h-max w-14 rounded-sm">&#10094;</button>
        {/* Scroll Indicator */}
        <div className="relative flex-1 mx-4">
          <div className="absolute inset-0 bg-gray-600 rounded-full" style={{ height: '0.25rem' }} />
          <div className="absolute inset-0 bg-gray-300 rounded-full" style={{ width: scrollIndicatorWidth, height: '0.25rem' }} />
        </div>
        {/* Next Slide Button */}
        <button onClick={nextSlide} className="bg-green-600 h-6 w-14 rounded-sm">&#10095;</button>
      </div>
    </div>
  );
};

export default ImageCarousel;

