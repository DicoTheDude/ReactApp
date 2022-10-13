import React from 'react';
import {FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa';
import {FooterLinksContainer, FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialIcons, SocialIconLink } from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialIcons>
              <SocialIconLink href ="//www.instagram.com/dicothedude" target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLink>
              <SocialIconLink href ="//www.github.com/dicothedude" target="_blank" aria-label="Github"><FaGithub /></SocialIconLink>
              <SocialIconLink href ="//www.linkedin.com/in/andrew-hanycz-3852a215b/" target="_blank" aria-label="Linkedin"><FaLinkedin /></SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;