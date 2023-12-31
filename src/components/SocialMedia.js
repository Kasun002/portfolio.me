import React from "react";
import {
  AiFillGithub,
  AiFillPhone,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <ul className="home-about-social-links">
      <li className="social-icons">
        <a
          href="https://github.com/Kasun002"
          target="_blank"
          rel="noreferrer"
          className="icon-colour  home-social-icons"
        >
          <AiFillGithub className="social-icon" />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="https://www.linkedin.com/in/kasun-lakmal-abaywardana/"
          target="_blank"
          rel="noreferrer"
          className="icon-colour  home-social-icons"
        >
          <FaLinkedinIn className="social-icon" />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="email:abaywardanakasun@gmail.com"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          <MdEmail className="social-icon" />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="tel:+6581503134"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          <AiFillPhone className="social-icon" />
        </a>
      </li>
    </ul>
  );
}
export default SocialMedia;
