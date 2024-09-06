import { useState } from 'react';

import Input from '@/components/input';
import Label from '@/components/label';
import Select from '@/components/select';
import type { Tag } from '@/const/tags';

interface AddEditTaskFormProps {
  tags: Tag[];
}

export default function AddEditTaskForm({ tags }: AddEditTaskFormProps) {
  const [selectStatus, setSelectStatus] = useState('Not Started');

  return (
    <div className="flex w-full flex-col gap-x-11 gap-y-4 md:flex-row">
      <div className="flex flex-1 flex-col gap-x-7 gap-y-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Task Name</Label>
          <Input id="name" placeholder="Task Name" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="description">Description</Label>
          <textarea
            name="description"
            className="flex min-h-32 w-full rounded-md border border-slate-400 bg-slate-100 px-4 py-3 text-sm text-slate-950 ring-offset-slate-400 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-slate-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:px-6 md:py-4 md:text-base dark:bg-slate-900 dark:text-slate-50"
            placeholder="Task Description"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-x-7 gap-y-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="tag">Tag</Label>
          <Select
            id="tag"
            name="tag"
            options={tags.map((tag) => tag.name)}
            value={selectStatus}
            onChange={(e) => setSelectStatus(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="status">Status</Label>
          <Select
            id="status"
            name="status"
            options={['Not Started', 'In Progress', 'Completed']}
            value={selectStatus}
            onChange={(e) => setSelectStatus(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="due">Deadline</Label>
          <Input id="due" type="date" placeholder="Pick Date" />
        </div>
      </div>
    </div>
  );
}
