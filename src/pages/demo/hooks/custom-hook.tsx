import { useState } from 'react';

import Button from '@/components/button';

import Layout from '../../layouts/layout';

export default function CustomHook() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <Layout>
      <div className="flex justify-center gap-2">
        <div className="flex w-full max-w-sm flex-col gap-4 border-2 border-slate-400 p-8 text-2xl">
          <div>Count: {count}</div>
          <Button onClick={increment}>Increment</Button>
          <Button onClick={decrement}>Decrement</Button>
        </div>
      </div>
    </Layout>
  );
}
