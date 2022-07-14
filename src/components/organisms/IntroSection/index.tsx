import styled from "styled-components";
import { IntroTitleBox } from "../../molecules/IntroTitleBox";

export function IntroSection() {
  const IntroSection = styled.section`
    display: flex;
    justify-content: space-between;
  `;

  const ImgContainer = styled.div`
    overflow: hidden;
    border-radius: 8px;
    display: flex;
    justify-content: end;
    max-width: 600px;
  `;
  const Img = styled.img`
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
    transition-duration: 600ms;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  `;

  return (
    <IntroSection>
      <IntroTitleBox />
      <ImgContainer>
        <Img src="https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1245&q=80" />
      </ImgContainer>
    </IntroSection>
  );
}
