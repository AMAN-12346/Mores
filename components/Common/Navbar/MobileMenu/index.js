import MoresLogo from '../../MoresLogo';
import BurgerMenu from '../BurgerMenu';
import Styles from './index.module.css';
import bottomHeart from '@/assets/MenuIcons/BottomMenu/bottom-heart.svg';
import bottomHome from '@/assets/MenuIcons/BottomMenu/Home.svg';
import notificationBell from '@/assets/ButtonIcons/NotificationBell.svg';
import bottomSellRent from '@/assets/MenuIcons/BottomMenu/sellRent.svg';
import bottomProfile from '@/assets/MenuIcons/BottomMenu/bottomProfile.svg';
import Image from 'next/image';

const MobileMenu = () => {
    return ( 
        <div className='w-[100vw]'>
            {/* top */}
            <div className="mx-[15px] flex h-[45px]" id="navbar">
                <div className='pt-[12px]'>
                   <BurgerMenu />
                </div>
                <div className='w-[110px] m-auto'>
                    <MoresLogo />
                </div>
            </div>

            {/* Bottom menu */}
            <div className='fixed bottom-0 z-10 w-[100vw] h-[48px] pt-[8px] bg-white flex text-[10px] font-semibold justify-evenly tracking-wide shadow-lg shadow-gray-950'>
                <div className={Styles.itemDiv}>
                    <Image src={bottomHome} width={18} height={20}  className='m-auto mb-1' alt='image'/>
                    Home
                </div>
                <div>
                    <Image src={bottomSellRent} width={18} height={20} className='m-auto mb-1' alt='image'/>
                    Sell & Rent
                </div>
                <div>
                    <Image src={bottomHeart} width={18} height={20} className='m-auto mb-1' alt='image'/>
                    Favourites
                </div>
                <div>
                    <Image src={notificationBell} width={16} height={20} className='m-auto mb-1' alt='image'/>
                    Notification
                </div>
            </div>
        </div>
    );
}
 
export default MobileMenu;