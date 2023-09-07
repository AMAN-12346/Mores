import Residential from '../../assets/Images/OurServices/img1.jpg';
import Commercial from '../../assets/Images/OurServices/img2.jpg';
import Penthouse from '../../assets/Images/OurServices/img3.jpg';
import Villa from '../../assets/Images/OurServices/img4.jpg';
import Apartment from '../../assets/Images/OurServices/img5.jpg';
 
const OurServiceContent = () => {
    return ( 
        {
            "Residential": Residential,
            "Commercial": Commercial,
            "Penthouse": Penthouse,
            "Villa": Villa,
            "Apartment": Apartment
        }
     );
}
 
export default OurServiceContent;