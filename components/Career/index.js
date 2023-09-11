"use client";
import Image from 'next/image';
import Styles from './index.module.css';
import jobImage from '../../assets/Images/Career/image5.png';
import awards from '../../assets/Images/Career/cup.png';
import workspace from '../../assets/Images/Career/workspace.png';
import coworkers from '../../assets/Images/Career/division.png';
import careerContent from '@/content/Career';
import { StyledEngineProvider } from '@mui/material';

const Career = () => {

    const color = ["rgba(1, 129, 145, 0.08)", "rgba(147, 22, 2, 0.06)", "rgba(200, 142, 32, 0.06)"];

    return (
        <div className={Styles.mainDiv}>
            {/* head part */}
            <div className='bg-[aliceblue] pb-9'>
                <div className='flex w-[75%] pt-5 m-auto justify-between'>
                    <div className='pt-24'>
                        <h2 className={Styles.smallHeading}>We're hiring!</h2>
                        <h1 className={Styles.heading}>
                            Join Our Team
                        </h1>
                        <p className={Styles.para}>We are looking for passionate people to join us on our mission. We value flat hierarchies, clear communication and full ownership and responsibility.</p>
                        <div className={Styles.opening}>View Openings</div>
                    </div>
                    <Image src={jobImage} width={800} height={800} className={Styles.imageDiv}/>
                </div>
            </div>

            {/* career section */} 
            <div className='flex w-[75%] pt-24 m-auto justify-between'>
                <div className='w-[58%] flex flex-wrap justify-center mr-12'>                    
                    <div className={Styles.oneDiv}>
                        <Image src={workspace} width={600} height={600} alt='icon-div' className={Styles.image}/>
                        <h3 className={Styles.h3}>Beautifull Workspace</h3>
                    </div>  
                    <div className={Styles.twoDiv}>
                        <Image src={coworkers} width={600} height={600} alt='icon-div' className={Styles.image}/>
                        <h3 className={Styles.h3}>Great Co-workers</h3>
                    </div> 
                    <div className={Styles.threeDiv}>
                        <Image src={awards} width={600} height={600} alt='icon-div' className={Styles.image}/>
                        <h3 className={Styles.h3}>Awards on Performance</h3>
                    </div>               
                </div>
                <div className='pt-24 '>
                    <h2 className={Styles.h2heading}>
                        Your Life At <span style={{color: "#018191"}}>MORES</span>
                    </h2>
                    <p className={Styles.careerPara}> life at Moore's is a journey of growth and innovation. The collaborative culture fuels your passion for excellence. Work-life balance is cherished, and diversity is celebrated. We're excited about the impactful work we do here.</p>
                </div>                
            </div>


            {/* Job Openings */}

            <div className='w-[60%] m-auto pt-36'>
                <h4 className={Styles.h4heading}>Current Openings </h4>
                <hr className={Styles.underline} />
                {/* {careerContent.jobs.map((job)=> 
                <div className={Styles}>
                  
                </div>)} */}
            </div>
        </div> 
    );
}
 
export default Career;


