import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    // <div className="h-screen bg-gradient-to-r from-indigo-500 flex items-center justify-center">
    //   <div className="bg-indigo-500 block w-96 h-96 m-8 rounded-full shadow-[inset -25px -25px 40px rgba(0,0,0,.5)]"></div>
    // </div>
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
            <Link href='https://twitter.com/hirowf'>Twitter </Link>{' '}
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
// font-size: 1.5rem;
//     font-weight: 600;
//     text-align: right;
