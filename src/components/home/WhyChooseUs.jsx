import SectionTitle from "../common/SectionTitle";

const reasons = [
  "Attention to detail on every repair",
  "Reliable communication throughout the process",
  "High-quality paint matching and refinishing",
  "Focused on professional results and customer trust",
];

function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="page-container">
        <SectionTitle
          title="Why Choose Exclusive Auto Body"
          subtitle="We combine quality workmanship, strong customer care, and a premium automotive finish."
        />

        <div className="why-choose-us__content">
          <div className="why-choose-us__text">
            <p>
              We understand that your vehicle matters. Our goal is to provide
              dependable service, clean repairs, and results that make your car
              look its best again.
            </p>

            <ul className="why-choose-us__list">
              {reasons.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
          </div>

          <div className="why-choose-us__box">
            <span>Quality</span>
            <span>Precision</span>
            <span>Finish</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;