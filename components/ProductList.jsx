import styles from '../styles/ProductList.module.css';
import ProductCard from './ProductCard';

const ProductList = () => {
  return (
  <div className={styles.container}>
      <h1 className={styles.title}>The Spiciest Chops in Lagos</h1>
      <p className={styles.desc}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisi nulla, fringilla nec mauris sed, 
      commodo semper sapien. Phasellus facilisis, felis sed hendrerit malesuada, arcu lorem fermentum mauris, 
      a finibus metus enim non quam. Suspendisse eleifend id arcu eu condimentum.
      </p>
      <div className={styles.wrapper}>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
      </div>
  </div>
  );
};

export default ProductList;
