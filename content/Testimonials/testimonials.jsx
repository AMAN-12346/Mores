import img1 from '../../assets/Images/Testimonials/img1.jpg';
import img2 from '../../assets/Images/Testimonials/img2.jpg';
import img3 from '../../assets/Images/Testimonials/img3.jpg';

const testimonialsContent = () => {
    return ( 
        {
            "testimonial1":{   
                        "name": "Anuj Chaudhary",
                        "city": "Noida",
                        "story": "We are so lucky that we found Trevor Gill of the Joe Hayden Real Estate Team, he made buying our first home an enjoyable and easy experience. Quick to respond and will do anything to help, we highly recommend Mores!",
                        "imageFile": img1,
                    },
            "testimonial2":{   
                        "name": "Priyanshu Nigam",
                        "city": "Delhi",
                        "story": "I had just started my search for a home, not really expecting to buy right away, BUT Trevor Gill of the Joe Hayden Real Estate Team listened to my needs and as soon as he found one he contacted me. I looked, knowing already it would meet my needs, placed an offer and boom Trevor worked back and forth with sellers agent, to get the best offer. Not the one that I wished, but one that would work out.",
                        "imageFile": img2,
                    },
            "testimonial3":{   
                        "name": "Vaibhavi Srivastava",
                        "city": "Mumbai",
                        "story": "We'd never bought a house before and weren't sure what to expect. Joe Hayden had been highly recommended to us. Let me tell you he (and his team) EXCEEDED our expectations. He has a very kind demeanor, knows his stuff when it comes to homes, resale, inspections, specs, etc.",
                        "imageFile": img3,
                    },        
        }
     );
}
 
export default testimonialsContent;