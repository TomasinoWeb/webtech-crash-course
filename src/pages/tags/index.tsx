import { Plus } from 'lucide-react';
import Link from 'next/link';
import { useContext } from 'react';

import Button from '@/components/button';
import CardsSection from '@/components/dashboard/cards-section';
import Header from '@/components/dashboard/header';
import { useTags } from '@/hooks/useTags';
import { formatDate } from '@/utils/formatDate';

import Layout, { UserContext } from '../layouts/layout';

function NewHeader() {
  const today = formatDate(new Date());
  const user = useContext(UserContext);

  return (
    <Header
      title={`Good Morning, ${user?.username ?? 'Totoro'}`}
      subtitle={`Today, ${today}`}
      buttonSide={
        <Link href="/tags/add" className="w-full md:w-fit">
          <Button className="h-fit w-full">
            <Plus /> Add Tag
          </Button>
        </Link>
      }
    />
  );
}

export default function Tags() {
  const { tags, loading } = useTags();

  return (
    <Layout>
      <div className="flex w-full flex-col gap-10">
        <NewHeader />
        <CardsSection tags={tags} loading={loading} />
      </div>
    </Layout>
  );
}
