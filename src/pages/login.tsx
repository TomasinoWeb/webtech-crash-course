import Button from './components/button';
import Input from './components/input';
import Label from './components/label';
import Layout from './layouts/layout';

export default function Login() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center overflow-hidden">
        <div className="w-9/12">
          <h1 className="text-center text-4xl">Welcome!</h1>
          <div className="mt-4 flex w-full flex-col">
            <Label htmlFor="input">Username</Label>
            <Input type="text" placeholder="totodo123" className="w-full" />
          </div>

          <div className="mt-8 flex w-full flex-col">
            <Label htmlFor="input">Password</Label>
            <Input
              type="text"
              placeholder="at least 8 characters"
              className="w-full"
            />
          </div>

          <Button className="mt-10 w-full">
            <div>Login</div>
          </Button>

          <div className="pt-14 text-center">
            <Label htmlFor="input">
              Don’t have an account?{' '}
              <span className="font-bold underline">Signup</span>
            </Label>
          </div>
        </div>
      </div>
    </Layout>
  );
}
