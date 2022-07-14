import styled from "styled-components";
import { IntroImage } from "../../molecules/IntroImage";
import { IntroTitleBox } from "../../molecules/IntroTitleBox";

export function IntroSection() {
  const IntroSection = styled.section`
    width: 100%;
    height: 100%;
    max-height: 400px;
    display: flex;
    justify-content: space-between;
  `;

  return (
    <IntroSection>
      <IntroTitleBox />
      <IntroImage />
    </IntroSection>
  );
}
