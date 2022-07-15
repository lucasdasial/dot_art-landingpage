import styled from "styled-components";

const SubTitle = styled.p`
  font-size: 1.5rem;
  color: var(--grey);
  margin-bottom: 32px;
`;

type Props = {
  text: string;
};

export function Subtitle(props: Props) {
  return <SubTitle>{props.text}</SubTitle>;
}
