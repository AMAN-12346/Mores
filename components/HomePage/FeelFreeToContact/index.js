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
            <h1 className={`text-[24px] md:text-[30px] lg:text-[37px] ${Styles.heading}`}>
                Feel Free To Contact
            </h1>       
            <p className={`text-[11px] md:text-[15px] ${Styles.paragraph}`}>Enter the following Details to reach us.</p>
            <form className='mt-9'>
                <div className='flex justify-evenly flex-wrap'>
                    <div>
                        <p className={Styles.fieldName}>First Name</p>
                        <InputValue className={Styles.inputField}/>
                    </div>
                    <div className='my-5 md:mt-0'>
                        <p className={Styles.fieldName}>Last Name</p>
                        <InputValue className={Styles.inputField}/>
                    </div>
                    <div>
                        <p className={Styles.fieldName}>Email Address</p>
                        <InputValue className={Styles.inputField}/>
                    </div>
                    <div className='mt-5 md:mt-0 md:my-6'>
                        <p className={Styles.fieldName}>Phone Number</p>
                        <PhoneNumberInput  value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                            country={selectedCountry}
                            onCountryChange={handleCountryChange}
                            className={Styles.inputField}
                        />                                        
                    </div>
                </div>
                <div className='ml-[7.5vw] max-sm:mt-[15px] md:ml-[10vw]'>
                    <p className={Styles.fieldName}>Message</p>
                    <textarea rows={6} cols={55} className={Styles.textArea} />
                </div>
                <div className='text-center mb-4 mt-12'>
                    <button className={Styles.button}>Send Message</button>
                </div>
            </form>
        </div>
     );
}
 
export default FeelFreeToContact;