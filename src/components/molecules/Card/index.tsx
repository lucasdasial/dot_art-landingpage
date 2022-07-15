import { CardBox, Image } from "./styles";

type Props = {
  srcImg: string;
};

export function Card(props: Props) {
  return (
    <CardBox>
      <Image src={props.srcImg} />
    </CardBox>
  );
}
