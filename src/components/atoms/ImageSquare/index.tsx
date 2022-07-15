import styled from "styled-components";

type Props = {
  srcImg: string;
};

export function ImageSquare(props: Props) {
  const Image = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 8px;
    transition: 400ms;
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
    }
  `;

  return <Image src={props.srcImg} />;
}
