import React from "react";
import { SubTitle } from "./styles";

type Props = {
  text: string;
};

function Subtitle(props: Props) {
  return <SubTitle>{props.text}</SubTitle>;
}

export default Subtitle;
