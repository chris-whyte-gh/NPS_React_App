const Footer = ({title, department}) => {
  return (
    <footer>
      <p>
        <a
          href="https://www.nps.gov/index.htm"
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
        <p>{department}</p>
      </p>
    </footer>
  );
};

export default Footer;
