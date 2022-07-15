import { Title } from "../../atoms/Title";
import { Card } from "../../molecules/Card";
import { Container, Grid } from "./styles";

export function Artists() {
  return (
    <div>
      <Container
        data-aos="fade-left"
        data-aos-delay="350"
        data-aos-duration="1000"
      >
        <Title text="Artistas" />
        <Grid>
          <Card srcImg="https://images.unsplash.com/photo-1541519230324-f6779f9f4a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
          <Card srcImg="https://images.unsplash.com/photo-1441471349424-351990746ff4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
          <Card srcImg="https://images.unsplash.com/photo-1628359355624-855775b5c9c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
        </Grid>
      </Container>
    </div>
  );
}
