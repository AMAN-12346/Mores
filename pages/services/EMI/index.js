"use client";
import { useEffect, useState } from "react"
import Styles from './index.module.css';
import InputValue from "@/utils/InputValue";
import Image from "next/image";
import Calculator from '../../../assets/calculator/calculator.png';
import useWindowWidth from "@/context/useWindowWidth";

const EMI = () => {

    const [amount, setAmount] = useState("");
    const [rate, setRate] = useState("");
    const [time, setTime] = useState('');
    const [emi, setEmi] = useState("");
    const [totalAmount, setTotalAmount] = useState('');
    const [totalInterest, setTotalInterest] = useState('');
    const [load, setLoad] = useState(false);

    const windowWidth = useWindowWidth();


    const handleEMI = async () => {
        if(amount === '' || rate === '' || time ===""){
            return;
        }
        const intr = rate / 1200;

        const emiCal = Math.round(amount * intr * (Math.pow((1 + intr), time)) / ((Math.pow((1 + intr), time)) - 1));
        const toAmount = emiCal * time;
        const inetrestTotal = toAmount - amount;

        setLoad(true)
        setEmi(emiCal);
        setTotalAmount(toAmount);
        setTotalInterest(inetrestTotal);
    }

    return (
        <div className="lg:w-12/12 md:mb-12 md:flex md:relative">
            <div className={`text-center w-[80%] md:w-[50%] md:py-5 lg:w-4/12 m-auto my-9 lg:py-9 ${Styles.calculatorDiv}`}>
                <p className={`text-[18px] font-semibold md:font-normal md:text-[25px] lg:text-3xl my-5`}>Calculate EMI</p>
                <div>
                    <InputValue placeholder="Enter Amount"
                     value={amount} setValue={setAmount} 
                     type={Number}
                     className={Styles.formInput}
                    />
                </div>    
                <div>
                    <InputValue placeholder="Enter Interest Rate"
                     value={rate} setValue={setRate} type={Number}
                     className={Styles.formInput}
                    />
                </div>
                <div>
                    <InputValue placeholder="Enter Time in months"
                     value={time} setValue={setTime} type={Number}
                     className={Styles.formInput}
                    />
                </div>
                <div>
                    <button className={Styles.button} onClick={handleEMI}>Calculate</button>
                </div>
            </div>
            <div className="md:w-[50%] lg:w-5/12 bg-white-500">
                <div>
                    {load ?
                        <div className="md:h-[80%] md:absolute right-15 bottom-12">
                            <div className={Styles.emiDiv}>
                                <div>
                                    Emi per month : <b>₹ {emi} / month</b>
                                </div>
                                <div className="my-5">
                                    Total Amount : <b>₹ {totalAmount} </b>
                                </div>
                                <div className="mb-5">
                                    Total Interest of {time} month : <b> ₹ {totalInterest}</b>
                                </div>
                            </div>
                         
                        </div>
                        :
                        <div className={`md:absolute md:right-15 bottom-12 ${Styles.sideDiv}`}>
                            <Image
                                src={Calculator}
                                width={180}
                                height={100}
                                className="mx-24 w-[120px] md:w-[150px] lg:w-[180px] md:m-auto lg:m-auto"
                                alt="calculator-img"
                            />
                            <h1 className={Styles.Md_quotes}>
                                Plan Your Finances with home loan EMI Calculator
                            </h1>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default EMI;