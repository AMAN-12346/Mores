"use client";
import Styles from './Footer.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import moresFooterLogo from '../../../assets/moreIcon/MoresFooter.svg';
import facebookIcon from '../../../assets/socialIcons/facebook.svg';
import twitterIcon from '../../../assets/socialIcons/x-twitter.svg';
import youtubeIcon from '../../../assets/socialIcons/youtube.svg';
import addressIcon from '../../../assets/FooterIcons/placeholder.png';
import gmailIcon from '../../../assets/FooterIcons/gmail.png';
import phoneIcon from '../../../assets/FooterIcons/call.png';
import leftArrow from '@/assets/ButtonIcons/leftArrow.svg';
import { useState } from 'react';
import useWindowWidth from '@/context/useWindowWidth';
import Link from 'next/link';


const Footer = () => {

    const router = useRouter();
    const windowWidth = useWindowWidth();

    const [quickLinks, setQuickLinks] = useState(false)
    const [about, setAbout] = useState(false)
    const [contacts, setContacts] = useState(false)

    // List of paths where Navbar should be hidden
    const pathsWithoutNavbar = ['/login', '/register', '/otpVerify'];

    if (pathsWithoutNavbar.includes(router.pathname)) {
        return null; // Do not render the Navbar
    }

    return (
        <footer className={`footer md:flex max-sm:mb-[50px] p-10 bg-base-200 text-base-content sm:text-[11px] md:text-[11px] lg:text-[14px] relative ${Styles.footer}`}>
            <div className='w-[40vw] md:w-[30vw] mr-[5vw] md:text-[11px] lg:text-[12px]'>
                <Image src={moresFooterLogo} alt='Mores-Footer-Logo' width={143} className='w-40 h-9 mt-7' />
                <p className='my-2 text-[11px] w-[40vw] md:w-[30vw]'>Everyone has dreams and aspirations, but most of us don’t have the first idea about how to make them come true</p>
                <div className='inline-flex'>
                    <Image
                        className='mr-3'
                        src={facebookIcon}
                        height={20}
                        width={20}
                        alt="facebook icon"
                    />
                    <Image
                        className='mr-3 text-white'
                        src={twitterIcon}
                        height={21}
                        width={21}
                        alt="twitter icon"
                    />
                    <Image
                        src={youtubeIcon}
                        height={20}
                        width={20}
                        alt="youtube icon"
                    />
                </div>
            </div>
            {(windowWidth > 768) ?
                <>
                    <div className='w-[200px]'>

                        <span className={`cursor-default block ${Styles.spanHeading}`}>Quick Links</span>
                        <a className="cursor-default block">Properties</a>
                        <Link className="cursor-default block my-3" href='/about'>About us</Link>
                        {/* <a className="cursor-default block ">Blog</a> */}
                        <Link className="cursor-default block" href='/Blog'>Blog</Link>

                        <a className="cursor-default block my-3">Contact us</a>
                    </div>
                    <div className='w-[200px]'>
                        <span className={`cursor-default block ${Styles.spanHeading}`}>About</span>
                        <Link className="cursor-default block" href='/career'>Career</Link>
                        <a className="cursor-default block my-3">Terms & Conditions</a>
                        <a className="cursor-default block">Privacy policy</a>
                    </div>
                    <div className='w-[200px]'>
                        <span className={`cursor-default block ${Styles.spanHeading}`}>Contact</span>
                        <a className="cursor-default block md:w-40 lg:w-[23vw]">
                            CORPORATE OFFICE
                            5th Floor , Unit No. 503 , Tower 4,
                            Assotech Business Cresterra, Sector 135,
                            Noida, Uttar Pradesh, 201305
                        </a>
                        <a className="cursor-default block my-3">sales@mores.in</a>
                        <a className="cursor-default block">+91-8409091010</a>
                    </div>
                </>
                :
                <>
                    <div className="w-[70vw] max-sm:text-[11px]">
                        <div className="justify-between flex mt-7 text-[15px] font-semibold peer-checked:text-white" onClick={() => setQuickLinks(!quickLinks)}>
                            <div>Quick Links</div>
                            {
                                quickLinks ?
                                    <div>
                                        <button className={Styles.RightSlideButton}>
                                            <Image src={leftArrow} width={18} height={18} className="m-auto rotate-90" />
                                        </button>
                                    </div>
                                    :
                                    <div>
                                        <button className={Styles.RightSlideButton}>
                                            <Image src={leftArrow} width={18} height={18} className="m-auto -rotate-90" />
                                        </button>
                                    </div>
                            }
                        </div>
                        {
                            quickLinks &&
                            <div className="block">
                                <div className="cursor-default mt-4">Properties</div>
                                <div className="cursor-default my-2"><Link href='/about'>About us</Link></div>
                                <div className="cursor-default">Blog</div>
                                <div className="cursor-default my-2">Contact us</div>
                            </div>
                        }
                    </div>
                    <div className="w-[70vw] max-sm:text-[11px]">
                        <div className="justify-between flex mt-7 text-[15px] font-semibold peer-checked:text-white" onClick={() => setAbout(!about)}>
                            <div>About</div>
                            {
                                about ?
                                    <div>
                                        <button className={Styles.RightSlideButton}>
                                            <Image src={leftArrow} width={18} height={18} className="m-auto rotate-90" />
                                        </button>
                                    </div>
                                    :
                                    <div>
                                        <button className={Styles.RightSlideButton}>
                                            <Image src={leftArrow} width={18} height={18} className="m-auto -rotate-90" />
                                        </button>
                                    </div>
                            }
                        </div>
                        {
                            about &&
                            <div className="block">
                                <div className="cursor-default mt-4"><Link href='/career'>Career</Link></div>
                                <div className="cursor-default my-2">Terms & Conditions</div>
                                <div className="cursor-default">Privacy policy</div>
                            </div>
                        }
                    </div>
                    <div className="w-[70vw] max-sm:text-[11px]">
                        <div className="justify-between flex mt-7 text-[15px] font-semibold peer-checked:text-white" onClick={() => setContacts(!contacts)}>
                            <div>Contacts</div>
                            {
                                contacts ?
                                    <div>
                                        <button className={Styles.RightSlideButton}>
                                            <Image src={leftArrow} width={18} height={18} className="m-auto rotate-90" />
                                        </button>
                                    </div>
                                    :
                                    <div>
                                        <button className={Styles.RightSlideButton}>
                                            <Image src={leftArrow} width={18} height={18} className="m-auto -rotate-90 " alt='icon' />
                                        </button>
                                    </div>
                            }
                        </div>
                        {
                            contacts &&
                            <div className="block">
                                <div className="cursor-default md:w-40 lg:w-[200px] mt-4 ">
                                    CORPORATE OFFICE
                                    5th Floor , Unit No. 503 , Tower 4,
                                    Assotech Business Cresterra, Sector 135,
                                    Noida, Uttar Pradesh, 201305
                                </div>
                                <div className="cursor-default my-2">sales@mores.in</div>
                                <div className="cursor-default">+91-8409091010</div>
                            </div>
                        }
                    </div>
                </>}
        </footer>
    );
}

export default Footer;