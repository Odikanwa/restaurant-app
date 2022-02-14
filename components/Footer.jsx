import Image from 'next/image';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
  <div className={styles.container}>

      <div className={styles.item}>
        <Image src='/img/footerImg.jpg' alt='Image at footer' layout='fill'/>
      </div>

      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            HAHA ... AVICHOPS NEVER DISSAPOINTS. SIMPLY IRRESISTIBLE!
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANT</h1>
          <p className={styles.text}>
             101 Odikanwa Road, Ikoyi
             <br/> Lagos, 101233
             <br /> (234) 012 9001
          </p>
          <p className={styles.text}>
             19B Chimezie Road, Yaba
             <br/> Lagos, 101233
             <br /> (234) 012 9002
          </p>
          <p className={styles.text}>
             27 St. Michaels St., Ikeja
             <br/> Lagos, 101233
             <br /> (234) 012 9003
          </p>
          <p className={styles.text}>
             123 ODK Road, Ikotun
             <br/> Lagos, 101233
             <br /> (234) 012 9004
          </p>
        </div>
        <div className={styles.card}>
        <h1 className={styles.title}>WORKING HOURS</h1>
        <p className={styles.text}>
          MONDAY UNTIL FRIDAY
          <br/> 9:00 - 22:00
        </p>
        <p className={styles.text}>
          SATURDAY - SUNDAY
          <br/> 12:00 - 24:00
        </p>
        </div>
      </div>

  </div>
  )
};

export default Footer;
