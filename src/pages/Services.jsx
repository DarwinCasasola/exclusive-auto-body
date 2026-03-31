import PageBanner from "../components/common/PageBanner";
import SectionTitle from "../components/common/SectionTitle";
import PrimaryButton from "../components/common/PrimaryButton";
import ServiceCard from "../components/services/ServiceCard";
import servicesData from "../data/servicesData";

function Services() {
  return (
    <>
      <PageBanner
        eyebrow="Exclusive Auto Body Services"
        title="Professional Auto Body Solutions"
        text="From collision repair to paint refinishing, we provide services focused on quality workmanship, dependable communication, and strong visual results."
      />

      <section className="services-page">
        <div className="page-container">
          <SectionTitle
            title="What We Offer"
            subtitle="Explore the core services designed to restore, repair, and improve your vehicle’s exterior."
          />

          <div className="services-page__grid">
            {servicesData.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="services-page-cta">
        <div className="page-container">
          <div className="services-page-cta__box">
            <h2>Need Help Choosing The Right Service?</h2>
            <p>
              Contact Exclusive Auto Body and we can help you understand the
              best next step for your vehicle.
            </p>
            <PrimaryButton text="Request Estimate" href="/contact" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;