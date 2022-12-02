import React from "react";
import { socials } from "../../data/images";

import {
  FooterContainer,
  FooterSocials,
  FooterList,
  FooterLink,
  ListItem,
  LogoImg,
  SocialLinks,
  SocialHeading,
  FooterBlack,
  BlackCopy,
  BlackLegal,
  LegalLink,
  SocialFont,
  ExternalLink,
} from "./footerStyles";

import logoSvg from "../../images/logo/logoSvg.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSocials>
        <FooterList>
          <ListItem>
            <FooterLink to="#">
              <LogoImg src={logoSvg}></LogoImg>
            </FooterLink>

            <FooterLink to="#">Get Early Acess</FooterLink>

            <FooterLink to="#">Provide Feedback</FooterLink>
          </ListItem>
        </FooterList>

        <FooterList>
          <ListItem>
            <FooterLink to="/about">ABOUT </FooterLink>

            <FooterLink to="/contact">Contact Us</FooterLink>

            <FooterLink to="/imprint">Imprint</FooterLink>

            <FooterLink to="/fp">FP</FooterLink>
          </ListItem>
        </FooterList>

        <FooterList>
          <ListItem>
            <SocialHeading>Connect</SocialHeading>
          </ListItem>
          <SocialLinks>
            <ExternalLink
              rel="noopner"
              target={"_blank"}
              href="https://www.facebook.com/"
            >
              <SocialFont src={socials[0]}></SocialFont>
            </ExternalLink>
            <ExternalLink
              rel="noopner"
              target={"_blank"}
              href="https://www.twitter.com/"
            >
              <SocialFont src={socials[1]}></SocialFont>
            </ExternalLink>
            <ExternalLink
              rel="noopner"
              target={"_blank"}
              href="https://www.instagram.com/"
            >
              <SocialFont src={socials[2]}></SocialFont>
            </ExternalLink>
            <ExternalLink
              rel="noopner"
              target={"_blank"}
              href="https://www.linkedin.com/"
            >
              <SocialFont src={socials[3]}></SocialFont>
            </ExternalLink>
            <ExternalLink
              rel="noopner"
              target={"_blank"}
              href="https://www.pinterest.com/"
            >
              <SocialFont src={socials[4]}></SocialFont>
            </ExternalLink>
          </SocialLinks>
        </FooterList>
      </FooterSocials>

      <FooterBlack>
        <BlackCopy>Copyright © 2022</BlackCopy>
        <BlackLegal>
          <LegalLink to="#">Privacy Policy</LegalLink>
          <LegalLink to="#">Terms of Service</LegalLink>
          <LegalLink to="#">Cookies Policy</LegalLink>
        </BlackLegal>
      </FooterBlack>
    </FooterContainer>
  );
};
export default Footer;
