import { Logo } from "../../atoms/Logo";
import { Container, FooterContent, Ancora } from "./styles";

export function Footer() {
  return (
    <Container>
      <FooterContent>
        <Logo />
        <Ancora
          target="_blank"
          rel="noopener"
          href="https://github.com/luccasalves"
        >
          by @luccasalves
        </Ancora>
      </FooterContent>
    </Container>
  );
}
