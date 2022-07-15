import styled from "styled-components";
export const CardBox = styled.div`
  width: 400;
  height: 500;
  border-radius: 8px;
  overflow: hidden;
`;

export const Image = styled.img`
  cursor: pointer;
  width: 100%;
  height: 100%;
  transition: 400ms;
  &:hover {
    transform: scale(1.05);
  }
`;
