import styled from "styled-components";
import { MiniGallery } from "../components/molecules/MiniGallery";
import { SubIntro } from "../components/organisms/SubIntro";
import { Intro } from "../components/organisms/Intro";
import { Header } from "../components/organisms/Header";
import React from "react";
import { Artists } from "../components/organisms/Artists/Index";
import { Footer } from "../components/organisms/Footer";

export function InitialPage() {
  const Content = styled.div`
    max-width: 1366px;
    width: 100%;
    margin: 0 auto;
    padding: 16px;
  `;

  return (
    <div>
      <Header />
      <Content>
        <Intro />
        <SubIntro />
        <Artists />
      </Content>
      <Footer />
    </div>
  );
}
