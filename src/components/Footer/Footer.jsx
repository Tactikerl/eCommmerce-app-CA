const Footer = (props) => {
  return (
    <footer>
      <span>
        {props.socials} - {props.contact} - {props.trademark}
      </span>
    </footer>
  );
};

export default Footer;
