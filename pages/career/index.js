"use client";
import Image from 'next/image';
import 'animate.css/animate.css';
import Career from '@/components/Career';

const Page = () => {

    const color = ["rgba(1, 129, 145, 0.08)", "rgba(147, 22, 2, 0.06)", "rgba(200, 142, 32, 0.06)"];

    return (
        <div className='bg-[#fdf8f1] animate__animated animate__fadeInRight'>
            <Career />
        </div> 
    );
}
 
export default Page;