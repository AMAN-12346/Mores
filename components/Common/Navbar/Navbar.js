"use client";
import Styles from './Navbar.module.css';

const Navbar = () => {
    return ( 
        <div className={Styles.navbar}>
           <div className={`flex w-10/12 items-center ml-5`}>
                <div className={Styles.navLogo}>
                    <img src="https://s3-alpha-sig.figma.com/img/febe/8042/b322d2011bbca027e8b4271194e4a9a6?Expires=1693180800&Signature=BybFk7GwZE79zYtAmQUl7YO0oxR0-hGfrwEmcOfjyiFMtaysRX0OXfZep0Ul-c03qSKoyIoteDGU31dCB-geyVHixwYGKdW7J98ySr0Eu0dBSbf30izP09MgqqZpw1kr2DlZwcuv16bjWqiQYUtTQCCP19wsfLhc7c9d4FvnZSVdUxAmFF19gdP9XmnAbvTn3VWYITy48QDljAfZyMG66D1hb59EC6jKxqNL65M4D4TM3OwV9sI67fOLNRJg6RIsa7MWzG587oX854jefCWsARtM-4dJmxGxWFrOs4EjF-DfQ8uOBM-sEDsjYPMLUw~lokH7-9M1vQrUDu6uxpy5CQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt='Mores-Logo'/>
                </div>            
                <div className={`flex justify-evenly w-8/12`}>
                        <div className={Styles.optionName}>City <img src='https://cdn-icons-png.flaticon.com/128/2985/2985150.png' width={18} className='ml-2' alt='down arrow' /> </div>
                        <div className={Styles.optionName}>Buy <img src='https://cdn-icons-png.flaticon.com/128/2985/2985150.png' width={18} className='ml-2' alt='down arrow' /></div>
                        <div className={Styles.optionName}>Rent <img src='https://cdn-icons-png.flaticon.com/128/2985/2985150.png' width={18} className='ml-2' alt='down arrow' /></div>
                        <div className={Styles.optionName}>Projects <img src='https://cdn-icons-png.flaticon.com/128/2985/2985150.png' width={18} className='ml-2' alt='down arrow' /></div>
                        <div className={Styles.optionName}>Agents <img src='https://cdn-icons-png.flaticon.com/128/2985/2985150.png' width={18} className='ml-2' alt='down arrow' /></div>
                        <div className={Styles.optionName}>Services <img src='https://cdn-icons-png.flaticon.com/128/2985/2985150.png' width={18} className='ml-2' alt='down arrow' /></div>
                        <div className={Styles.optionName}>Resources <img src='https://cdn-icons-png.flaticon.com/128/2985/2985150.png' width={18} className='ml-2' alt='down arrow' /></div>
                </div>                
           </div>
            <div>
                <button className={Styles.button}>Login Now</button>
            </div>
        </div>
     );
}
 
export default Navbar;