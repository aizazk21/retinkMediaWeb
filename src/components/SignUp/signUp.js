import React from "react";
import {
  Sform,
  SformHeading,
  SformInput,
  SformInputSpn,
  SformButtonP,
  SformButtonS,
} from "./signUpStyle";

const SignUp = () => {
  return (
    <Sform action="submit">
      <div>
        <SformHeading>Sign Up for The BETA!</SformHeading>
        <SformInput placeholder="Name/Business Name" required />
        <SformInputSpn>would like a beta invite to</SformInputSpn>
        <SformInput placeholder="Email Address" required />
        <SformInputSpn>when it's ready!</SformInputSpn>
      </div>

      <SformButtonP>Notify Me</SformButtonP>
      <SformButtonS>Sign Up as Freelance Partner</SformButtonS>
    </Sform>
  );
};
export default SignUp;
