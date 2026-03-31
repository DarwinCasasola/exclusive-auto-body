import PrimaryButton from "../common/PrimaryButton";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__overlay">
        <div className="hero__content">
          <p className="hero__eyebrow">Exclusive Auto Body</p>
          <h1>Precision Auto Body Repair With a Finish you can Trust</h1>
          <p className="hero__text">
            From collision repair to paint refinishing, we bring vehicles back
            to life with craftsmanship, care, and attention to detail.
          </p>

          <div className="hero__buttons">
            <PrimaryButton text="Request Estimate" href="/contact" />
            <PrimaryButton text="View Services" href="/services" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;