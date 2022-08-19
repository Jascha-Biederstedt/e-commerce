import Head from 'next/head';

import prisma from 'lib/prisma';
import { getProducts } from 'lib/data.js';

const getServerSideProps = async context => {
  const products = await getProducts(prisma);

  return {
    props: {
      products,
    },
  };
};

const Home = ({ products }) => {
  return (
    <div>
      <Head>
        <title>Shop</title>
        <meta name='description' content='Shop' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='text-center '>
        <h1 className='mt-10 font-extrabold text-2xl'>Shop</h1>

        <div className='mt-20 mx-auto max-w-sm'>
          {products.map(product => (
            <div className='mb-4 border border-black' key={product.id}>
              {product.title} (${product.price / 100})
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
