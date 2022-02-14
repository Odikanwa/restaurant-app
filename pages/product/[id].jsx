import styles from '../../styles/Product.module.css'
import Image from 'next/image';
import { useState } from 'react';

const Product = () => {
    const [size, setSize] = useState(0);
    const chops = {
        id: 1,
        img: '/img/springRolls.png',
        name: 'SPRING ROLLS',
        price: [19.9, 23.9, 27.9],
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut dignissim tortor. Ut dictum ante sed justo rhoncus volutpat. Vivamus fermentum metus non porta maximus.'
    }
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.imgContainer}>
            <Image src={chops.img} alt='samosa' layout='fill' objectFit='contain'/>
            </div>
        </div>

        <div className={styles.right}>
            <h1 className={styles.title}>{chops.name}</h1>
            <span className={styles.price}>${chops.price[size]}</span>
            <p className={styles.desc}>{chops.desc}</p>
            <h3 className={styles.choose}>Choose the Size</h3>
            <div className={styles.sizes}>
            <div className={styles.size} onClick={() => setSize(0)}>
                <Image src='/img/sizeImg.png' alt='size icon' layout='fill' objectFit='contain'/>
                <span className={styles.number}>Small</span>
            </div>
            <div className={styles.size} onClick={() => setSize(1)}>
            <Image src='/img/sizeImg.png' alt='size icon' layout='fill' objectFit='contain'/>
                <span className={styles.number}>Medium</span>
            </div>
            <div className={styles.size} onClick={() => setSize(2)}>
            <Image src='/img/sizeImg.png' alt='size icon' layout='fill' objectFit='contain'/>
                <span className={styles.number}>Large</span>
            </div>
            </div>
            <h3 className={styles.choose}>Choose Additional Ingredients</h3>
            <div className={styles.ingredients}>
                <div className={styles.option}>
                    <input type='checkbox' id='double' name='double' className={styles.checkbox}/>
                    <label htmlFor='double'>Double Ingredients</label>
                </div>
                <div className={styles.option}>
                    <input type='checkbox' id='cheese' name='cheese' className={styles.checkbox}/>
                    <label htmlFor='cheese'>Extra Cheese</label>
                </div>
                <div className={styles.option}>
                    <input type='checkbox' id='spicy' name='spicy' className={styles.checkbox}/>
                    <label htmlFor='spicy'>Spicy Sauce</label>
                </div>
                <div className={styles.option}>
                    <input type='checkbox' id='garlic' name='garlic' className={styles.checkbox}/>
                    <label htmlFor='garlic'>Garlic Sauce</label>
                </div>
            </div>
            <div className={styles.add}>
                <input type='number' defaultValue={0} className={styles.quantity} />
                <button className={styles.button}>Add to Cart</button>
            </div>
        </div>
    </div>
  
  );
};

export default Product;
