import styled from "styled-components";

import CountUp from "react-countup";

type Props = {
  label: string;
  title: string;
};

export function IntroStatus(props: Props) {
  const IntroStatusBox = styled.div`
    min-width: 120px;
  `;

  const n = 123;

  const StatusTitle = styled.h1`
    font-size: 2rem;
    line-height: 38.73px;
  `;

  const StatusLabel = styled.p`
    color: var(--grey);
    font-weight: 500;
    font-size: 1rem;
    text-align: center;
    text-transform: capitalize;
  `;

  return (
    <IntroStatusBox>
      <StatusTitle>
        +
        <CountUp end={parseInt(props.title)} />
      </StatusTitle>
      <StatusLabel> {props.label}</StatusLabel>
    </IntroStatusBox>
  );
}
