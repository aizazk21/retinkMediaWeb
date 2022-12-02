import styled from "styled-components/macro";

export const Sform = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 100px;
`;

export const SformHeading = styled.h4`
  text-align: center;
  padding-bottom: 20px;
  color: #7e1cfe;
  font-size: 30px;
  font-weight: 600 !important;
`;

export const SformInput = styled.input`
  @media (max-width: 1056px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
  }
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid #754de8;
  margin-top: 10px;
  padding: 15px;
  text-align: center;
  font-size: 1.5rem;
  width: 1000px;
  :focus {
    outline: none;
    border-color: red;
  }
`;

export const SformButtons = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SformButtonP = styled.button`
  :hover {
    transform: translateY(-5px) scale(1.005) translateZ(0);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.11), 0 4px 6px rgba(20, 33, 245, 0.48);
    transform: scale(-0.5) translateZ(0.5);

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
  line-height: 1.5em;
  transition: all 0.3s ease-in-out;
  width: 200px;
  border-radius: 1em;
  padding: 0.75em 1.5rem;
`;

export const SformButtonB = styled.button`
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
  line-height: 1.5em;
  width: 400px;

  border-radius: 1em;
  padding: 0.75em 1.5rem;
`;
