import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Team from "../components/Team";
import TeamDrawing from "../components/TeamDrawing";
import Donation from "../components/Donation"

const About = () => {
  return (
    <Layout>
      {/* <Header>
        <h2>About Us</h2>
      </Header> */}
      <TeamDrawing />
      <Team />
      <Donation />
    </Layout>
  );
}

export default About;