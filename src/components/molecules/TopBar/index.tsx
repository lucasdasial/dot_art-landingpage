import styled from "styled-components";
import { Button } from "../../atoms/Button";
import { Logo } from "../../atoms/Logo";

export function TopBar() {
  const TopBar = styled.header`
    height: 80px;
    width: 100%;
    padding: 16px;
  `;

  const TopBarContent = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  return (
    <TopBar>
      <TopBarContent className="max-w">
        <Logo />
        <Button label="Entrar" />
      </TopBarContent>
    </TopBar>
  );
}