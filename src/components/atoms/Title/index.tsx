import React from "react";
import { TitleH1, TitleH2 } from "./styles";

type Props = {
  text: string;
};

export function Title(props: Props) {
  return <TitleH1>{props.text}</TitleH1>;
}
export function Title2(props: Props) {
  return <TitleH2>{props.text}</TitleH2>;
}
