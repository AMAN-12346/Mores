"use client";
import Image from 'next/image';
import Styles from './index.module.css';
import 'animate.css/animate.css';
import { useData } from '@/context/data';
import InputValue from '@/utils/InputValue';
import { useState } from 'react';
import Link from 'next/link';

const Index = () => {
    const [data, setData] = useData();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [resume, setResume] = useState();

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
                    <Link href="#form">
                        <button className={Styles.jobButton}>Apply</button>
                    </Link>
                </div>
                <p className={Styles.jobpara}>Salary : <span style={{color:"#4c4e4e"}}>Rs. ----/year</span></p>
                <p className={Styles.jobpara}>Gender : <span style={{color:"#4c4e4e"}}>{data.gender}</span></p>
                <p className={Styles.jobpara}>Job Type : <span style={{color:"#4c4e4e"}}>{data.type}</span></p>
                <p className={Styles.jobpara}>Expertise : <span style={{color:"#4c4e4e"}}>{data.experience}</span></p>
                <div className={Styles.jobpara}>Requirements</div>
                <ul className='mb-7 flex flex-wrap'>
                    {data?.requirements?.map((points, index)=>
                    <li className={Styles.requirementPoint} key={index}>{points}</li>
                    )}
                </ul>
                <div className={Styles.jobpara}>Description</div>
                <p className={Styles.jobParagraph}>{data.description}</p>
                <div className={Styles.jobpara}>Must Have</div>
                <ul className='pb-7 ml-3'>
                    {data?.qualification?.map((line, index)=>
                    <li className={Styles.jobParagraph} key={index}> ● {line}</li>
                    )}
                </ul>

                {/* Fill the form */}
                <div className={Styles.container} id="form">
                    <h2 className={Styles.containerHeading}>
                       Fill the <span style={{color: "#018191"}}>Form</span>
                    </h2>
                    <div className='m-auto w-fit'>
                        <InputValue className={Styles.containerInput} placeholder="Your Name" value={name} setValue={setName}/>
                        <InputValue className={Styles.containerInput} type="email" placeholder="Your Email" value={email} setValue={setEmail} />
                    </div>
                    <div className='m-auto w-fit'>
                        <InputValue className={Styles.containerInput} placeholder="Phone Number" value={phone} setValue={setPhone}/>
                        <InputValue type="file" className={Styles.containerInput} placeholder="Your resume" value={resume} setValue={setResume} />
                    </div>
                    <div className='m-auto w-fit'>
                       <button className={Styles.formButton}>Submit</button>
                    </div>
                </div>
            </div>
        </div> 
    );
}
 
export default Index;


