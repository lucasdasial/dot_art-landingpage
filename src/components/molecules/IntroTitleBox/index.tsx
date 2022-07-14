import styled from "styled-components";
import { Button } from "../../atoms/Button";
import { IntroStatusGroup } from "../../molecules/IntroStatusGroup";

export function IntroTitleBox() {
  const IntroTitleBox = styled.div`
    max-width: 600px;
    width: 100%;
    height: auto;
  `;

  const IntroTitle = styled.h1`
    font-size: 3rem;
    line-height: 67.5px;
    margin-bottom: 16px;
  `;

  const IntroSubTitle = styled.p`
    font-size: 1.5rem;
    color: var(--grey);
    margin-bottom: 32px;
  `;
  return (
    <IntroTitleBox
      data-aos="fade-up"
      data-aos-delay="250"
      data-aos-duration="1000"
    >
      <IntroTitle>Descubra novos artistas e suas artes</IntroTitle>
      <IntroSubTitle>Uma nova greção de artistas surgem</IntroSubTitle>

      <Button label="Explorar" />
      <IntroStatusGroup />
    </IntroTitleBox>
  );
}
