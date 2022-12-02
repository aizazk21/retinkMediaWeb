import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const FooterContainer = styled.section`
  margin-top: 100px;
  background-color: rgba(235, 235, 235, 1);
  color: rgba(19, 19, 19, 1);
`;

export const FooterSocials = styled.div`
  border-color: #e5e7eb;
  display: flex;
  margin: 0 6rem 0 6rem;
  width: 85%;

  @media (max-width: 1056px) {
    display: inline-block;

    flex-direction: row;
  }
`;

export const FooterList = styled.ul`
  padding-top: 5rem;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  padding-bottom: 1.25rem;
  row-gap: 2.5rem;
  width: 100%;

  list-style: none;
`;
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ExternalLink = styled.a`
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1rem;
  margin-right: 2rem;
  text-transform: uppercase;
  :hover {
    color: coral;
  }
`;

export const FooterLink = styled(Link)`
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1rem;
  margin-right: 2rem;
  text-transform: uppercase;
  :hover {
    color: coral;
  }
`;

export const LogoImg = styled.img`
  width: 150px;
  height: 40px;
`;

export const SocialHeading = styled.h2``;

export const SocialLinks = styled.li``;

export const FooterBlack = styled.section`
  padding: 2rem 4rem 0 4rem;
  height: 70px;

  background-color: rgba(19, 19, 19, 1);
`;

export const BlackCopy = styled.p`
  color: white;

  @media (max-width: 700px) {
    display: flex;
    justify-content: center;
  }
`;

export const BlackLegal = styled.p`
  display: flex;
  justify-content: end;
  gap: 1rem;
`;

export const LegalLink = styled(Link)`
  @media (max-width: 700px) {
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 0.9rem;
    padding-top: 0.51rem;
    width: 100%;
  }

  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 200;

  :hover {
    color: dodgerblue;
  }
`;

export const SocialFont = styled.img`
  padding-top: 1.5rem;
  width: 35px;
  height: 35px;
  :hover {
    transform: rotate(50deg);
  }
`;
