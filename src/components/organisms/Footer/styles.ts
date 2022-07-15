import styled from "styled-components";

export const Container = styled.footer`
  padding: 4rem 1rem;
`;

export const FooterContent = styled.div`
  max-width: 1366px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
`;

export const Ancora = styled.a`
  color: var(--dark);
  font-size: 18px;
  cursor: pointer;
  transition: 200ms;

  &:hover {
    color: var(--primary);
  }
`;
