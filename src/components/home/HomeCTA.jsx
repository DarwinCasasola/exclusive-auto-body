import PrimaryButton from "../common/PrimaryButton";

function HomeCTA() {
  return (
    <section className="home-cta">
      <div className="page-container">
        <div className="home-cta__box">
          <h2>Need Auto Body Work You Can Count On?</h2>
          <p>
            Contact Exclusive Auto Body today to ask questions, request an
            estimate, or schedule service.
          </p>
          <PrimaryButton text="Contact Us" href="/contact" />
        </div>
      </div>
    </section>
  );
}

export default HomeCTA;