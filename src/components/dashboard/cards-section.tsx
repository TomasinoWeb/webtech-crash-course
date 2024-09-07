import type { TagDTO } from '@/hooks/dto';

import Card from './card';
import CardLoader from './card-loader';

interface CardsSectionProps {
  tags: TagDTO[];
  loading: boolean;
}

export default function CardsSection({ tags, loading }: CardsSectionProps) {
  if (loading) {
    return <CardLoader />;
  }
  return (
    <div className="grid grid-cols-4 gap-4 rounded-xl bg-slate-200 p-8 dark:bg-slate-800 max-sm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
      {tags.map((tag) => (
        <div key={tag.uuid} className="h-full p-2">
          <Card
            uuid={tag.uuid}
            title={tag.name}
            task={tag.description}
            color={tag.color}
          />
        </div>
      ))}
    </div>
  );
}
