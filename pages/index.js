import Head from "next/head";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Home Page</title>
        <meta property="og:title" content="My home page" key="title" />
      </Head>
      <h1>Home Page</h1>
    </Container>
  );
}
