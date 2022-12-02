import styled from "styled-components/macro";

export const UsageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding-top: 60px;
  width: 100%;
`;

export const UsageDiv = styled.div`
  @media (max-width: 1056px) {
    width: 80%;
    text-align: center;
  }
`;

export const UsageHeading = styled.div`
  text-align: center;
  color: #7e1cfe;
  font-size: 30px;
  line-height: 150%;
  font-weight: 700 !important;
`;
export const UsageText = styled.p`
  max-width: 90ch;
  font-size: 20px;
  padding-top: 5px;
`;
