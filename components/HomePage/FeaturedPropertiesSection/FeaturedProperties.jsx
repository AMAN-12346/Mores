import Styles from "./FeaturedProperties.module.css";
import data from '../../../content/FeaturedProperties/featuredProperties.json'
import FeaturedSection from "./FeaturedSection";
const FeaturedProperties = () => {
  return (
    <>
      <h1 className={`${Styles.heading} mt-15 `}>Featured Properties</h1>
      <hr className={`${Styles.underline}`} />
      <FeaturedSection data={data} />
    </>
  )
};

export default FeaturedProperties;
