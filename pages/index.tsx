import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className='flex h-screen one-e bg-[#1e1e1e] text-white'>
      <div className='m-auto text-center'>
        <div className='inline-block'>
          <h1 className='font-bold text-[5rem] leading-[-.1rem] cursor-pointer'>
            Anderson
          </h1>
          <h2 className='text-[1.5rem] font-semibold text-center md:text-center'>
            Fullstack Developer, Human;
          </h2>
          <div className='height:1.5rem'></div>
          <p className='text-center py-5'>
            <Link href=''>Twitter </Link>{' '}
            &nbsp;|&nbsp;
            <Link href=''>
              Linkedin
            </Link>{' '}
            &nbsp;|&nbsp;
            <Link href=''>
              Instagram
            </Link>{' '}
            &nbsp;|&nbsp;
            <Link href='https://github.com/santosant'>Github </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
