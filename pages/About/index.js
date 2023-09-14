"use client";
import Image from 'next/image';
import Styles from './index.module.css';
import aboutContent from '@/content/About';
import 'animate.css/animate.css';

const About = () => {

    const color = ["rgba(1, 129, 145, 0.08)", "rgba(147, 22, 2, 0.06)", "rgba(200, 142, 32, 0.06)"];

    return (
        <div className='bg-[#fdf8f1] animate__animated animate__fadeInRight'>
            <div className={Styles.about}>
            </div>
            <div className='w-[80%] lg:w-[60%] m-auto'>
               <h1 className={Styles.heading}>About Us</h1>
               <p className={Styles.paragraph}>{aboutContent.about}</p>
               <h1 className={Styles.subheading}>Management Team</h1>
               {aboutContent.person.map((data, index) => 
                    <div className='flex mb-3' key={index}>
                        <Image src={data.imageFile} width={600} height={600} className={Styles.pic} alt='image'/>
                        <div className={Styles.dataDiv}>
                            <h2 className={Styles.nameheading}>{data.name}, {data.position}</h2>
                            <p className={Styles.paragraph}>{data.story}</p>
                        </div>
                   </div>
               )}

               {/* our services */}
               <h1 className={`md:mt-12 ${Styles.subheading}`}>Our Services</h1>
               <div className='flex max-sm:flex-wrap max-sm:justify-center pb-7 mt-5'>
                {aboutContent.services.map((data,index) => 
                        <div className={Styles.serviceDiv} style={{backgroundColor: color[index]}} key={index}>
                            <Image src={data.icon} width={600} height={600} className={Styles.icon} alt='image' />
                            <h2 className={Styles.servicePara}>{data.name}</h2>
                        </div>
                )}
               </div>

               {/* our Core Values */}
               <h1 className={`md:mt-7 ${Styles.subheading}`}>Core Values of MORES</h1>
               <div className='flex pb-7 mt-5 flex-wrap justify-center text-center'>
                {aboutContent.coreValues.map((data,index) => 
                        <div className={Styles.coreValuesDiv} key={index}>
                            <Image src={data.icon} width={600} height={600} className={Styles.icon} alt='image'/>
                            <h2 className={Styles.coreValuesPara}>{data.name}</h2>
                        </div>
                )}
               </div>

                {/* social Platforms */}
                <h1 className={`md:mt-7 ${Styles.subheading}`}>Social Media</h1>
                <div className='flex pb-7 mt-5'>
                    {aboutContent.social.map((data,index) => 
                        <>
                            <Image src={data.icon} width={60} height={60} className={Styles.SocialIcon} alt='image'/>
                        </>
                    )}
               </div>
            </div>
        </div> 
    );
}
 
export default About;