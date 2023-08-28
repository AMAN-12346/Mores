"use client";
import InputValue from '@/utils/InputValue';
import Styles from './index.module.css';
import { useState } from 'react';
import PhoneNumberInput from '@/utils/PhoneNumerInput';


const FeelFreeToContact = () => {

    
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
  };

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };


    return ( 
        <div className={Styles.servicesComponent}>     
            <h1 className={Styles.heading}>
                Feel Free To Contact
            </h1>       
            <p className={Styles.paragraph}>Enter the following Details to reach us.</p>
            <form className='mt-12'>
                <div className='flex justify-evenly flex-wrap mb-7'>
                    <div>
                        <p className={Styles.fieldName}>First Name</p>
                        <InputValue className={Styles.inputField}/>
                    </div>
                    <div>
                        <p className={Styles.fieldName}>Last Name</p>
                        <InputValue className={Styles.inputField}/>
                    </div>
                    <div className='my-12'>
                        <p className={Styles.fieldName}>Email Address</p>
                        <InputValue className={Styles.inputField}/>
                    </div>
                    <div className='my-12'>
                        <p className={Styles.fieldName}>Phone Number</p>
                        <PhoneNumberInput  value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                            country={selectedCountry}
                            onCountryChange={handleCountryChange}
                            className={Styles.inputField}
                        />                                        
                    </div>
                </div>
                <div className='ml-[6vw]'>
                    <p className={Styles.fieldName}>Message</p>
                    <textarea rows={10} cols={50} className={Styles.textArea} placeholder='Write Message here'/>
                </div>
                <div className='text-center mb-4 mt-12'>
                    <button className={Styles.button}>Send Message</button>
                </div>
            </form>
        </div>
     );
}
 
export default FeelFreeToContact;