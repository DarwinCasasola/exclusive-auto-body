import SectionTitle from "../common/SectionTitle";

const previewServices = [
  {
    title: "Collision Repair",
    text: "Complete repair solutions to restore your vehicle after accidents and body damage.",
  },
  {
    title: "Paint & Refinishing",
    text: "Professional color matching and paintwork for a clean, seamless finish.",
  },
  {
    title: "Dent & Panel Repair",
    text: "Smooth out dents, damage, and imperfections with precise body restoration.",
  },
];

function ServicesPreview() {
  return (
    <section className="services-preview">
      <div className="page-container">
        <SectionTitle
          title="Our Core Services"
          subtitle="High-quality repairs and refinishing designed to bring your vehicle back to its best condition."
        />

        <div className="services-preview__grid">
          {previewServices.map((service) => (
            <article key={service.title} className="service-preview-card">
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesPreview;