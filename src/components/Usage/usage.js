import React from "react";
import {
  UsageContainer,
  UsageDiv,
  UsageHeading,
  UsageText,
} from "./usageStyles";

const Usage = () => {
  return (
    <UsageContainer>
      <UsageDiv>
        <UsageHeading>Transform Your Creation Process</UsageHeading>
        <UsageText>
          With a new approach to ordering content, you can now stop juggling
          multiple documents and meetings and start publishing content faster
          and on demand.
        </UsageText>
      </UsageDiv>
      <UsageDiv>
        <UsageHeading>
          Activate Your Business Growth With RetinkContent
        </UsageHeading>
        <UsageText>
          Save time and maintain your brand identity within your budget range
          within your budget range and access multiple content services like:
        </UsageText>
      </UsageDiv>
    </UsageContainer>
  );
};

export default Usage;
