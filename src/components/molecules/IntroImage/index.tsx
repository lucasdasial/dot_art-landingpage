import React from "react";
import styled from "styled-components";

export function IntroImage() {
  const ImgContainer = styled.div`
    overflow: hidden;
    border-radius: 8px;
    display: flex;
    max-width: 400px;
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
    <ImgContainer
      data-aos="fade-up"
      data-aos-delay="550"
      data-aos-duration="800"
    >
      <Img src="https://images.unsplash.com/photo-1593382067395-ace3045a1547?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80" />
    </ImgContainer>
  );
}
