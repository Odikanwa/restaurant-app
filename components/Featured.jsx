import styles from '../styles/Featured.module.css';
import Image from "next/image";

const Featured = () => {
    const images = [
        '/img/featured.png',
        '/img/featured1.png',
        '/img/featured2.png',
    ]
  return (
    <div className={styles.container}>
        <div className={styles.arrowContainer}>
        <Image src='/img/arrowL.png' alt='Arrow left' layout='fill'/>
        </div>

        <div className={styles.wrapper}>
            <div className={styles.imgContainer}>
                {images.map((img, i) => (
                    <Image src='/img/featured.png' key={i} alt='featured image' layout='fill' />
                    ))}
            </div>
        </div>

        <div className={styles.arrowContainer}>
        <Image src='/img/arrowR.png' alt='Arrow right' layout='fill'/>
        </div>
    </div>
  )
}

export default Featured;
