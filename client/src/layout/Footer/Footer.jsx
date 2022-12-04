//icons
import { AiFillGithub } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";

//styles
import { Container } from "./Footer.styles";

import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  //no footer in error page
  if (location.pathname === "/404") {
    return;
  }
  return (
    <Container>
      <div className="footer__title">
        Made with <VscCode /> by Kiran Debnath.
      </div>
      <div className="footer__media">
        <a
          href="https://github.com/kirandebnath81"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/kiran-debnath-2299601bb/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://twitter.com/KiranDebnath20"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        &#169; 2022 Shopsy - All rights reserved.
      </div>
    </Container>
  );
};

export default Footer;
