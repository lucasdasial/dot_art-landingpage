import React from "react";
import styled from "styled-components";
import { Button } from "../../atoms/Button";
import { Title2 } from "../../atoms/Title";
import { MiniGallery } from "../../molecules/MiniGallery";

export function SubIntro() {
  const SubIntroSection = styled.section`
    margin-top: 2rem;
    display: flex;
    gap: 10px;
    justify-content: space-between;
  `;

  const CallAction = styled.div`
    background-color: azure;
    display: flex;
    justify-content: end;
    flex-direction: column;
    max-width: 400px;
  `;
  return (
    <SubIntroSection>
      <MiniGallery />
      <CallAction
        data-aos="fade-right"
        data-aos-delay="550"
        data-aos-duration="1000"
      >
        <Title2 text="Confira as ultimas coleções" />
        <div>
          <Button label="Ver mais" />
        </div>
      </CallAction>
    </SubIntroSection>
  );
}
