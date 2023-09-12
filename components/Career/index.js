"use client";
import Image from 'next/image';
import Styles from './index.module.css';
import jobImage from '../../assets/Images/Career/image5.png';
import awards from '../../assets/Images/Career/cup.png';
import workspace from '../../assets/Images/Career/workspace.png';
import coworkers from '../../assets/Images/Career/division.png';
import interview from '../../assets/Images/Career/meeting.png';
import cv from '../../assets/Images/Career/cv.png';
import skills from '../../assets/Images/Career/abilities.png';
import phone from '../../assets/Images/Career/telephone.png';
import careerContent from '@/content/Career';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useData } from '@/context/data';


const Career = (title) => {
    const router = useRouter();
    const [data, setData] = useData();

    const handleApply = (job) => {
        setData(job);
        router.push(`/career/${job.title}`)
    }

    return (
        <div className={Styles.mainDiv}>
            {/* head part */}
            <div className='bg-[aliceblue] pb-9'>
                <div className='flex md:w-[85%] lg:w-[75%] pt-5 m-auto justify-between'>
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

            {/* Recruitment Process */}
            <div className='text-center pt-24 w-[80%] m-auto'>
                <h2 className={Styles.h2heading}>Learn Our Recruitment <span style={{color: "#018191"}}>Process</span></h2>
                <div className='pt-16 flex justify-center'>
                    {/* cv submission */}
                    <div className={Styles.recruitmentSingleDiv}>
                       <Image src={cv} width={600} height={600} alt='icon-div' className={Styles.imageRecruitment}/>
                       <h4 className={Styles.h4Heading}>Resume Submission</h4>
                       <p className={Styles.paraRecruitment}>Submit Your Details for further Process</p>
                    </div>
                    {/* phone screening */}
                    <div className={Styles.recruitmentSingleDiv}>
                       <Image src={phone} width={600} height={600} alt='icon-div' className={Styles.imageRecruitment}/>
                       <h4 className={Styles.h4Heading}>Phone Screening</h4>
                       <p className={Styles.paraRecruitment}>In second round, Our HR will call you.</p>
                    </div>
                    {/* skills test */}
                    <div className={Styles.recruitmentSingleDiv}>
                       <Image src={skills} width={600} height={600} alt='icon-div' className={Styles.imageRecruitment}/>
                       <h4 className={Styles.h4Heading}>Skill Test</h4>
                       <p className={Styles.paraRecruitment}>Prepare Yourself for skill assessment test</p>
                    </div>
                    {/* interview */}
                    <div className={Styles.recruitmentSingleDiv}>
                       <Image src={interview} width={600} height={600} alt='icon-div' className={Styles.imageRecruitment}/>
                       <h4 className={Styles.h4Heading}>Final Interview</h4>
                       <p className={Styles.paraRecruitment}>Final interview with our MD or CEO</p>
                    </div>
                </div>
            </div>

            {/* Job Openings */}

            <div className='w-[50%] m-auto pt-36 pb-12'>
                <h4 className={Styles.h4heading}>Current Openings </h4>
                <hr className={Styles.underline} />
                <div className='justify-center mt-5'>
                {careerContent.jobs.map((job,index)=> 
                    <div className={Styles.jobDiv}>
                        <div>
                            <h4 className={Styles.jobheading}>{job.title}</h4>
                            <h5>Salary: Rs. XXXX/year</h5>
                            <h5>Experience: {job.experience}</h5>
                            <h5>Job Type: Permanent</h5>
                        </div>
                        <div>   
                            <button className={Styles.jobButton} onClick={()=>handleApply(job)}>Apply</button>                          
                        </div>
                    </div>
                )}
                </div>
            </div>
        </div> 
    );
}
 
export default Career;


