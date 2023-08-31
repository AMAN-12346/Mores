"use client";
import Link from 'next/link';
import Styles from './index.module.css';


const MoresLogo = () => {
    return ( 
        <div className={Styles.navLogo}>
            <Link href='/'>
                <img src="https://s3-alpha-sig.figma.com/img/febe/8042/b322d2011bbca027e8b4271194e4a9a6?Expires=1693180800&Signature=BybFk7GwZE79zYtAmQUl7YO0oxR0-hGfrwEmcOfjyiFMtaysRX0OXfZep0Ul-c03qSKoyIoteDGU31dCB-geyVHixwYGKdW7J98ySr0Eu0dBSbf30izP09MgqqZpw1kr2DlZwcuv16bjWqiQYUtTQCCP19wsfLhc7c9d4FvnZSVdUxAmFF19gdP9XmnAbvTn3VWYITy48QDljAfZyMG66D1hb59EC6jKxqNL65M4D4TM3OwV9sI67fOLNRJg6RIsa7MWzG587oX854jefCWsARtM-4dJmxGxWFrOs4EjF-DfQ8uOBM-sEDsjYPMLUw~lokH7-9M1vQrUDu6uxpy5CQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt='Mores-Logo'
                width={173}/>
            </Link>
        </div>
     );
}
 
export default MoresLogo;