import styled from "styled-components/macro";
import { keyframes } from "styled-components/macro";

export const HeaderContainer = styled.section`
  background: #7e1cfe0b;
`;

export const NavbarContainer = styled.div`
  padding: 0.75rem 1.25rem;
`;

export const LogoDiv = styled.div`
  width: 100%;
  height: 64px;
`;

export const LogoImg = styled.img`
  width: 130px;
  height: 30px;
`;

export const Hero = styled.div`
  width: 100%;
  height: 480px;
`;

export const HeroContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const HeroLeft = styled.div`
  @media (max-width: 1056px) {
    padding-left: 0rem;
    display: grid;
    width: 100%;
    justify-content: center;
    text-align: center;
  }
  padding-left: 2rem;
  align-items: center;
  display: grid;
  grid-template-rows: 60px 50px 40px 100px;
  row-gap: 25px;
  width: 70%;
`;
export const HeroLeftHeading1 = styled.h1`
  color: #323232;
  font-size: 38px;
  line-height: 100%;
  max-width: 100%;
  font-weight: 700 !important;
  @media (max-width: 1056px) {
    width: 100%;
    font-size: 35px;
  }
  @media (max-width: 645px) {
    width: 100%;
    font-size: 30px;
  }
`;

export const HeroLeftSpnDiv = styled.div`
  padding-top: 1rem;
`;
export const HeroLeftAnimated = styled.span`
  color: #7e1cfe;
`;
export const HeroLeftIntro = styled.p`
  padding-top: 2rem;
  font-size: 20px;
  max-width: 619px;
  font-weight: 400 !important;
  text-align: center;
  @media (max-width: 400px) {
    font-size: 1.1rem;
  }
`;

export const HeroRight = styled.div`
  @media (max-width: 1056px) {
    display: none;
  }
  padding-right: 2.5rem;
  transform: translateY(0%);
`;
const LogoMove = keyframes`
0%{
  transform: translateY(0%)  !important
  ;
}
60%{
   transform: translateY(-20%) 
 
}
100%{
  
  transform: translateY(0%) 
}

`;

export const HeroRightAvatar = styled.img`
  width: 100%;
  animation: ${LogoMove} 8s infinite;
`;
