function PrimaryButton({ text, href = "#", target = "_self" }) {
    return (
      <a className="primary-button" href={href} target={target} rel="noreferrer">
        {text}
      </a>
    );
  }
  
  export default PrimaryButton;