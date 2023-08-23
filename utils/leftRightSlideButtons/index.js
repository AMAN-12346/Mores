import Image from 'next/image';
import leftButton from '@/assets/ButtonIcons/ExpandLeft.svg';
import rightButton from '@/assets/ButtonIcons/ExpandRight.svg';
import Styles from './index.module.css';

const LeftRightSlideButtons = ({leftFunction, rightFunction}) => {
    return ( 
        <div className='w-[200px]'>
            <button className={`${Styles.slideButton}`} onClick={leftFunction}>
                <Image src={leftButton} width={40} height={40} className='m-auto'/>
            </button>
            <button className={Styles.RightSlideButton} onClick={rightFunction}>
                <Image src={leftButton} width={40} height={40} className='m-auto'/>
            </button>
        </div>
    );
}
 
export default LeftRightSlideButtons;