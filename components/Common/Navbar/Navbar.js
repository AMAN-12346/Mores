"use client";
import DropdownButton from '@/utils/DropdownButton';
import Styles from './Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
    return ( 
        <div className={Styles.navbar}>
           <div className={`flex w-10/12 items-center ml-5`}>
                <div className={Styles.navLogo}>
                    <Link href='/'>
                        <img src="https://s3-alpha-sig.figma.com/img/febe/8042/b322d2011bbca027e8b4271194e4a9a6?Expires=1693180800&Signature=BybFk7GwZE79zYtAmQUl7YO0oxR0-hGfrwEmcOfjyiFMtaysRX0OXfZep0Ul-c03qSKoyIoteDGU31dCB-geyVHixwYGKdW7J98ySr0Eu0dBSbf30izP09MgqqZpw1kr2DlZwcuv16bjWqiQYUtTQCCP19wsfLhc7c9d4FvnZSVdUxAmFF19gdP9XmnAbvTn3VWYITy48QDljAfZyMG66D1hb59EC6jKxqNL65M4D4TM3OwV9sI67fOLNRJg6RIsa7MWzG587oX854jefCWsARtM-4dJmxGxWFrOs4EjF-DfQ8uOBM-sEDsjYPMLUw~lokH7-9M1vQrUDu6uxpy5CQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                        alt='Mores-Logo'/>
                    </Link>
                </div>            
                <div className={`flex justify-evenly w-8/12`}>
                        <div className={Styles.optionName}>
                            <DropdownButton optionName="City" menuItem={['random', 'data']} />                        
                            <img src='https://cdn-icons-png.flaticon.com/128/2985/2985150.png' width={18} className='ml-2' alt='down arrow' /> 
                        </div>
                        <div className={Styles.optionName}>
                            <DropdownButton optionName="Sell" menuItem={['random', 'data']} />                        
                            <img src='https://cdn-icons-png.flaticon.com/128/2985/2985150.png' width={18} className='ml-2' alt='down arrow' /> 
                        </div>
                        <div className={Styles.optionName}>
                            <DropdownButton optionName="Rent" menuItem={['random', 'data']} />                        
                            <img src='https://cdn-icons-png.flaticon.com/128/2985/2985150.png' width={18} className='ml-2' alt='down arrow' /> 
                        </div>
                        <div className={Styles.optionName}>
                            <DropdownButton optionName="Projects" menuItem={['random', 'data']} />                        
                            <img src='https://cdn-icons-png.flaticon.com/128/2985/2985150.png' width={18} className='ml-2' alt='down arrow' /> 
                        </div>
                        <div className={Styles.optionName}>
                            <DropdownButton optionName="Agents" menuItem={['random', 'data']} />                        
                            <img src='https://cdn-icons-png.flaticon.com/128/2985/2985150.png' width={18} className='ml-2' alt='down arrow' /> 
                        </div>
                        <div className={Styles.optionName}>
                            <DropdownButton optionName="services" menuItem={['random', 'data']} />                        
                            <img src='https://cdn-icons-png.flaticon.com/128/2985/2985150.png' width={18} className='ml-2' alt='down arrow' /> 
                        </div>
                        <div className={Styles.optionName}>
                            <DropdownButton optionName="Resources" menuItem={['random', 'data']} />                        
                            <img src='https://cdn-icons-png.flaticon.com/128/2985/2985150.png' width={18} className='ml-2' alt='down arrow' /> 
                        </div>
                </div>                
           </div>
            <div>
                <button className={Styles.button}>Login Now</button>
            </div>
        </div>
     );
}
 
export default Navbar;