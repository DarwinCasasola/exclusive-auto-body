function PageBanner({ eyebrow, title, text }) {
    return (
      <section className="page-banner">
        <div className="page-container">
          {eyebrow && <p className="page-banner__eyebrow">{eyebrow}</p>}
          <h1>{title}</h1>
          {text && <p className="page-banner__text">{text}</p>}
        </div>
      </section>
    );
  }
  
  export default PageBanner;