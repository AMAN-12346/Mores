"use client";
import InputValue from "@/utils/InputValue/index";
import { useEffect, useState } from "react";
import Styles from './index.module.css';



const RentAgreement = () => {

    const [city, setCity] = useState("");
    const [agreementDate, setAgreementDate] = useState("");

    //landlord details
    const [ltitle, setLTitle] = useState("");
    const [lname, setLname] = useState("");
    const [lParentName, setLParentName] = useState("");
    const [lMob, setLMob] = useState("");
    const [lEmail, setLEmail] = useState("");
    const [lPan, setLPan] = useState("");
    const [lAdhaar, setLAdhaar] = useState("");
    const [lAddress, setLAddress] = useState("");


    //renter details
    const [rtitle, setRTitle] = useState("");
    const [rname, setRname] = useState("");
    const [rParentName, setRParentName] = useState("");
    const [rMob, setRMob] = useState("");
    const [rEmail, setREmail] = useState("");
    const [rPan, setRPan] = useState("");
    const [rAdhaar, setRAdhaar] = useState("");
    const [rAddress, setRAddress] = useState("");

    //property details
    const [buildingType, setBuildingType] = useState("");
    const [area, setArea] = useState("");
    const [propertyType, setPropertyType] = useState("");
    const [areaType, setAreaType] = useState("");
    const [pinCode, setPinCode] = useState("");
    const [locality, setLocality] = useState("");
    const [buildingName, setBuildingName] = useState("");
    const [floorNumber, setFloorNumber] = useState("");
    const [houseNumber, setHouseNumber] = useState("");
    const [propertyCity, setPropertyCity] = useState("");
    const [completeAddress, setCompleteAddress] = useState("");

    //rent details
    const [rent, setRent] = useState();
    const [rentPeriod, setRentPeriod] = useState();
    const [startDate, setStartDate] = useState();
    const [maintenanceType, setMaintenanceType] = useState();
    const [paymentDate, setPaymentDate] = useState();
    const [securityDeposit, setSecurityDeposit] = useState();
    const [noticePeriod, setNoticePeriod] = useState();
    const [lockinPeriod, setLockInPeriod] = useState();
    const [rentInc, setRentInc] = useState();


    // assets details
    const [assets, setAssets] = useState({
        "AC": 0,
        "Air Cooler": 0,
        "Almirah": 0,
        "Bulb": 0,
        "Bed": 0,
        "Chair": 0,
        "Curtain": 0,
        "Cupboard": 0,
        "Electric Geyser": 0,
        "Fan": 0,
        "Gas Geyser": 0,
        "Refrigerator": 0,
        "Sofa": 0,
        "Table": 0,
        "Tubelight": 0,
        "Television": 0,
        "Washing Machine": 0,
        "Water Cooler": 0,
    })

    const [addAmenity, setAddAmenity] = useState("");

    const [loading, setLoading] = useState(true);
    const [downloading, setDownloading] = useState(false);

    //download
    const handleDownload = async () => {

        const capture = document.querySelector(".pdfDiv");
        html2canvas(capture).then((canvas) => {
            const imgData = canvas.toDataURL('img/png');
            const doc = new jsPDF('p', 'mm', 'a4');
            // const componentWidth = doc.internal.pageSize.getWidth();
            // const componentHeight = doc.internal.pageSize.getHeight();
            doc.addImage(imgData, 'JPEG', 0, 0);
            doc.save('Agreement.pdf')
        })

    }

    // handleAgrrement
    const handleAgreement = () => {
        setLoading(false);
    }

    return (
        <>
        <div className="text-center items-center">
            {loading ?
                <div>
                    <h1 className="text-3xl font-bold mt-4 underline">Rent Agreement</h1>
                    <p className={Styles.paragraph}>Create rent agreement form in a easy free way !!!</p>
                    <details className={Styles.Details}>
                        <summary className={Styles.summary}>Enter City and Date</summary>
                        <div className={`flex justify-evenly ${Styles.innerSummary}`}>
                            <div>
                                <h2>City</h2>
                                <InputValue value={city} setValue={setCity} placeholder="Enter City name" className={Styles.InputValue}/>
                            </div>
                            <div>
                                <h2>Agrement Date</h2>
                                <InputValue value={agreementDate} setValue={setAgreementDate} placeholder="Enter Date" type="date" className={Styles.InputValue}/>
                            </div>
                        </div>
                    </details>

                    {/* landlord details */}
                    <details className={Styles.Details}>
                        <summary className={Styles.summary}>Landlord Details</summary>
                        <div className={`flex justify-evenly flex-wrap ${Styles.innerSummary}`}>
                            <div>
                                <h2>Title</h2>
                                <InputValue value={ltitle} setValue={setLTitle} placeholder="Mr/Mrs/Miss" className={Styles.InputValue}/>
                            </div>
                            <div>
                                <h2>Name</h2>
                                <InputValue value={lname} setValue={setLname} placeholder="Enter Name" className={Styles.InputValue} />
                            </div>
                            <div>
                                <h2>Parent Name</h2>
                                <InputValue value={lParentName} setValue={setLParentName} placeholder="Enter Parent Name" className={Styles.InputValue}/>
                            </div>
                            <div>
                                <h2>Mobile Number</h2>
                                <InputValue value={lMob} setValue={setLMob} placeholder="Enter Mobile Number" className={Styles.InputValue}/>
                            </div>
                            <div>
                                <h2>Email</h2>
                                <InputValue value={lEmail} setValue={setLEmail} placeholder="Enter Email" className={Styles.InputValue}/>
                            </div>
                            <div>
                                <h2>Pan Card</h2>
                                <InputValue value={lPan} setValue={setLPan} placeholder="Enter Pan Number" className={Styles.InputValue}/>
                            </div>
                            <div>
                                <h2>Adhaar</h2>
                                <InputValue value={lAdhaar} setValue={setLAdhaar} placeholder="Enter Adhaar Number" className={Styles.InputValue}/>
                            </div>
                            <div>
                                <h2>Full Address</h2>
                                <InputValue value={lAddress} setValue={setLAddress} placeholder="Enter Address" className={Styles.InputValue}/>
                            </div>                     
                        </div>
                    </details>


                        {/* Renter form */}
                        <details className={Styles.Details}>
                            <summary className={Styles.summary}>Renter Details</summary>
                            <div className={`flex justify-evenly flex-wrap ${Styles.innerSummary}`}>
                                <div>
                                    <h2>Title</h2>
                                    <InputValue value={rtitle} setValue={setRTitle} placeholder="Mr/Mrs/Miss" className={Styles.InputValue}/>
                                </div>
                                <div>
                                    <h2>Name</h2>
                                    <InputValue value={rname} setValue={setRname} placeholder="Enter Name" className={Styles.InputValue} />
                                </div>
                                <div>
                                    <h2>Parent Name</h2>
                                    <InputValue value={rParentName} setValue={setRParentName} placeholder="Enter Parent Name" className={Styles.InputValue}/>
                                </div>
                                <div>
                                    <h2>Mobile Number</h2>
                                    <InputValue value={rMob} setValue={setRMob} placeholder="Enter Mobile Number" className={Styles.InputValue}/>
                                </div>
                                <div>
                                    <h2>Email</h2>
                                    <InputValue value={rEmail} setValue={setREmail} placeholder="Enter Email" className={Styles.InputValue}/>
                                </div>
                                <div>
                                    <h2>Pan Card</h2>
                                    <InputValue value={rPan} setValue={setRPan} placeholder="Enter Pan Number" className={Styles.InputValue}/>
                                </div>
                                <div>
                                    <h2>Adhaar</h2>
                                    <InputValue value={rAdhaar} setValue={setRAdhaar} placeholder="Enter Adhaar Number" className={Styles.InputValue}/>
                                </div>
                                <div>
                                    <h2>Full Address</h2>
                                    <InputValue value={rAddress} setValue={setRAddress} placeholder="Enter Address" className={Styles.InputValue}/>
                                </div>                     
                            </div>
                        </details>


                    {/* create form for amenities details */}
                    <details className={`relative ${Styles.Details}`}>
                            <summary className={Styles.summary}>Amenity Details</summary>
                            <div className={``}>
                              <div className={`flex justify-evenly flex-wrap ${Styles.innerSummary}`}>
                                {Object.keys(assets).map((asset, index) =>

                                    <div className={Styles.amenityDetails}>
                                        <div className={Styles.amenityName} >{asset}</div>
                                        <div className={Styles.amenityButton}>
                                            <button  onClick={() => assets[asset] !== 0 && setAssets({ ...assets, [asset]: assets[asset] - 1 })}>-</button>
                                                <h2>{assets[asset]}</h2>
                                            <button className="qtyButton" onClick={() => setAssets({ ...assets, [asset]: assets[asset] + 1 })}>+</button>
                                        </div>
                                    </div>
                                    )}
                                </div>

                                {/* create assets */}
                                <div>
                                <div className="flex py-5 mb-12 justify-center">
                                    <InputValue value={addAmenity} setValue={setAddAmenity} placeholder="Enter Amenity Name" className={Styles.AmenityValue} />
                                    <button className={Styles.addAmenityButton} onClick={() => (setAssets({ ...assets, [addAmenity]: 0 }))}>Add</button>
                                </div>
                                
                                </div>

                            </div>
                    </details>
                        
                        {/* Property details*/}
                         <details className={Styles.Details}>
                            <summary className={Styles.summary}>Property Details</summary>
                            <div className={`flex justify-evenly flex-wrap ${Styles.innerSummary}`}>
                                <div>
                                    <h2>Building Type</h2>
                                    <InputValue placeholder="Residential/Commercial" value={buildingType} setValue={setBuildingType} className={Styles.InputValue}/>
                                </div>

                                <div>
                                    <h2>Property Type</h2>
                                    <InputValue placeholder="Vill/office/apartment" value={propertyType} setValue={setPropertyType} className={Styles.InputValue}/>
                                </div>

                                <div>
                                    <h2>Area Type</h2>
                                    <InputValue placeholder="Carpet area / plot area" value={areaType} setValue={setAreaType} className={Styles.InputValue}/>
                                </div>

                                <div>
                                    <h2>Area</h2>
                                    <InputValue placeholder="in sqft" value={area} setValue={setArea} className={Styles.InputValue}/>
                                </div>

                                <div>
                                    <h2>Pin code</h2>
                                    <InputValue placeholder="Enter Pin Code" value={pinCode} setValue={setPinCode} className={Styles.InputValue}/>
                                </div>

                                <div>
                                    <h2>Locality</h2>
                                    <InputValue placeholder="locality" value={locality} setValue={setLocality} className={Styles.InputValue}/>
                                </div>

                                <div>
                                    <h2>Building Name</h2>
                                    <InputValue placeholder="Building Name" value={buildingName} setValue={setBuildingName} className={Styles.InputValue}/>
                                </div>

                                <div>
                                    <h2>Floor Number</h2>
                                    <InputValue placeholder="Floor Number" value={floorNumber} setValue={setFloorNumber} className={Styles.InputValue}/>
                                </div>

                                <div>
                                    <h2>House Number</h2>
                                    <InputValue placeholder="House Number" value={houseNumber} setValue={setHouseNumber} className={Styles.InputValue}/>
                                </div>

                                <div>
                                    <h2>City Name</h2>
                                    <InputValue placeholder="City" value={propertyCity} setValue={setPropertyCity} className={Styles.InputValue}/>
                                </div>

                                <div>
                                    <h2>Complete Address</h2>
                                    <InputValue placeholder="Address" value={completeAddress} setValue={setCompleteAddress} className={Styles.InputValue}/>
                                </div>

                            </div>
                        </details>    
                        

                        {/* Rent details*/}
                        <details className={Styles.Details}>
                            <summary className={Styles.summary}>Rent Details</summary>
                            <div className={`flex justify-evenly flex-wrap ${Styles.innerSummary}`}>
                                <div>
                                    <h2>Agreement Period</h2>
                                    <InputValue placeholder="In months" value={rentPeriod} setValue={setRentPeriod} type="Number" className={Styles.InputValue}/>
                                </div>

                                <div>
                                    <h2>Start date</h2>
                                    <InputValue placeholder="Date" value={startDate} setValue={setStartDate} type="date" className={Styles.InputValue}/>
                                </div>

                                <div>
                                    <h2>Rent in Rs.</h2>
                                    <InputValue placeholder="Rs." value={rent} setValue={setRent} type="Number" className={Styles.InputValue}/>
                                </div>

                                <div>
                                    <h2>Maintenance Type</h2>
                                    <InputValue placeholder="With/Without" value={maintenanceType} setValue={setMaintenanceType} className={Styles.InputValue}/>
                                </div>

                                <div>
                                    <h2>Rent Payment date</h2>
                                    <InputValue placeholder="date" value={paymentDate} setValue={setPaymentDate} type="Number" className={Styles.InputValue} />
                                </div>

                                <div>
                                    <h2>Rent Increment</h2>
                                    <InputValue placeholder="rent increment in %" value={rentInc} setValue={setRentInc} className={Styles.InputValue}/>
                                </div>

                                <div>
                                    <h2>Security Deposit</h2>
                                    <InputValue placeholder="Security Deposit" value={securityDeposit} setValue={setSecurityDeposit} type="Number" className={Styles.InputValue}/>
                                </div>

                                <div>
                                    <h2>Notice Period</h2>
                                    <InputValue placeholder="in Days" value={noticePeriod} setValue={setNoticePeriod} type="Number" className={Styles.InputValue}/>
                                </div>

                                <div>
                                    <h2>Lock In Period</h2>
                                    <InputValue placeholder="in days" value={lockinPeriod} setValue={setLockInPeriod} type="Number" className={Styles.InputValue}/>
                                </div>
                            </div>
                        </details>
                    <button className={Styles.button} onClick={handleAgreement}>Create Form</button>
                </div>
                :
                <div>
                    <div className="flex justify-center">                    
                        <button className={Styles.functionButton} onClick={() => setLoading(true)}>Edit Again</button>
                        <button className={Styles.functionButton} onClick={handleDownload}>Download</button>                        
                    </div>

                    <div className={Styles.pdfDiv}>
                        <h1 className="font-bold text-2xl underline mt-9 mb-4">Rent Agreement</h1>
                        <h2 className="text-sm mb-5">This Lease Deed/Rent Agreement is executed at {city} on day, {agreementDate}.</h2>
                        <h2 className="font-semibold">BETWEEN</h2>
                        <p className="mb-5 text-xs">{ltitle} {lname}, S/O {lParentName} , having contact number {lMob}, Email id {lEmail}, PAN {lPan}, UID (ADHAAR NO.): {lAdhaar}, residing at {lAddress}.</p>
                        <h2 className="font-semibold">AND</h2>
                        <p className="mb-5 text-xs">{rtitle} {rname}, S/O {rParentName} , having contact number {rMob}, Email id {rEmail}, PAN {rPan}, UID (ADHAAR NO.): {rAdhaar}, residing at {rAddress}.</p>

                        <p className="mb-5 text-xs">For the purpose hereof, the Lessor and Lessee are referred to collectively as the "Parties" and individually the "Party" as the context may require.</p>


                        <p className="mb-5 text-xs">
                            Whereas the Lessor is the lawful owner in possession of the {propertyType} unit of {areaType} {area} Sq. Ft. bearing House No.{houseNumber} , situated on the Floor No {floorNumber} , Building known as {buildingName} , Address 1: {completeAddress},{pinCode} , Locality: {locality} , City: {propertyCity} ,{pinCode} . The expression Lessor and Lessee shall mean and include their respective heirs, successors, representatives, and assignees.
                        </p>
                        <p className="mb-5 text-xs">
                            Whereas on the request of the Lessee, the Lessor has agreed to let out the Demised Premises to the LESSEE, and the LESSEE has agreed to take it on rent for a period of {rentPeriod} Month(s) w.e.f. {startDate}  for its bonafide Residential use. Whereas the LESSOR has represented that the Demised Premises is free from all encumbrances and the LESSOR has a clean and unrestricted right to the Demised Premises. Whereas the Lessor and Lessee both represented that they are legally competent to enter into this Lease Agreement on the terms and conditions contained herein.
                        </p>

                        <h1 className="mb-5 text-xs font-semibold">Now, these present witnesses as under:</h1>
                        <ol className={`mb-5 text-xs ${Styles.Lines}`}>
                            <li>That the second party shall pay the monthly rent of Rs {rent} in respect of the Demised Premises located at 2354,12,chood,mamura,Noida,201301 .</li>

                            <li>The rent shall be paid per month in advance through advance rental on or before the {paymentDate} th day of each English calendar month. In case of TDS deduction, the Lessee shall furnish the TDS certificate to the Lessor at the end of each calendar quarter well within time so as to enable the Lessor to file his income tax return within the stipulated timeframe. Each of the parties will bear the consequences for any non-compliance on account of the tax liability of its part.</li>

                            <li>
                                That after the expiry of the Lease term, monthly rent shall be increased at the escalation of {rentInc} % or at mutually agreed by both parties at the time of renewal in the discussion as per prevailing market conditions.
                            </li>

                            <li>
                                That the second party has deposited a sum of Rs {securityDeposit} as interest free refundable security deposit, which will be refunded (Interest Free) at the time of vacating the Demised Premises after deducting any outstanding rent, electricity, water, sewerage and maintenance charges, bills, etc., if any, which are payable by the Lessee at the time of vacating the Demised Premises. Lessee shall have the right to adjust all the dues including but not limited to rent, maintenance, electricity, water, sewerage, etc. of the notice period from the Refundable Security deposit.
                            </li>

                            <li>
                                The notice period to be served by either party would be of {noticePeriod} Day(s). Either the LESSOR or the LESSEE may terminate this agreement without assigning any reasons whatsoever by giving one month's advance notice to the other party.
                            </li>

                            <li>
                                The Lessor will ensure that all outstanding bills/ charges on the above said demised premises on account of electricity, water, and any other incidentals prior to the start of lease from are settled and paid
                            </li>

                            <li>
                                Lock in period: Both the parties have agreed to set a lock-in period of {lockinPeriod} Month(s) during which neither the Lessor shall ask the Lessee to vacate the premises, nor the Lessee shall vacate the premises on his/her own during the Lock-in period. In spite of this mandatory clause, if the Lessee leaves the premises for whatsoever reason, he shall pay to the Lessor license fee for the remaining lock-in period at the rate of License Fees agreed upon in the Agreement. On the other hand, Lessor shall compensate the Lessee for loss and inconvenience caused to the Lessee if he has been asked to vacate the premises.

                            </li>

                            <li>
                                It is further agreed between the parties that in case of any dispute the Noida court shall have the exclusive jurisdiction over the disputes.
                            </li>

                            <li>
                                That the electricity and water charges after the start of the lease will be paid timely and regularly every month by the Lessee as per actual bills provided by the service provider. A copy of the payment receipts will be provided by the Lessee to the Lessor on demand. In the unlikely instance that the connection/s for electricity or water is disconnected due to non- payment or negligence of the LESSEE, the charges to restoring such connections shall be borne fully by the LESSEE and if not paid the same can be deducted from the security deposit provided to the Lessor.
                            </li>

                            <li>That the Lessor shall hand over the Premises to the Lessee in a habitable condition. The detailed list of items provided as part of this lease is enumerated as ANNEXURE 1 to this Deed.
                            </li>

                            <li>
                                That in case any damage is caused by the LESSEE to the aforesaid premises, fixtures, fittings, etc.(except normal wear and tear), the LESSEE shall be liable to make good the same to ensure that those is restored in the same condition as they were at the time of signing of this lease other than the changes made by the LESSEE with the consent of the LESSOR. In case of LESSEE fails to do so, LESSOR shall be entitled to deduct the costs of doing the same from the interest free security deposit.
                            </li>

                            <li>
                                That the Second Party shall have no right, to make any addition, alteration in the Demised Premises except furnishings. The Lessor shall not be liable to pay any charges against the expenses incurred by the Lessee for any additional furnishing at the Demised Premises.
                            </li>

                            <li>
                                That the Second Party shall have no right to sub-let the whole or part of Demised Premises to any other person or entity at any time. Further, The Lessor or his authorized representative has the right to visit the Demised Premises on any working day during business hours after taking the Lessee's permission.
                            </li>

                            <li>
                                That the Demised Premises shall be used by the Lessee in a cordial and civilized manner without causing any nuisance or disturbance to the other occupants of the building complex. The Lessee shall use the Demised Premises for its bonafide legal purposes and shall not do or cause any actions or activities of illegal, immoral, unsocial nature in the Demised Premises and will not create any nuisance to the neighborhood in any manner whatsoever.
                            </li>

                            <li>
                                That day-to-day repair such as fuses, leakage of water taps, replacement of defective MCBs, Bulbs, Tube lights, Tube light Fittings, connecting sanitary pipes, doors, door locks, etc. shall be borne by the Lessee at its own costs. However, major repairs such as leakage from the wall ceiling, etc. would be rectified by the Lessor on the request of Lessee.
                            </li>

                            <li>
                                That in case the Lessee defaults in payment of rent for any month or commits any breach of any of the terms and conditions of this deed, the LESSOR shall be entitled to get back the possession of the Demised Premises after providing reasonable notice to the Lessee.

                            </li>

                            <li>
                                That the Lessee shall make sure that all the payments shall have been made on regular basis by them to the Service Providers or Government Authorities on account of any services utilized by them or taxes/levies demanded by or payable to Government Authorities on account of their transactions. The Lessee shall be liable at all times even after vacation of the Demised Premises for dues if any arising of the tenure of occupation of the Lessee which is liable to be paid by the Lessee.
                            </li>

                            <li>

                                That after the expiry of this Lease Deed, if the LESSOR does not wish to renew it or to continue further, the Lessee is bound to vacate the Demised Premises immediately upon expiry of the lease to the Lessor in all good faith and handover the peaceful possession to the Lessor failing which the Lessee will pay damages at the rate of double the monthly rent as stipulated in this Deed.
                            </li>

                            <li>
                                That the Lessor/ his authorized agents shall acknowledge and give valid & duly stamped receipts as and when requested by the LESSEE as conclusive proof of rent payments on demand from the Lessee
                            </li>

                            <li>
                                This Deed shall be governed by and interpreted in accordance with the laws of India. All disputes, differences, disagreements, controversies or claims arising out of or in connection with this Deed, including the validity, effect, and interpretation thereof, shall, at the request of either party, be referred to the sole arbitrator mutually appointed by both the parties, who shall conduct the arbitration proceedings in English and in accordance with the provisions of the Arbitration and Conciliation Act, 1996, or any amendment or statutory modification or replacement or substitution thereof, Any award made by the arbitrator shall be final and binding on the Parties. The cost and expenses of the arbitration proceedings, including fees of the arbitrators, shall be borne equally by the Parties. The venue of arbitration shall be as mutually decided by the parties.

                            </li>

                            <li>
                                Without any prejudice to a Party's other rights and claims under this Lease or otherwise, if one party breaches any of its representations, obligations, warranties, covenants or undertakings or violates any provision hereunder, it shall indemnify and keep the other Party and/or service providers harmless against all direct damages and costs suffered or borne by it or them thereby including but not limited to costs incurred in defending all claims/actions, or proceedings that may arise or may be otherwise necessary to ensure exclusive, quiet and peaceful access, occupation and use of the Leased Premises in accordance with this Deed. Without prejudice to other rights enjoyed by either Party (non- defaulting Party) under the Deed and Applicable Laws, the other Party (Defaulting Party) shall be responsible for and will indemnify against all claims, demands, suits, proceedings, judgments, direct damage, and relevant costs that the non-defaulting Party may suffer or incur in connection with loss of life and/or personal injury to the occupants of the Leased Premises and/or damage to the Building if the same arise from any wrongful/negligent act or omission of the defaulting Party.

                            </li>

                            <li>
                                Force Majeure: If the whole or any part of the Demised Premises shall at any time during the term of the lease be destroyed or damaged due to any force majeure circumstances including storm, tempest, flood, Act of God, an act of terrorism, war or any other irresistible force or the Lessee is deprived of the use of the Demised Premises for reasons not attributable to the Lessee, the Lessor hereby undertakes to restore the Demised Premises as expeditiously as possible or, as the case may be, to remove the impediment in its use and occupation as expeditiously as possible. Notwithstanding the foregoing, upon the happening of any such event as aforesaid, the Lessee shall not be liable to pay Lease Rent during the period the Lessee is deprived of the use of the Demised Premises or any part thereof. The Lessee shall also have the option to terminate the Lease after the event by giving one month's notice and without payment of any rent in lieu thereof and without incurring any liability to pay any other amount whatsoever to the Lessor.

                            </li>

                            <li>
                                Notice: Any notice or communication to be addressed by one party to the other shall be in writing and shall be served at the addresses as given hereinabove by registered post with AID or at such other addresses as may be notified in writing by one party to another. Any change in such address shall be promptly notified to the other party in writing.

                            </li>

                            <li>
                                This Lease Agreement constitutes the entire agreement concerning the subject matter hereof between the Lessor and the Lessee and supersedes any prior representations or agreements, whether written or oral between the Lessor and Lessee. No modification or amendment of this Agreement or waiver of any of its provisions shall be binding upon the parties hereto unless made in writing and duly signed by both Parties.
                            </li>
                        </ol>

                        <h1 className="mb-5 text-xs font-bold">ANNEXURE 1</h1>
                        <p className="mb-5 text-xs">
                            Items provided by the LESSOR at the time of execution of Lease Deed between the LESSOR and the LESSEE are as follows:
                        </p>
                
                        {Object.keys(assets).map((asset) => {
                            if (assets[asset] > 0) {
                                return (
                                    <div key={asset} className="flex justify-center justify-between w-80 m-auto">
                                        <div className="mb-5 text-xs">{asset}</div>
                                        <div className="mb-5 text-xs">
                                            {assets[asset]}
                                        </div>
                                    </div>
                                );
                            }
                            return null; // If assets[asset] is not greater than 0, you can return null
                        })}

                        <div className="flex  my-24 justify-evenly">
                            <div className="mb-5 text-xs">
                                <div>
                                    ----------------------
                                </div>
                                <div>Lessor Sign</div>
                                <div>Date : / /</div>
                            </div>
                            <div className="mb-5 text-xs">
                                <div>
                                    ----------------------
                                </div>
                                <div>Lessee Sign</div>
                                <div>Date : / /</div>
                            </div>
                        </div>
                    </div>

                </div>
            }
        </div>
        </>
    );
}

export default RentAgreement;