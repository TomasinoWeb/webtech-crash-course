import { useRouter } from "next/router";
import Layout from "../../layouts/layout";

export default function EditTask() {
  const router = useRouter();
  // Extracting the 'id' from the URL query
  const { id } = router.query;
  return (
    <Layout>
      <h1>Editing Task {id}</h1>
    </Layout>
  );
}
