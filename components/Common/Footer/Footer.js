"use client";
import Styles from './Footer.module.css';
import Image from 'next/image';
import facebookIcon from '../../../assets/socialIcons/facebook.svg';
import twitterIcon from '../../../assets/socialIcons/twitter.svg';
import youtubeIcon from '../../../assets/socialIcons/youtube.svg';
import addressIcon from '../../../assets/FooterIcons/placeholder.png';
import gmailIcon from '../../../assets/FooterIcons/gmail.png';
import phoneIcon from '../../../assets/FooterIcons/call.png';


const Footer = () => {
    return ( 
        <div className={`flex justify-evenly w-12/12 ${Styles.footer}`}>
            <div className='flex w-4/12 items-center flex-wrap ml-20 mt-24 h-fit'>
              <div>
                <img 
                className='w-40 h-9 mb-4'
                src="https://s3-alpha-sig.figma.com/img/e7aa/0378/04e2d5856f135d6d10a0aaa5c453113e?Expires=1693180800&Signature=pMdNl8b3K9wO1Qgb1NnF1mZd-c80RlqzE8AfEsVdq3VsR7CaH4AW-Of~YP3wVhM868wvwhLQwvMIh1~LSe7-~jdFr3lO4BP9vmZFYK8mQXqpK-jbKnNRjA7DiZUEUtoLSrU1JI12qnkZp-rCJjP-51bTkRDiMl-U-h57xIhIFQzkoq6Esxgxj7QnlRfE5kxhbSixMLmbUU7gBtkQnxmb43fNGE9vNFINtSVuOkf--u~RA4obc3PiW4dg5vFFrI4F4BZy8MZHGGaVi~1JFMDSXJL9CBsU1ayh3OvOcD8-ve1wPZ25piZELjUSiVwewXHEc5BSKGesiJ-fKQ1Bt~0krw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt='Mores-logo' />
            
                <p className='h-14 w-4/5 text-xs text-white font-normal mb-9'>
                   Everyone has dreams and aspirations, but most of us don’t have the first idea about how to make them come true
                </p>
                <div className='inline-flex'>
                    <Image
                        className='mr-3'
                        src={facebookIcon} // Route of the image file
                        height={24} // Desired size with correct aspect ratio
                        width={24} // Desired size with correct aspect ratio
                        alt="facebook icon"
                    />
                    <Image
                        className='mr-3'
                        src={twitterIcon} // Route of the image file
                        height={24} // Desired size with correct aspect ratio
                        width={24} // Desired size with correct aspect ratio
                        alt="twitter icon"
                    />
                    <Image
                        src={youtubeIcon} // Route of the image file
                        height={24} // Desired size with correct aspect ratio
                        width={24} // Desired size with correct aspect ratio
                        alt="youtube icon"
                    />
                </div>
              </div>
            </div>
           <div className={`flex justify-evenly w-9/12 justify-center mt-12 ml-9`}>
            <div>
                <div className={Styles.footerTag}>QUICK LINKS</div>
                <div>
                    <p className={Styles.paraTag}>PROPERTIES</p>
                    <p className={Styles.paraTag}>ABOUT US</p>
                    <p className={Styles.paraTag}>BLOG</p>
                    <p className={Styles.paraTag}>CONTACT US</p>
                </div>
            </div>
            <div className='mx-12'>
                <div className={Styles.footerTag}>ABOUT</div>
                <div>
                    <p className={Styles.paraTag}>Career</p>
                    <p className={Styles.paraTag}>Terms & Conditions</p>
                    <p className={Styles.paraTag}>Privacy Policy</p>
                </div>
            </div>
            <div>
                <div className={Styles.footerTag}>CONTACT</div>
                <div>
                    <div className='flex'>
                        <Image src={addressIcon} className='w-[20px] h-[20px] mr-2' alt='address-icon'/>
                        <p className={Styles.adddressParaTag}>
                            CORPORATE OFFICE
                            5th Floor , Unit No. 503 , Tower 4, 
                            Assotech Business Cresterra, Sector 135,
                            Noida, Uttar Pradesh 201305
                        </p>
                    </div>
                    <div className={Styles.paraTag}>
                        <p className='mb-3 flex'> 
                            <Image src={gmailIcon} className='w-[20px] h-[20px] mr-2' alt='email-icon'/> 
                            sales@mores.in
                        </p>
                        <p className='flex'>
                            <Image src={phoneIcon} className='w-[20px] h-[20px] mr-2' alt='phone-icon'/>
                            +91-8409091010
                        </p>
                    </div>
                </div>
            </div>
           </div>
        </div>
     );
}
 
export default Footer;