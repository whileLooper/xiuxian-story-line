import { Link } from 'gatsby';
import React from 'react';
import './style.scss';
import Github from '../../images/github.svg';

const Footer = ({ author, title }) => (
  <div className="footer">
    <div className="container">
      <a
        href="https://github.com/whileLooper/xiuxian-story-line"
        className="github-corner"
        aria-label="View source on GitHub"
      >
        <img className="play" src={Github} alt="" />
      </a>
    </div>
  </div>
);

export default Footer;
