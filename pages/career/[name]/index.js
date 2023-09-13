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
                    <hr className={Styles.underline}/>
                </div>                     
            </div>
            <div className='w-[50%] m-auto'>
               <h1 className={Styles.jobheading}>{data.title}</h1>
                <p className={Styles.jobpara}>Salary : Rs. ----/year</p>
                <p className={Styles.jobpara}>Gender : {data.gender}</p>
                <p className={Styles.jobpara}>Expertise : {data.experience}</p>
                <div className={Styles.description}>Description</div>
                <p className={Styles.jobpara}>{data.description}</p>
                <div className={Styles.description}>Qualification</div>
                <ul>
                    {data?.qualification?.map((line)=>
                    <li className={Styles.jobpara}>⦿ {line}</li>
                    )}
                </ul>
            </div>
        </div> 
    );
}
 
export default index;


