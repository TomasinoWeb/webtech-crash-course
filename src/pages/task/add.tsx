import { useRouter } from 'next/navigation';

import Button from '@/components/button';
import Input from '@/components/input';
import Label from '@/components/label';

import Layout from '../layouts/layout';

export default function AddTask() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <Layout>
      <div className="flex w-full flex-col gap-10">
        <div className="text-5xl font-medium">Add Task</div>
        <div className="flex w-full gap-11">
          <div className="flex flex-1 flex-col gap-7">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Task Name</Label>
              <Input id="name" placeholder="Task Name" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="description">Description</Label>
              <Input id="description" placeholder="Description" />
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-7">
            <div className="flex flex-col gap-2">
              <Label htmlFor="tag">Tag</Label>
              <Input id="tag" placeholder="Select Tag" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="status">Status</Label>
              <Input id="status" placeholder="Select Status" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="due">Deadline</Label>
              <Input id="due" placeholder="Pick Date" />
            </div>
          </div>
        </div>
        <div className="flex gap-4 self-end">
          <Button variant="secondary" onClick={handleBack}>
            Cancel
          </Button>
          <Button>Add Task</Button>
        </div>
      </div>
    </Layout>
  );
}
