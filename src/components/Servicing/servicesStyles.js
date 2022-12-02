import styled from "styled-components/macro";

export const ServicesContainer = styled.div`
  display: flex;
  margin-top: 100px;
  gap: 3rem;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  /* align-items: stretch;
  margin-inline: auto; */
`;

export const ServicesCard = styled.div`
  box-shadow: 1px 11px 18px 6px rgba(50, 50, 104, 0.75);
  -webkit-box-shadow: 1px 11px 18px 6px rgba(50, 50, 104, 0.75);
  -moz-box-shadow: 1px 11px 18px 6px rgba(50, 50, 104, 0.75);
  align-items: center;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  width: 250px;
  padding: 1.5rem;
  transition: all 0.8s ease-out;
  :hover {
    transform: translateY(-5px) scale(1.005) translateZ(0);
    box-shadow: 0 24px 36px rgba(0, 0, 0, 0.11),
      0 24px 46px rgba(20, 233, 255, 0.48);
    transform: scale(1) translateZ(1);
    background: #7e1cfe0b;
    border-radius: 15%;
    border: 1px solid blue;
    transition: all 0.8s ease-out;
  }
`;
export const ServicesImg = styled.img`
  width: 5rem;
  height: auto;
  max-width: 100%;
`;
export const ServicesHeading = styled.h2`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 700;
  max-width: 30ch;
`;
export const ServicesText = styled.div`
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  max-width: 25ch;
`;
