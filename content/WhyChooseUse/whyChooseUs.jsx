import la_hands from "../../assets/whyChooseUsIcons/la_hands-helping.svg";
import account_secure from "../../assets/whyChooseUsIcons/mdi_account-secure-outline.svg";
import list_icon from "../../assets/whyChooseUsIcons/ion_list-sharp.svg";


const whyChooseUsContent = () => {
    return ( 
        {
            "Affordable Listings":{   
                                        "label":"We offer housing solutions within the financial reach of individuals and families with lower incomes",
                                        "icon": list_icon
                                    },
            "Safe Payments":{   
                                    "label":  "Secure and protected transactions where the transfer of funds is conducted with minimal risk of fraud",
                                   "icon": account_secure
                            },
            "110% Satisfaction":{   
                                "label":  "Customer Satisfaction is our Prime Goal, we are here for you, your satisfaction is our earning",
                                "icon": la_hands
                                },
        }
     );
}
 
export default whyChooseUsContent;