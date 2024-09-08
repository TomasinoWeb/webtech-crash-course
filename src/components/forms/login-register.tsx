import { useForm } from 'react-hook-form';

import Button from '../button';
import Input from '../input';
import Label from '../label';

export interface LoginRegisterInputs {
  username: string;
  password: string;
}

interface LoginRegisterFormProps {
  onSubmit: (data: LoginRegisterInputs) => void;
}

export default function LoginRegisterForm({
  onSubmit,
}: LoginRegisterFormProps) {
  const { register, handleSubmit, formState } = useForm<LoginRegisterInputs>({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            placeholder="Username"
            {...register('username', { required: true })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Password"
            {...register('password', { required: true })}
          />
        </div>
      </div>

      <Button
        type="submit"
        className="mt-10 w-full"
        isLoading={formState.isSubmitting}
      >
        <div>Login</div>
      </Button>
    </form>
  );
}
