"use client";
import Styles from './Footer.module.css';
import logo from '../../assets/moreIcon/mores.png';
import Image from 'next/image';
import facebookIcon from '../../assets/socialIcons/facebook.svg';
import twitterIcon from '../../assets/socialIcons/twitter.svg';
import youtubeIcon from '../../assets/socialIcons/youtube.svg';


const Footer = () => {
    return ( 
        <div className={`flex justify-evenly w-12/12 ${Styles.footer}`}>
            <div className='flex w-4/12 items-center flex-wrap ml-20 mt-24 h-fit'>
              <div>
                <img 
                className='w-40 h-9 mb-4'
                src="https://s3-alpha-sig.figma.com/img/e7aa/0378/04e2d5856f135d6d10a0aaa5c453113e?Expires=1693180800&Signature=pMdNl8b3K9wO1Qgb1NnF1mZd-c80RlqzE8AfEsVdq3VsR7CaH4AW-Of~YP3wVhM868wvwhLQwvMIh1~LSe7-~jdFr3lO4BP9vmZFYK8mQXqpK-jbKnNRjA7DiZUEUtoLSrU1JI12qnkZp-rCJjP-51bTkRDiMl-U-h57xIhIFQzkoq6Esxgxj7QnlRfE5kxhbSixMLmbUU7gBtkQnxmb43fNGE9vNFINtSVuOkf--u~RA4obc3PiW4dg5vFFrI4F4BZy8MZHGGaVi~1JFMDSXJL9CBsU1ayh3OvOcD8-ve1wPZ25piZELjUSiVwewXHEc5BSKGesiJ-fKQ1Bt~0krw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt='Mores-logo' />
            
                <p className='h-14 w-5/5 text-base text-white font-normal mb-5'>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
           <div className={`flex justify-evenly w-9/12 justify-center mt-12`}>
            <div>
                <div className={Styles.footerTag}>QUICK LINKS</div>
                <div>
                    <p className={Styles.paraTag}>PROPERTIES</p>
                    <p className={Styles.paraTag}>ABOUT US</p>
                    <p className={Styles.paraTag}>BLOG</p>
                    <p className={Styles.paraTag}>CONTACT US</p>
                </div>
            </div>
            <div>
                <div className={Styles.footerTag}>ABOUT</div>
                <div>
                    <p className={Styles.paraTag}>Terms & Conditions</p>
                    <p className={Styles.paraTag}>Privacy Policy</p>
                </div>
            </div>
            <div>
                <div className={Styles.footerTag}>CONTACT</div>
                <div>
                    <p className={Styles.adddressParaTag}>ABC, TOWER NO. 4, SECTOR-135, NOIDA, UP, INDIA</p>
                    <p className={Styles.paraTag}>xyzcompany@gmail.com</p>
                </div>
            </div>
           </div>
        </div>
     );
}
 
export default Footer;