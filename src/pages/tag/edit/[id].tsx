import { useRouter } from 'next/router';

import Layout from '../../layouts/layout';

export default function EditTag() {
  const router = useRouter();
  // Extracting the 'id' from the URL query
  const { id } = router.query;

  return (
    <Layout>
      <h1>Editing Tag {id}</h1>
    </Layout>
  );
}
