"use client";
import { useEffect, useState } from "react"
import { PieChart } from '@mui/x-charts';
import Styles from './index.module.css';
import InputValue from "@/utils/InputValue";
import Image from "next/image";
import Calculator from '../../../assets/calculator/calculator.png';

const EMI = () => {

    const [amount, setAmount] = useState("");
    const [rate, setRate] = useState("");
    const [time, setTime] = useState('');
    const [emi, setEmi] = useState("");
    const [totalAmount, setTotalAmount] = useState('');
    const [totalInterest, setTotalInterest] = useState('');
    const [load, setLoad] = useState(false);

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
        <div className="w-12/12 flex relative">
            <div className={`text-center w-4/12 m-auto my-9 py-9 ${Styles.calculatorDiv}`}>
                <p className={`text-3xl my-7`}>Calculate EMI</p>
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
            <div className="w-5/12 bg-white-500">
                <div>
                    {load ?
                        <div className=" absolute right-15 bottom-12">
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
                            <PieChart
                            series={[
                                {
                                    data: [
                                        { id: 0, value: totalInterest, label: 'Interest' },
                                        { id: 1, value: amount, label: 'Principle' },
                                    ],
                                    innerRadius: 15,
                                    outerRadius: 120,
                                    paddingAngle: 0,
                                    cornerRadius: 10,
                                    startAngle: 0,
                                    endAngle: 360,
                                    cx: 151,
                                    cy: 150,
                                }
                            ]}
                            width={450}
                            height={300}
                            />
                        </div>
                        :
                        <div className={`absolute right-15 bottom-12 ${Styles.sideDiv}`}>
                            <Image
                                src={Calculator}
                                width={200}
                                height={100}
                                className="mx-24"
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