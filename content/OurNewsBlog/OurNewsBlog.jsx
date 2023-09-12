import blogImg1 from '../../assets/Images/OurNewsBlog/Image1.png';
import blogImg2 from '../../assets/Images/OurNewsBlog/img2.png';
import blogImg3 from '../../assets/Images/OurNewsBlog/img3.png';

const OurBlogContent = () => {
    return ( 
        {
            "blog1":{   
                        "title": "Demand for flats rising day by day",
                        "story": "This increasing demand for flats is reshaping the real estate landscape and influencing construction trends, with developers focusing on creating functional, comfortable, and efficient living spaces.",
                        "imageFile": blogImg1,
                    },
            "blog2":{   
                        "title": "Governmnet Plans to reduce Property taxes",
                        "story": "various strategies to reduce property taxes in order to alleviate the financial burden on property owners and stimulate economic growth",
                        "imageFile": blogImg2,
                    },
            "blog3":{   
                        "title": "New Construction Planning",
                        "story": "The construction sector faces burgeoning demand in line with the launch of the ambitious National Infrastructure Pipeline (NIP) and the government's aim to make India a $5 trillion economy by 2024",
                        "imageFile": blogImg3,
                    },        
        }
     );
}
 
export default OurBlogContent;