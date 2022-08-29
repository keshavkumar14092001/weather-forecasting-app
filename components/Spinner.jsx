import Spin from '../public/spinner.gif';
import Image from 'next/dist/client/image';

const Spinner = () => {
    return (
        <>
            <Image className='w-[200px] m-auto block' src={Spin} alt='loading' />
        </>
    )
}

export default Spinner;