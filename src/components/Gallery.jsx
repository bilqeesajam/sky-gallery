import FilterBar from './FilterBar';
import './Styling/Gallery.css';
import { useEffect, useState } from 'react';

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('all');

  useEffect(() => {
    fetch('/assets/images.json')
      .then(res => res.json())
      .then(data => setImages(data))
      .catch(err => console.error('Error loading images:', err));
  }, []);

  const openLightbox = (imgObj, index) => {
    setSelectedImage({ src: `/assets/images/${imgObj.image}`, index });
  };

  const closeLightbox = () => setSelectedImage(null);

  const goToNext = (e) => {
    e.stopPropagation();
    if (selectedImage) {
      const nextIndex = (selectedImage.index + 1) % filteredImages.length;
      setSelectedImage({
        src: `/assets/images/${filteredImages[nextIndex].image}`,
        index: nextIndex
      });
    }
  };

  const goToPrev = (e) => {
    e.stopPropagation();
    if (selectedImage) {
      const prevIndex = (selectedImage.index - 1 + filteredImages.length) % filteredImages.length;
      setSelectedImage({
        src: `/assets/images/${filteredImages[prevIndex].image}`,
        index: prevIndex
      });
    }
  };

  // Close lightbox on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeLightbox();
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [selectedImage]);

  // Filter images based on selected tag
  const filteredImages = selectedFilter === 'all'
    ? images
    : images.filter(imgObj => imgObj.tags.includes(selectedFilter));

  return (
    <>
      <section id="gallery" className="gallery">
        <h2 className="gallery-title">Gallery</h2>
        <FilterBar selected={selectedFilter} onSelect={setSelectedFilter} />
        <br />
        <div className="gallery-grid">
          {filteredImages.map((imgObj, index) => (
            <img
              key={index}
              src={`/assets/images/${imgObj.image}`}
              alt={`Sky memory ${index}`}
              className="gallery-img"
              onClick={() => openLightbox(imgObj, index)}
            />
          ))}
        </div>
      </section>

      {/* Lightbox Overlay */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              &times;
            </button>
            <button className="lightbox-nav lightbox-prev" onClick={goToPrev}>
              &#10094;
            </button>
            <div className="lightbox-image-container">
              <img
                src={selectedImage.src}
                alt={`Sky memory ${selectedImage.index}`}
                className="lightbox-image"
              />
            </div>
            <button className="lightbox-nav lightbox-next" onClick={goToNext}>
              &#10095;
            </button>
          </div>
        </div>
      )}

    </>
  );
}
