import useSWR from "swr";
import AppTable from "@/src/components/AppTable";
import { Container } from "react-bootstrap";
import Head from "next/head";

function Blogs() {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <Container>
      <Head>
        <title>Blog Page</title>
        <meta property="og:title" content="My blog page" key="title" />
      </Head>
      <AppTable blogs={data?.sort((a, b) => b.id - a.id)} />
    </Container>
  );
}

export default Blogs;
