import la_hands from "../../assets/whyChooseUsIcons/la_hands-helping.png";
import account_secure from "../../assets/whyChooseUsIcons/mdi_account-secure-outline.png";
import list_icon from "../../assets/whyChooseUsIcons/ion_list-sharp.png";


const whyChooseUsContent = () => {
    return ( 
        {
            "Affordable Listings":{   
                                        "label":"Lorem ipsem mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.",
                                        "icon": list_icon
                                    },
            "Safe Payments":{   
                                    "label":  "Lorem ipsem mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.",
                                   "icon": account_secure
                            },
            "110% Satisfaction":{   
                                "label":  "Lorem ipsem mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.",
                                "icon": la_hands
                                },
        }
     );
}
 
export default whyChooseUsContent;