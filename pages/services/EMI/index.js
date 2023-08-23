"use client";

import { useEffect, useState } from "react"
import { PieChart } from '@mui/x-charts/PieChart';

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
        <div className="Home-Page">
            <input type="text" placeholder="Enter Amount"
                className="form-control mb-4" required autoFocus
                value={amount}
                onChange={e => setAmount(e.target.value)}
            />
            <input type="text" placeholder="Enter Interest Rate"
                className="form-control mb-4 m-4" required autoFocus
                value={rate}
                onChange={e => setRate(e.target.value)}
            />
            <input type="text" placeholder="Enter Duration in month"
                className="form-control mb-4" required autoFocus
                value={time}
                onChange={e => setTime(e.target.value)}
            />
            <button className="testbutton" onClick={handleEMI}>Calculate</button>

            <div>
                Emi per month : {emi} Rs
            </div>
            <div>
                Total Amount : {totalAmount} Rs
            </div>
            <div>
                Total Interest of {time} month : {totalInterest} Rs
            </div>

            <div>
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
    );
}

export default EMI;