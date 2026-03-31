function ServiceCard({ title, description }) {
    return (
      <article className="service-card">
        <div className="service-card__accent"></div>
        <h3>{title}</h3>
        <p>{description}</p>
      </article>
    );
  }
  
  export default ServiceCard;