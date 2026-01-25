import React from 'react'
import './Gallery.css'

const Gallery = () => {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&q=80',
      title: 'Estádio Lotado',
      category: 'Atmosfera'
    },
    {
      url: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=800&q=80',
      title: 'Momento Decisivo',
      category: 'Ação'
    },
    {
      url: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800&q=80',
      title: 'Celebração',
      category: 'Vitória'
    },
    {
      url: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=800&q=80',
      title: 'Preparação',
      category: 'Bastidores'
    },
    {
      url: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&q=80',
      title: 'Torcida Apaixonada',
      category: 'Fãs'
    },
    {
      url: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800&q=80',
      title: 'Campo de Batalha',
      category: 'Estádio'
    }
  ]

  return (
    <section className="gallery">
      <div className="gallery-container">
        <div className="section-header">
          <h2 className="section-title">Galeria dos Playoffs</h2>
          <p className="section-subtitle">Momentos inesquecíveis da temporada</p>
        </div>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.url} alt={image.title} className="gallery-image" />
              <div className="gallery-overlay">
                <span className="gallery-category">{image.category}</span>
                <h3 className="gallery-title">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
