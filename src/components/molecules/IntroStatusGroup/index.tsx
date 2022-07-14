import styled from "styled-components";
import { IntroStatus } from "../../atoms/IntroStatus";

export function IntroStatusGroup() {
  const StatusGroup = styled.div`
    margin-top: 36px;
    display: flex;
    gap: 47px;
    padding: 16px;
  `;
  return (
    <StatusGroup>
      <IntroStatus title="2 mil" label="artistas" />
      <IntroStatus title="7 mil" label="vendas" />
      <IntroStatus title="16 mil" label="avaliações" />
    </StatusGroup>
  );
}
