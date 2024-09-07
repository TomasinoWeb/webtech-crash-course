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
      <div className="mt-4 flex w-full flex-col">
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          placeholder="totodo123"
          className="w-full"
          {...register('username')}
        />
      </div>
      <div className="mt-8 flex w-full flex-col">
        <Label htmlFor="input">Password</Label>
        <Input
          type="text"
          placeholder="at least 8 characters"
          className="w-full"
          {...register('password')}
        />
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
