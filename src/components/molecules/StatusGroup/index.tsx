import React from "react";
import styled from "styled-components";
import { Status } from "../../atoms/Status";

export function StatusGroup() {
  const StatusGroup = styled.div`
    margin-top: 36px;
    display: flex;
    gap: 47px;
    padding: 1rem;
  `;
  return (
    <StatusGroup>
      <Status title="2000" label="artistas" />
      <Status title="7000" label="vendas" />
      <Status title="16000" label="avaliações" />
    </StatusGroup>
  );
}
