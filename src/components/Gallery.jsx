import { useState, useEffect, useRef } from 'react'
import './Gallery.css'

const Gallery = ({ images, onImageClick }) => {
  const [loadedImages, setLoadedImages] = useState(new Set())
  const observerRef = useRef(null)

  useEffect(() => {
    // Intersection Observer for lazy loading and animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observerRef.current.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    const items = document.querySelectorAll('.gallery-item')
    items.forEach((item) => observerRef.current.observe(item))

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [images])

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => new Set([...prev, id]))
  }

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="gallery-item"
            style={{ animationDelay: `${index * 0.05}s` }}
            onClick={() => onImageClick(image)}
          >
            <div className="image-wrapper">
              {!loadedImages.has(image.id) && (
                <div className="image-skeleton">
                  <div className="skeleton-shimmer"></div>
                </div>
              )}
              <img
                src={image.thumbnail}
                alt={image.title}
                className={`gallery-image ${loadedImages.has(image.id) ? 'loaded' : ''}`}
                onLoad={() => handleImageLoad(image.id)}
                loading="lazy"
              />
            </div>
            <div className="image-overlay">
              <div className="overlay-content">
                <h3 className="image-title">{image.title}</h3>
                <p className="image-category">{image.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery

