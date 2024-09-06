import { Plus } from 'lucide-react';
import Link from 'next/link';

import Button from '@/components/button';
import Card from '@/components/card';
import Header from '@/components/dashboard/header';
import { useTag } from '@/hooks/useTag';
import { formatDate } from '@/utils/formatDate';

import Layout from '../layouts/layout';

export default function Tags() {
  const { tags } = useTag();
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
        <div className="grid grid-cols-4 gap-4 rounded-xl bg-slate-200 p-6 dark:bg-slate-800 ">
          {tags.map((tag) => (
            <div key={tag.id} className="h-full p-2">
              <Card
                id={tag.id}
                title={tag.name}
                task={tag.description}
                color={tag.color}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
