import React from "react";
import styled from "styled-components";
import { ImageSquare } from "../../atoms/ImageSquare";

export function MiniGallery() {
  const MiniGallery = styled.section`
    display: grid;
    width: 100%;
    min-width: 490px;
    max-width: 800px;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
  `;

  return (
    <MiniGallery
      data-aos="fade-right"
      data-aos-delay="350"
      data-aos-duration="1000"
    >
      <ImageSquare srcImg="https://images.unsplash.com/photo-1585644198527-05519fdeaf98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
      <ImageSquare srcImg="https://images.unsplash.com/photo-1554139681-1adb48e035cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" />
      <ImageSquare srcImg="https://plus.unsplash.com/premium_photo-1672287578296-21a2e3504bf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" />
    </MiniGallery>
  );
}
