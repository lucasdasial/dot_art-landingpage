import styled from "styled-components";
import { Button } from "../../atoms/Button";
import { Subtitle } from "../../atoms/SubTitle";
import { Title } from "../../atoms/Title";
import { StatusGroup } from "../StatusGroup";

export function IntroTitleBox() {
  const IntroTitleBox = styled.div`
    width: 100%;
    max-width: 800px;
    height: auto;
  `;

  return (
    <IntroTitleBox
      data-aos="fade-up"
      data-aos-delay="250"
      data-aos-duration="1000"
    >
      <Title text="Descubra novos artistas e suas artes" />
      <Subtitle text="Uma nova greção de artistas surgem" />

      <Button label="Explorar" />
      <StatusGroup />
    </IntroTitleBox>
  );
}
