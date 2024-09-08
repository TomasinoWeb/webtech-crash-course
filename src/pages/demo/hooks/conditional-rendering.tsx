import { useState } from 'react';

import Button from '@/components/button';

import Layout from '../../layouts/layout';

export default function ConditionalRendering() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  const [name, setName] = useState('Totoro');
  const changeName = () => setName('Pikachu');

  return (
    <Layout>
      <div className="flex justify-center gap-2">
        <div className="flex w-full max-w-sm flex-col gap-4 border-2 border-slate-400 p-8 text-2xl">
          <div>Count: {count}</div>
          <Button onClick={increment}>Increment</Button>
          <Button onClick={decrement}>Decrement</Button>
        </div>
        <div className="flex w-full max-w-sm flex-col gap-4 border-2 border-slate-400 p-8 text-2xl">
          <div>Name: {name}</div>
          <Button onClick={changeName}>Change Name</Button>
        </div>
      </div>
    </Layout>
  );
}
