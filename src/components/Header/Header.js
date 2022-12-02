import {
  HeaderContainer,
  NavbarContainer,
  LogoDiv,
  LogoImg,
  Hero,
  HeroContainer,
  HeroLeft,
  HeroLeftHeading1,
  HeroLeftSpnDiv,
  HeroLeftAnimated,
  HeroLeftIntro,
  HeroRight,
  HeroRightAvatar,
} from "./HeaderStyle";
import logoSvg from "../../images/logo/logoSvg.svg";
import avatarSvg from "../../images/logo/avatarSvg.png";
import SignUp from "../SignUp/signUp";

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <HeaderContainer>
      <NavbarContainer>
        <LogoDiv>
          <Link to="/">
            <LogoImg src={logoSvg}></LogoImg>
          </Link>
        </LogoDiv>
      </NavbarContainer>

      <Hero>
        <HeroContainer>
          <HeroLeft>
            <HeroLeftHeading1>
              Get Advanced AI + Expert Created{" "}
              <HeroLeftSpnDiv>
                <HeroLeftAnimated>Logos</HeroLeftAnimated>
              </HeroLeftSpnDiv>
            </HeroLeftHeading1>
            <HeroLeftIntro>
              Boost your sales 10x faster with content customized by our unique
              partnership of human creativity and AI optimization.
            </HeroLeftIntro>
            <SignUp />
          </HeroLeft>

          <HeroRight>
            <HeroRightAvatar src={avatarSvg}></HeroRightAvatar>
          </HeroRight>
        </HeroContainer>
      </Hero>
    </HeaderContainer>
  );
};

export default Header;
