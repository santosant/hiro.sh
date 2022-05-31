import type { NextPage } from 'next';
import Link from 'next/link';
import SphereComponent from '../components/SphereComponent';

const Home: NextPage = () => {
  return (
    <div className='flex h-screen one-e bg-[#1e1e1e] text-white justify-center items-center'>
      <div className='m-auto text-center overflow-visible'>
        <div className='inline-block'>
          <SphereComponent />
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
            <Link href='https://www.linkedin.com/in/santosant/'>
              Linkedin
            </Link>{' '}
            &nbsp;|&nbsp;
            <Link href=''>Instagram</Link> &nbsp;|&nbsp;
            <Link href='https://github.com/santosant'>Github </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
