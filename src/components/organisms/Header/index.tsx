import React from "react";
import styled from "styled-components";
import { Button } from "../../atoms/Button";
import { Logo } from "../../atoms/Logo";
import { SearchBar } from "../../molecules/SearchBar";

export function Header() {
  const Container = styled.header`
    height: 80px;
    width: 100%;
    padding: 16px;
  `;

  const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  return (
    <Container data-aos="fade-up">
      <HeaderContent className="max-w">
        <Logo />
        <SearchBar />
        <Button label="Entrar" />
      </HeaderContent>
    </Container>
  );
}
