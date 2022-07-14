import styled from "styled-components";
import { MiniGallery } from "../components/molecules/MiniGallery";
import { IntroSection } from "../components/organisms/IntroSection";
import { SubIntroSection } from "../components/organisms/SubIntroSection";
import { TopSection } from "../components/organisms/TopSection";

export function InitialPage() {
  const Content = styled.div`
    max-width: 1366px;
    width: 100%;
    margin: 0 auto;
    padding: 16px;
  `;

  return (
    <div>
      <TopSection />
      <Content>
        <IntroSection />
        <SubIntroSection />
      </Content>
    </div>
  );
}
