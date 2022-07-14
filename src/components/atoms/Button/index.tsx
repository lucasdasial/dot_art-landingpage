import styled from "styled-components";

type Props = {
  label: string;
};
export function Button(props: Props) {
  const Button = styled.button`
    background: var(--primary);
    color: var(--light);
    padding: 12px 16px;
    min-width: 130px;
    border-radius: 4px;
    text-transform: uppercase;
    font-weight: bold;
    transition: 200ms;

    &:hover {
      transform: translate(-4px, -4px);
      box-shadow: 10px 5px 5px var(--grey);
    }
    &:active {
      filter: brightness(1.5);
    }
  `;

  return <Button> {props.label}</Button>;
}
