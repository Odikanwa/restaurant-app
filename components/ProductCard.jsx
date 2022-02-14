import styles from '../styles/ProductCard.module.css'
import Image from 'next/image';


const ProductCard = () => {
  return (
  <div className={styles.container}>
      <Image src='/img/h1.png' alt='Kachi Rolls' height='500px' width='500px'/>
      <h1 className={styles.title}>KACHI ROLLS</h1>
      <span className={styles.price}>$14.90</span>
      <p className={styles.desc}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
  </div>
  );
};

export default ProductCard;
