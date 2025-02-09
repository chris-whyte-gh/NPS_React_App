import "./Footer.css";
const Footer = ({ title, department }) => {
  return (
    <footer>
      <a
        href="https://www.nps.gov/index.htm"
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
      <p>{department}</p>
    </footer>
  );
};

export default Footer;
