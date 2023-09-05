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
            <div className="mx-[15px] flex h-[55px] ">
                <div className='pt-[12px]'>
                   <BurgerMenu />
                </div>
                <div className='w-[110px] m-auto'>
                    <MoresLogo />
                </div>
            </div>

            {/* Bottom menu */}
            <div className='fixed bottom-0 z-10 w-[100vw] h-[60px] pt-3 bg-white flex text-[11px] font-semibold justify-evenly shadow-lg shadow-gray-950'>
                <div className={Styles.itemDiv}>
                    <Image src={bottomHome} width={18} height={20}  className='m-auto mb-1'/>
                    Home
                </div>
                <div>
                    <Image src={bottomSellRent} width={18} height={20} className='m-auto mb-1' />
                    Sell & Rent
                </div>
                <div>
                    <Image src={bottomHeart} width={18} height={20} className='m-auto mb-1' />
                    Favourites
                </div>
                <div>
                    <Image src={notificationBell} width={16} height={20} className='m-auto mb-1' />
                    Notification
                </div>
                <div>
                    <Image src={bottomProfile} width={20} height={20} className='m-auto mb-1' />
                    Profile
                </div>
            </div>
        </div>
    );
}
 
export default MobileMenu;