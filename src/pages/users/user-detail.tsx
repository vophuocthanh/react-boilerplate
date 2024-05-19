import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import axios from 'axios';
import { usersAPI } from '@/api/user.api';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function UserDetail() {
  const { id } = useParams();

  const { data: getUserDetail } = useQuery({
    queryKey: ['usersDetails', id],
    queryFn: () => usersAPI.getUserDetails(id as unknown as number),
  });
  console.log('getUserDetail:', getUserDetail?.id);
  const [name, setName] = useState(getUserDetail?.name || '');
  const [email, setEmail] = useState(getUserDetail?.email || '');
  const [role, setRole] = useState(getUserDetail?.role.name || '');
  const [createdAt] = useState(getUserDetail?.created_at || '');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_API_URL}/users/${id}/`,
        {
          name,
          email,
          role: { name: role },
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('access')}`,
          },
        }
      );
      if (res.status === 200) {
        toast.success('User updated successfully');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
      console.log(error);
    }
  };

  return (
    <div className='flex flex-col justify-center w-full p-6 mx-auto'>
      <h1 className='flex justify-center mx-auto text-3xl'>Users Details</h1>
      <form
        action=''
        className='flex flex-col justify-center gap-4 mx-auto'
        onSubmit={handleSubmit}
      >
        <div className='space-y-2'>
          <label htmlFor='name' className='text-xl font-bold'>
            Name
          </label>
          <Input
            id='name'
            placeholder='Name here ...'
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={role}
            onChange={(e) => setRole(e.target.value)}
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
            value={createdAt}
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
