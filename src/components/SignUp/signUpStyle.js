import styled from "styled-components/macro";

export const Sform = styled.form`
  max-width: 100%;
  margin-top: 16rem;
`;

export const SformHeading = styled.h4`
  color: #7e1cfe;
  font-size: 20px;
  font-weight: 600 !important;
`;

export const SformInput = styled.input`
  :focus {
    outline: none;
  }

  background: #7e1cfe00;
  font-style: italic;
  border: none;
  margin-top: 1rem;
  border-bottom: 1px solid #000;
  color: #7e1cfe;
  display: inline-block;
  text-align: center;
  width: 200px;
  font-size: 100%;
`;

export const SformInputSpn = styled.span`
  line-height: 2rem;
`;

export const SformButtonP = styled.button`
  :hover {
    transform: translateY(2px) scale(1.005) translateZ(0);
    box-shadow: 0 22px 26px rgba(0, 0, 0, 0.11),
      0 24px 26px rgba(20, 33, 245, 0.48);
    transform: scale(0.5) translateZ(0.5);
    border: 1px solid blue;
    transform: scale(1.02);
    transition: all 0.5s ease-out;
  }
  transition: all 0.5s ease-out;
  background: #7e1cfe;
  border: none;
  color: #fff;
  display: inline-block;
  font-weight: 500;
  margin: 20px 25px 10px 0;
  cursor: pointer;
  font-size: 1.25em;
  line-height: 1.2em;
  transition: all 0.3s ease-in-out;
  width: auto;
  border-radius: 1em;
  padding: 0.75em 1.5rem;
  :hover {
    transform: scale(1.05);
  }
`;

export const SformButtonS = styled.button`
  :hover {
    transform: translateY(-2px) scale(1.005) translateZ(0);
    box-shadow: 0 24px 36px rgba(0, 0, 0, 0.11),
      0 24px 46px rgba(20, 33, 245, 0.48);
    transform: scale(0.5) translateZ(0.5);
    border: 1px solid blue;
    transform: scale(1.02);
    transition: all 0.5s ease-out;
  }
  transition: all 0.5s ease-out;
  background: transparent;
  border: 1px solid #7e1cfe;
  color: #7e1cfe;
  display: inline-block;
  font-weight: 300;
  align-items: center;
  cursor: pointer;
  font-size: 1.25em;
  line-height: 1.2em;

  transition: all 0.3s ease-in-out;
  width: auto;
  border-radius: 1em;
  padding: 0.75em 1.5rem;
  :hover {
    transform: scale(1.05);
  }
`;
