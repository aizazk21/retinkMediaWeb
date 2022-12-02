import styled from "styled-components/macro";

export const BlogsContainer = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 60px;
  gap: 40px;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export const BlogsCard = styled.div`
  width: 400px;

  box-shadow: 1px 11px 18px 6px rgba(50, 50, 104, 0.75);
  -webkit-box-shadow: 1px 11px 18px 6px rgba(50, 50, 104, 0.75);
  -moz-box-shadow: 1px 11px 18px 6px rgba(50, 50, 104, 0.75);

  transition: all 1s ease-out;
  padding-bottom: 10px;
  :hover {
    transform: translateY(5px) scale(1.007) translateZ(0);
    box-shadow: 0 24px 36px rgba(0, 0, 0, 0.11),
      0 24px 46px rgba(20, 33, 235, 0.48);
    border-radius: 10%;

    background: #7e1cfe0b;

    transition: all 1s ease-out;
  }
`;
export const BlogsImg = styled.img`
  border-radius: 2rem;
  transition: all 1s ease-out;
  :hover {
    border-radius: 2rem;
    transition: all 1s ease-out;
  }
  width: 100%;
`;
export const BlogsHeading = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  padding-top: 0.2rem;
  padding-left: 1.2rem;
  width: 100%;
`;
export const BlogsText = styled.p`
  padding-top: 0.6rem;
  padding-left: 1.2rem;
  font-size: 1rem;
  font-weight: 400;
  max-width: 35ch;
`;
