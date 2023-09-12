"use client";
import Image from 'next/image';
import Styles from './index.module.css';
import 'animate.css/animate.css';
import { useData } from '@/context/data';

const index = () => {
    const [data, setData] = useData();
   console.log("====", data)
    return (
        <div className='bg-[#fdf8f1] animate__animated animate__fadeInRight'>
            <div className={Styles.mainDiv}>
                <h1>Apply</h1>
            </div>
        </div> 
    );
}
 
export default index;


