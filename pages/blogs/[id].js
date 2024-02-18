import Link from "next/link";
import { useRouter } from "next/router";
import { Card, Container } from "react-bootstrap";
import useSWR from "swr";

function DetailBlog() {
  const router = useRouter();
  const id = router.query.id;

  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `http://localhost:8000/blogs/${id}`,
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
      <Link href="/blogs">Go back</Link>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Title:{data.title}</Card.Title>
          <Card.Text>Content:{data.content}</Card.Text>
          <Card.Text>Author:{data.author}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default DetailBlog;
