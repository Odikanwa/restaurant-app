import styles from '../styles/Featured.module.css';
import Image from "next/image";
import { useState } from 'react';

const Featured = () => {

    const [index, setIndex] = useState(0);

    const handleArrow = (direction) => {
        if(direction === 'l'){
            setIndex(index !== 0 ? index-1 : 2)
        }
        if(direction === 'r'){
            setIndex(index !== 2 ? index+1 : 0)
        }
    }

    const images = [
        '/img/featured.png',
        '/img/featured1.png',
        '/img/featured2.png',
    ]
  return (
    <div className={styles.container}>
        <div className={styles.arrowContainer} style={{left:0}} onClick={() => handleArrow('l')}>
        <Image src='/img/arrowL.png' alt='Arrow left' layout='fill' objectFit='contain'/>
        </div>

        <div>
            <div></div>
        </div>

        <div className={styles.wrapper} style={{transform:`translate(${-100*index}vw)`}}>
                {images.map((img, i) => (
                    <div className={styles.imgContainer} key={i}>
                    <Image src={img} alt='featured image' layout='fill' objectFit='contain'/>
                    </div>
                    ))}
        </div>

        <div className={styles.arrowContainer} style={{right:0}} onClick={() => handleArrow('r')}>
        <Image src='/img/arrowR.png' alt='Arrow right' layout='fill' objectFit='contain'/>
        </div>
    </div>
  )
}

export default Featured;
