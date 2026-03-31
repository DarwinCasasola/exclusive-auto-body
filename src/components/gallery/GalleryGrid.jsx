import galleryData from "../../data/galleryData";

function GalleryGrid() {
  return (
    <section className="gallery-grid-section">
      <div className="page-container">
        <div className="gallery-grid">
          {galleryData.map((item) => (
            <article key={item.id} className="gallery-card">
              <div className="gallery-card__image-wrapper">
                <img src={item.image} alt={item.title} className="gallery-card__image" />
              </div>

              <div className="gallery-card__content">
                <span className="gallery-card__category">{item.category}</span>
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GalleryGrid;