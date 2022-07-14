import styled from "styled-components";
import { Button } from "../../atoms/Button";
import { MiniGallery } from "../../molecules/MiniGallery";

export function SubIntroSection() {
  const SubIntroSection = styled.section`
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
  `;
  return (
    <SubIntroSection>
      <MiniGallery />
      <section>
        <Button label="Ver mais" />
      </section>
    </SubIntroSection>
  );
}
