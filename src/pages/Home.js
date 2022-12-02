import React from "react";
import Blogs from "../components/Blogs/blogs";
import Explainer from "../components/Explainer/explainer";
import Header from "../components/Header/Header";
import Services from "../components/Servicing/services";
import Usage from "../components/Usage/usage";
import SignUp2 from "../components/SignUp/signUp2";
import Footer from "../components/Footer/footer";

const Home = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Header></Header>
      <Explainer></Explainer>
      <Services></Services>
      <Usage></Usage>
      <Blogs></Blogs>
      <SignUp2></SignUp2>
      <Footer></Footer>
    </div>
  );
};

export default Home;
