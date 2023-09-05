import Image from 'next/image';
import leftButton from '@/assets/ButtonIcons/ExpandLeft.svg';
import rightButton from '@/assets/ButtonIcons/ExpandRight.svg';
import Styles from './index.module.css';
import useWindowWidth from '@/context/useWindowWidth';

const LeftRightSlideButtons = ({leftFunction, rightFunction}) => {
    const windowWidth = useWindowWidth();

    return ( 
        <div className={`md:w-[150px] lg:w-[200px] ${Styles.outerDiv}`}>
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