"use client";
import Image from 'next/image';
import Styles from './index.module.css';
import 'animate.css/animate.css';
import { useData } from '@/context/data';

const index = () => {
    const [data, setData] = useData();
   console.log("====", data)
    return (
        <div className='bg-white animate__animated animate__fadeInRight'>
            <div className={Styles.mainDiv}>
                <div className='m-auto w-[50%]'>
                    <h1 className={Styles.heading}>Apply Here</h1>
                    <p className={Styles.para}>excited to explore opportunities at Mores and be a part of our dynamic team</p>
                </div>                     
            </div>
            <div className='w-[50%] m-auto'>
                
                <div className='flex justify-between'>
                    <h1 className={Styles.jobheading}>{data.title}</h1>
                    <button className={Styles.jobButton}>Apply</button>
                </div>
                <p className={Styles.jobpara}><span style={{color:"#018191"}}>Salary :</span> Rs. ----/year</p>
                <p className={Styles.jobpara}><span style={{color:"#018191"}}>Gender :</span> {data.gender}</p>
                <p className={Styles.jobpara}><span style={{color:"#018191"}}>Job Type :</span> {data.type}</p>
                <p className={Styles.jobpara}><span style={{color:"#018191"}}>Expertise :</span> {data.experience}</p>
                <div className={Styles.description}>Requirements</div>
                <ul className=''>
                    {data?.requirements?.map((points)=>
                    <li className={Styles.requirementPoint}>{points}</li>
                    )}
                </ul>
                <div className={Styles.description}>Description</div>
                <p className={Styles.jobpara}>{data.description}</p>
                <div className={Styles.description}>Qualification</div>
                <ul>
                    {data?.qualification?.map((line)=>
                    <li className={Styles.jobpara}>● {line}</li>
                    )}
                </ul>
            </div>
        </div> 
    );
}
 
export default index;


