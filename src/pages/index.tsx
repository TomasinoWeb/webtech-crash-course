import { Plus } from 'lucide-react';
import { useState } from 'react';

import Badge from './components/badge';
import Button from './components/button';
import Input from './components/input';
import Label from './components/label';
import Select from './components/select';
import Layout from './layouts/layout';

export default function Home() {
  const [value, setValue] = useState('');
  return (
    <Layout>
      <div>hello dashboard</div>
      <div className="mx-auto flex max-w-fit flex-col gap-4">
        {/* Buttons */}
        <div className="flex gap-4">
          <Button>
            <Plus />
            <div>Button</div>
          </Button>
          <Button isLoading>
            <div>Button</div>
          </Button>
        </div>
        <div className="flex gap-4">
          <Button variant="secondary">
            <Plus />
            <div>Button</div>
          </Button>
          <Button variant="secondary" isLoading>
            <div>Button</div>
          </Button>
        </div>
        <div className="flex gap-4">
          <Button variant="outline">
            <Plus />
            <div>Button</div>
          </Button>
          <Button variant="outline" isLoading>
            <div>Button</div>
          </Button>
        </div>
        <div className="flex gap-4">
          <Button variant="destructive">
            <Plus />
            <div>Button</div>
          </Button>
          <Button variant="destructive" isLoading>
            <div>Button</div>
          </Button>
        </div>

        {/* Inputs */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="input">Text Input</Label>
          <Input type="text" placeholder="Text Input" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="select">Select Input</Label>
          <Select
            name="select"
            options={['Option 1', 'Option 2', 'Option 3']}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        {/* Badges */}
        <div className="grid w-fit grid-cols-2 gap-4">
          <Badge text="Badge" />
          <Badge text="Badge" dot />
          <Badge text="Badge" color="pink" />
          <Badge text="Badge" color="pink" dot />
          <Badge text="Badge" color="lime" />
          <Badge text="Badge" color="lime" dot />
          <Badge text="Badge" color="cyan" />
          <Badge text="Badge" color="cyan" dot />
          <Badge text="Badge" color="purple" />
          <Badge text="Badge" color="purple" dot />
          <Badge text="Badge" color="grey" />
          <Badge text="Badge" color="grey" dot />
          <Badge text="Badge" color="blue" />
          <Badge text="Badge" color="blue" dot />
          <Badge text="Badge" color="green" />
          <Badge text="Badge" color="green" dot />
        </div>
      </div>
    </Layout>
  );
}
