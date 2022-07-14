import styled from "styled-components";
import { IntroStatus } from "../../atoms/IntroStatus";

export function IntroStatusGroup() {
  const StatusGroup = styled.div`
    margin-top: 36px;
    display: flex;
    gap: 47px;
    padding: 1rem;
  `;
  return (
    <StatusGroup>
      <IntroStatus title="2000" label="artistas" />
      <IntroStatus title="7000" label="vendas" />
      <IntroStatus title="16000" label="avaliações" />
    </StatusGroup>
  );
}
