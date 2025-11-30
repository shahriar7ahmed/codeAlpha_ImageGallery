import { useState, useEffect } from 'react'
import Gallery from './components/Gallery'
import Lightbox from './components/Lightbox'
import FilterButtons from './components/FilterButtons'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

const imageData = [
  { 
    id: 1,
    src: 'https://picsum.photos/id/10/1200/800', 
    thumbnail: 'https://picsum.photos/id/10/400/300',
    title: 'Mountain Landscape', 
    category: 'nature',
    description: 'Beautiful mountain range at sunset'
  },
  { 
    id: 2,
    src: 'https://picsum.photos/id/25/1200/800', 
    thumbnail: 'https://picsum.photos/id/25/400/300',
    title: 'Modern Architecture', 
    category: 'architecture',
    description: 'Contemporary building design'
  },
  { 
    id: 3,
    src: 'https://picsum.photos/id/45/1200/800', 
    thumbnail: 'https://picsum.photos/id/45/400/300',
    title: 'Urban Life', 
    category: 'people',
    description: 'City street photography'
  },
  { 
    id: 4,
    src: 'https://picsum.photos/id/55/1200/800', 
    thumbnail: 'https://picsum.photos/id/55/400/300',
    title: 'Forest Path', 
    category: 'nature',
    description: 'Peaceful forest trail'
  },
  { 
    id: 5,
    src: 'https://picsum.photos/id/65/1200/800', 
    thumbnail: 'https://picsum.photos/id/65/400/300',
    title: 'Glass Building', 
    category: 'architecture',
    description: 'Reflective modern structure'
  },
  { 
    id: 6,
    src: 'https://picsum.photos/id/75/1200/800', 
    thumbnail: 'https://picsum.photos/id/75/400/300',
    title: 'Portrait Session', 
    category: 'people',
    description: 'Professional portrait photography'
  },
  { 
    id: 7,
    src: 'https://picsum.photos/id/85/1200/800', 
    thumbnail: 'https://picsum.photos/id/85/400/300',
    title: 'Ocean Waves', 
    category: 'nature',
    description: 'Serene ocean view'
  },
  { 
    id: 8,
    src: 'https://picsum.photos/id/95/1200/800', 
    thumbnail: 'https://picsum.photos/id/95/400/300',
    title: 'Skyscraper', 
    category: 'architecture',
    description: 'Tall urban building'
  },
  { 
    id: 9,
    src: 'https://picsum.photos/id/105/1200/800', 
    thumbnail: 'https://picsum.photos/id/105/400/300',
    title: 'Adventure', 
    category: 'people',
    description: 'Outdoor adventure photography'
  },
  { 
    id: 10,
    src: 'https://picsum.photos/id/115/1200/800', 
    thumbnail: 'https://picsum.photos/id/115/400/300',
    title: 'Desert Dunes', 
    category: 'nature',
    description: 'Golden desert landscape'
  },
  { 
    id: 11,
    src: 'https://picsum.photos/id/125/1200/800', 
    thumbnail: 'https://picsum.photos/id/125/400/300',
    title: 'Historic Building', 
    category: 'architecture',
    description: 'Classic architectural design'
  },
  { 
    id: 12,
    src: 'https://picsum.photos/id/135/1200/800', 
    thumbnail: 'https://picsum.photos/id/135/400/300',
    title: 'Family Moment', 
    category: 'people',
    description: 'Candid family photography'
  },
  { 
    id: 13,
    src: 'https://picsum.photos/id/145/1200/800', 
    thumbnail: 'https://picsum.photos/id/145/400/300',
    title: 'Waterfall', 
    category: 'nature',
    description: 'Majestic waterfall scene'
  },
  { 
    id: 14,
    src: 'https://picsum.photos/id/155/1200/800', 
    thumbnail: 'https://picsum.photos/id/155/400/300',
    title: 'Bridge Architecture', 
    category: 'architecture',
    description: 'Modern bridge design'
  },
  { 
    id: 15,
    src: 'https://picsum.photos/id/165/1200/800', 
    thumbnail: 'https://picsum.photos/id/165/400/300',
    title: 'Street Art', 
    category: 'people',
    description: 'Urban culture and art'
  },
]

function App() {
  const [filter, setFilter] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)
  const [filteredImages, setFilteredImages] = useState(imageData)

  useEffect(() => {
    if (filter === 'all') {
      setFilteredImages(imageData)
    } else {
      setFilteredImages(imageData.filter(img => img.category === filter))
    }
  }, [filter])

  const handleImageClick = (image) => {
    setSelectedImage(image)
    document.body.style.overflow = 'hidden'
  }

  const handleCloseLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'auto'
  }

  const handleNext = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id)
    const nextIndex = (currentIndex + 1) % filteredImages.length
    setSelectedImage(filteredImages[nextIndex])
  }

  const handlePrev = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id)
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length
    setSelectedImage(filteredImages[prevIndex])
  }

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1 className="header-title">
            <span className="title-accent">Modern</span> Gallery
          </h1>
          <p className="header-subtitle">Discover beautiful moments captured in time</p>
        </div>
        <FilterButtons 
          filter={filter} 
          setFilter={setFilter}
          categories={['all', 'nature', 'architecture', 'people']}
        />
      </header>

      <main className="main-content">
        <Gallery 
          images={filteredImages} 
          onImageClick={handleImageClick}
        />
      </main>

      {selectedImage && (
        <Lightbox
          image={selectedImage}
          onClose={handleCloseLightbox}
          onNext={handleNext}
          onPrev={handlePrev}
          hasNext={filteredImages.length > 1}
          hasPrev={filteredImages.length > 1}
        />
      )}

      <ScrollToTop />

      <footer className="footer">
        <p>&copy; 2025 Modern Image Gallery. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App

