import React from "react";
import {
  ServicesContainer,
  ServicesCard,
  ServicesImg,
  ServicesHeading,
  ServicesText,
} from "./servicesStyles";
import { cardData } from "../../data/data";

const Services = () => {
  return (
    <ServicesContainer>
      {cardData.map((card) => {
        return (
          <ServicesCard key={card.id}>
            <ServicesImg src={card.image}></ServicesImg>
            <ServicesHeading>{card.Title}</ServicesHeading>
            <ServicesText>{card.Text}</ServicesText>
          </ServicesCard>
        );
      })}
    </ServicesContainer>
  );
};

export default Services;
