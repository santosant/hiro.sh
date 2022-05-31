import Sphere from '../components/SphereComponent';
import Text from '../components/Text';

const SpherePage = () => {
  return (
    <>
      <div className='flex h-screen items-center justify-center flex-col bg-[#2c2c2c]'>
        <div className='flex items-start justify-center w-full p-4 md:justify-start'>
          <Text className='text-white text-7xl font-extrabold font-[Noto Sans JP]'>
            獨行道 .
          </Text>
        </div>
        <div className='absolute flex items-center justify-center z-40'>
          <Text className='text-white font-[Noto Sans JP]'>獨行道 .</Text>
        </div>
        <Sphere />
      </div>
    </>
  );
};

export default SpherePage;
