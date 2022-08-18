import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Admin = () => {
  const router = useRouter();

  const { data: session, status } = useSession();

  const loading = status === 'loading';

  if (loading) {
    return null;
  }

  if (!session) {
    router.push('/');
    return;
  }

  if (!session.user.isAdmin) {
    router.push('/');
    return;
  }

  return (
    <div className='text-center'>
      <h1 className='mt-10 font-extrabold text-2xl mb-8'>Admin</h1>

      <Link href='/admin/new'>
        <a className='inline mx-auto bg-black text-white px-3 py-1 text-lg'>
          Add a new product
        </a>
      </Link>
    </div>
  );
};

export default Admin;
