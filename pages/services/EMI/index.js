"use client";

import { useEffect, useState } from "react"
import { PieChart } from '@mui/x-charts/PieChart';
import Styles from './index.module.css';
import Navbar from "@/components/Common/Navbar/Navbar";
import InputValue from "@/utils/InputValue";

const EMI = () => {

    const [amount, setAmount] = useState("");
    const [rate, setRate] = useState("");
    const [time, setTime] = useState('');
    const [emi, setEmi] = useState("");
    const [totalAmount, setTotalAmount] = useState('');
    const [totalInterest, setTotalInterest] = useState('');
    const [load, setLoad] = useState(false);

    const handleEMI = async () => {

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
        <div className="relative">
        <Navbar />
        <div className="w-12/12 flex">
            <div className={`text-center w-4/12 m-auto ${Styles.calculatorDiv}`}>
                <p className="text-2xl my-6 ">Calculate EMI</p>
                <div>
                    <InputValue placeholder="Enter Amount"
                     value={amount} setValue={setAmount} 
                     className={Styles.formInput}
                    />
                </div>    
                <div>
                    <InputValue placeholder="Enter Interest Rate"
                     value={rate} setValue={setRate} 
                     className={Styles.formInput}
                    />
                </div>
                <div>
                    <InputValue placeholder="Enter Time in months"
                     value={time} setValue={setTime} 
                     className={Styles.formInput}
                    />
                </div>
                <div>
                    <button className={Styles.button} onClick={handleEMI}>Calculate</button>
                </div>

                <div>
                    Emi per month : <b>₹ {emi}</b>
                </div>
                <div className="my-5">
                    Total Amount : <b>₹ {totalAmount} </b>
                </div>
                <div className="mb-5">
                    Total Interest of {time} month : <b> ₹ {totalInterest}</b>
                </div>
            </div>
            <div className="w-5/12 absolute right-0 bottom-0">
                <div  >
                    {load &&
                        <PieChart
                            series={[
                                {
                                    data: [
                                        { id: 0, value: totalInterest, label: 'Interest' },
                                        { id: 1, value: amount, label: 'Principle' },
                                    ],
                                    innerRadius: 15,
                                    outerRadius: 100,
                                    paddingAngle: 0,
                                    cornerRadius: 8,
                                    startAngle: 0,
                                    endAngle: 360,
                                    cx: 151,
                                    cy: 150,
                                }
                            ]}
                            width={400}
                            height={400}
                        />}
                </div>
            </div>
        </div>
        </div>
    );
}

export default EMI;