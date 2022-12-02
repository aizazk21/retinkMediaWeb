import react from "react";
import {
  ExplainerSection,
  ExplainerSectionHeading,
  ExplainerSectionCont,
  ExplainerSectionContVid,
  ExplainerSectionVideo,
} from "./explainerStyles";

const Explainer = () => {
  return (
    <ExplainerSection>
      <ExplainerSectionHeading>What is RetinkContent?</ExplainerSectionHeading>
      <ExplainerSectionCont>
        <ExplainerSectionContVid>
          <ExplainerSectionVideo
            width="975"
            height="384"
            src="https://www.youtube.com/embed/u1wprFtkMLg"
            title="Retink Content. An AI supported platform to help small businesses create customized contents."
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></ExplainerSectionVideo>
        </ExplainerSectionContVid>
      </ExplainerSectionCont>
    </ExplainerSection>
  );
};

export default Explainer;
