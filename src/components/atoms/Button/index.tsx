import styled from "styled-components";

type Props = {
  label: string;
};
export function Button(props: Props) {
  const Button = styled.button`
    background: var(--primary);
    color: var(--light);
    padding: 8px 16px;
    min-width: 130px;
    border-radius: 4px;
    text-transform: uppercase;
    font-weight: bold;
  `;

  return <Button> {props.label}</Button>;
}
