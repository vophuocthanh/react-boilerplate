import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function UserCreate() {
  return (
    <div className='flex flex-col justify-center w-full p-6 mx-auto'>
      <h1 className='flex justify-center mx-auto text-3xl'>Create User</h1>
      <form action='' className='flex flex-col justify-center gap-4 mx-auto'>
        <div className='space-y-2'>
          <label htmlFor='name' className='text-xl font-bold'>
            Name
          </label>
          <Input
            id='name'
            placeholder='Name here ...'
            className='outline-none lg:w-96'
          />
        </div>
        <div className='space-y-2'>
          <label htmlFor='email' className='text-xl font-bold'>
            Email
          </label>
          <Input
            id='email'
            placeholder='Email here ...'
            className='outline-none lg:w-96'
          />
        </div>
        <div className='space-y-2'>
          <label htmlFor='role' className='text-xl font-bold'>
            Role
          </label>
          <Input
            id='role'
            placeholder='Role here ...'
            className='outline-none lg:w-96'
          />
        </div>
        <div className='space-y-2'>
          <label htmlFor='created_at' className='text-xl font-bold'>
            Created At
          </label>
          <Input
            id='created_at'
            placeholder='Created here ...'
            disabled
            className='outline-none lg:w-96'
          />
        </div>
        <Button
          className='flex justify-center w-40 mx-auto bg-blue-400 shadow-md hover:bg-blue-500'
          type='submit'
        >
          Update
        </Button>
      </form>
    </div>
  );
}
