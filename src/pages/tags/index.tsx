import { Plus } from 'lucide-react';
import Link from 'next/link';

import Button from '@/components/button';
import CardsSection from '@/components/dashboard/cards-section';
import Header from '@/components/dashboard/header';
import { useTag } from '@/hooks/useTag';
import { formatDate } from '@/utils/formatDate';

import Layout from '../layouts/layout';

export default function Tags() {
  const { tags, loading } = useTag();
  const today = formatDate(new Date());

  return (
    <Layout>
      <div className="flex w-full flex-col gap-10">
        <Header
          title="Good Morning, Totoro"
          subtitle={`Today, ${today}`}
          buttonSide={
            <Link href="/tags/add" className="w-full md:w-fit">
              <Button className="h-fit w-full">
                <Plus /> Add Tag
              </Button>
            </Link>
          }
        />
        <CardsSection tags={tags} loading={loading} />
      </div>
    </Layout>
  );
}
