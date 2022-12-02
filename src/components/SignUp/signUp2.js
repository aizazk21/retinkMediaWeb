import React from "react";
import {
  Sform,
  SformHeading,
  SformInput,
  SformButtons,
  SformButtonP,
  SformButtonB,
} from "./signUp2Styles";

const signUp2 = () => {
  return (
    <Sform action="submit">
      <div>
        <SformHeading>Sign Up for The BETA to See More </SformHeading>
        <SformInput placeholder="Name/Business Name" required />

        <SformInput placeholder="Email Address" required />
      </div>
      <SformButtons>
        <SformButtonP>Notify Me</SformButtonP>
        <SformButtonB>Sign Up as Freelance Partner</SformButtonB>
      </SformButtons>
    </Sform>
  );
};
export default signUp2;
