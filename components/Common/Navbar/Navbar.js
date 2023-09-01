"use client";
import Styles from './Navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import fillHeart from '../../../assets/ButtonIcons/ph_heart-fill.svg';
import notificationBell from '../../../assets/ButtonIcons/NotificationBell.svg';
import { useAuth } from '@/context/auth';
import MoresLogo from '../MoresLogo';
import { useRouter } from 'next/router';
import ProfileDropdownButton from '@/utils/ProfileDropdownButton/ProfileDropdownButton';
import DropdownButton from '@/utils/DropdownButton/DropdownButton';

 
const Navbar = () => {
    const [auth, setAuth] = useAuth();

    const router = useRouter();

    // List of paths where Navbar should be hidden
    const pathsWithoutNavbar = ['/login', '/register','/otpVerify'];

    if (pathsWithoutNavbar.includes(router.pathname)) {
        return null; // Do not render the Navbar
    }

    return ( 
        <div className={Styles.navbar}>
           <div className={`flex w-8/12 items-center ml-5`}>
                <MoresLogo />            
                <div className={`flex justify-evenly w-8/12`}>
                        <div className={Styles.optionName}>
                            <DropdownButton optionName="City" menuItem={['random', 'data']} />  
                        </div>
                        <div className={Styles.optionName}>
                            <DropdownButton optionName="Sell" menuItem={['random', 'data']} />  
                        </div>
                        <div className={Styles.optionName}>
                            <DropdownButton optionName="Rent" menuItem={['random', 'data']} />  
                        </div>
                        <div className={Styles.optionName}>
                            <DropdownButton optionName="Projects" menuItem={['random', 'data']} />  
                        </div>
                        <div className={Styles.optionName}>
                            <DropdownButton optionName="Agents" menuItem={['random', 'data']} />  
                        </div>
                        <div className={Styles.optionName}>
                            <DropdownButton optionName="services" menuItem={['random', 'data']} />  
                        </div>
                        <div className={Styles.optionName}>
                            <DropdownButton optionName="Resources" menuItem={['random', 'data']} />  
                        </div>
                </div>                
           </div>
            <div className='w-4/12'>
                {!auth.userResult ? 
                    <div className='text-right mr-9 hover:opacity-95'>
                        <Link href='/login'>
                            <button className={Styles.button}>Login Now</button> 
                        </Link>
                    </div>
                :
                    <div className='flex justify-evenly'>
                        <button className={`mx-7 ${Styles.sellRentButton}`}>Sell & Rent Property</button>
                        <Image src={fillHeart} width={28} height={28} className='mr-4'/>

                        <Image src={notificationBell} width={21} height={21}/>
                        <div className='relative pt-3 mr-4'>
                            <p className={Styles.counter}>{auth.userResult?.notification?.length ? auth.userResult?.notification?.length : 0}</p>
                        </div>
            
                        <div className={Styles.optionName}>
                            <div className={Styles.name}>
                                <ProfileDropdownButton />
                            </div>                         
                        </div>
                    </div>
                }
            </div>
        </div>
     );
}
 
export default Navbar;