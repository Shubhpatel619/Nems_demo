import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';

// Import images
import certificate from '../assets/certificate.jpg';
import faculty1 from '../assets/faculty1.jpg';
import faculty2 from '../assets/faculty2.jpg';
import liberary from '../assets/liberary.jpg';
import qualityEducation from '../assets/qualityEducation.jpg';
import smartClass from '../assets/smartClass.jpg';
import trophy from '../assets/trophy.jpg';

const images = [
  { src: certificate, alt: 'Certificate', category: 'Achievements' },
  { src: trophy, alt: 'Trophy', category: 'Achievements' },
  { src: liberary, alt: 'Library', category: 'Infrastructure' },
  { src: smartClass, alt: 'Smart Class', category: 'Infrastructure' },
  { src: qualityEducation, alt: 'Quality Education', category: 'Infrastructure' },
  { src: faculty1, alt: 'Faculty 1', category: 'Faculty' },
  { src: faculty2, alt: 'Faculty 2', category: 'Faculty' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <PageWrapper>
      <div className="container my-5">
        <h1 className="text-center mb-4">Gallery</h1>

        <div className="row g-4">
          {images.map((image, index) => (
            <div className="col-md-4" key={index} onClick={() => openModal(image)}>
              <div className="card h-100 shadow-sm border-0">
                <img src={image.src} className="card-img-top" alt={image.alt} style={{ cursor: 'pointer' }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.8)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="btn-close" onClick={closeModal}></button>
              </div>
              <div className="modal-body text-center">
                <img src={selectedImage.src} className="img-fluid" alt={selectedImage.alt} />
              </div>
            </div>
          </div>
        </div>
      )}
    </PageWrapper>
  );
}
