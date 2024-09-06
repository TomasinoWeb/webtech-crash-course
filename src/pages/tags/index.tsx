import Card from '../components/card';
import Layout from '../layouts/layout';

const cardData = [
  { id: 1, title: 'Title 1', task: 'Task 1' },
  { id: 2, title: 'Title 2', task: 'Task 2' },
  { id: 3, title: 'Title 3', task: 'Task 3' },
  { id: 4, title: 'Title 4', task: 'Task 4' },
  { id: 5, title: 'Title 5', task: 'Task 5' },
  { id: 6, title: 'Title 6', task: 'Task 6' },
  { id: 7, title: 'Title 7', task: 'Task 7' },
  { id: 8, title: 'Title 8', task: 'Task 8' },
  { id: 9, title: 'Title 9', task: 'Task 9' },
  { id: 10, title: 'Title 10', task: 'Task 10' },
  { id: 11, title: 'Title 11', task: 'Task 11' },
  { id: 12, title: 'Title 12', task: 'Task 12' },
];

export default function Tags() {
  return (
    <Layout>
      <div className=" m-10  flex  flex-wrap items-center justify-center gap-4 rounded-xl bg-cyan-900 py-10">
        {cardData.map((card) => (
          <div key={card.id} className="w-full p-2 sm:w-1/2 md:w-1/3 lg:w-1/5">
            <Card title={card.title} task={card.task} index={card.id} />
          </div>
        ))}
      </div>
    </Layout>
  );
}
