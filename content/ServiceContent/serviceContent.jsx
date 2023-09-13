import RentAgreementImage from "../../assets/serviceIcons/rentAgreement.svg";
import receiptImage from "../../assets/serviceIcons/receipt.svg";
import interiorImage from "../../assets/serviceIcons/interior.svg";
import HomeLoanImage from "../../assets/serviceIcons/HomeLoan.svg";
import legalImage from "../../assets/serviceIcons/legal.svg";

const serviceContent = () => {
    return ( 
        {
            "EMI Calculator":{   
                        "points": ["Calculate Your Monthly EMIs",
                                "Find Out the Total Amount",
                                "Customized EMIs"],
                        "iconFile": "https://cdn-icons-png.flaticon.com/128/9935/9935389.png",
                        "iconBackgroundColor":"#FFF0D8",
                        "path": "/services/EMI",
                        "buttonName": "Calculate"
                    },
            "Rent Agreement":{   
                                "points": ["Super Quick & Easy",
                                        "Stamped & E-Signed",
                                        "Delivered Directly in Mailbox"],
                                "iconFile": RentAgreementImage,
                                "iconBackgroundColor":"rgba(72, 145, 211, 0.11)",
                                "path": "/services/RentAgreement",
                                "buttonName": "Create"
                            },
            "Online Rent Receipt Generator":{   
                                                "points": ["Instant Download and Print",
                                                        "Customizable for Monthly/Quarterly",
                                                        "Accurate Calculations"],
                                                "iconFile": receiptImage,
                                                "iconBackgroundColor":"#F3EFEA",
                                                "path": "/calculate-emi",
                                                "buttonName": "Generate"
                                            },
            "Interiors & Furnishing":{   
                                        "points": ["Lowest Prices Guaranteed",
                                                "10-Year Warranty",
                                                "Timely Delivery Assurance"],
                                        "iconFile": interiorImage,
                                        "iconBackgroundColor":"#FFF0EF",
                                        "path": "/calculate-emi",
                                        "buttonName": "Visit"
                                    },
            "Home Loan":{   
                                "points": ["Super Quick & Easy",
                                        "Stamped & E-Signed",
                                        "Delivered Directly in Mailbox"],
                                "iconFile": HomeLoanImage,
                                "iconBackgroundColor":"#EFE7DC",
                                "path": "/calculate-emi",
                                "buttonName": "Apply"
                            },
            "Legal & Registration":{   
                                "points": ["End to end legal assistance in property related matters.",
                                        ],
                                "iconFile": legalImage,
                                "iconBackgroundColor":"#FFF0D8",
                                "path": "/calculate-emi",
                                "buttonName": "Register"
                            },                
        
        }
     );
}
 
export default serviceContent;