import FeaturesSectionCard from "./FeaturesSectionCard";
import Styles from "./FeaturedProperties.module.css";
import data from '../../../content/FeaturedProperties/featuredProperties.json'
const FeaturedProperties = () => {
  return (
    <>
      <h1 className={`${Styles.heading} mt-24`}>Featured Properties</h1>
      <hr className={`${Styles.underline}`} />
      <FeaturesSectionCard data={data} />
    </>
  )
};

export default FeaturedProperties;
