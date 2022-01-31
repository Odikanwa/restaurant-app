import Image from 'next/image';
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
  <div className={styles.container}>
    <div className={styles.item}>
      <div className={styles.callButton}>
        <Image src='/img/phoneIcon.png' alt='phone image' width='30px' height='30px'/>
      </div>

      <div className={styles.texts}>
        <div className={styles.text}>ORDER NOW!</div>
        <div className={styles.text}>234 010 0011</div>
      </div>
    </div>

    <div className={styles.item}>
      <ul className={styles.list}>
        <li className={styles.listItem}>Home  </li>
        <li className={styles.listItem}>Products</li>
        <li className={styles.listItem}>Menu</li>
        <div className={styles.logo}>Avichops</div>
        <li className={styles.listItem}>Events</li>
        <li className={styles.listItem}>Blog</li>
        <li className={styles.listItem}>Contact</li>
      </ul>
    </div>

    <div className={styles.item}>
      <div className={styles.cart}>
    <Image src='/img/cartIcon.png' alt='Cart icon' width='30px' height='30px' />
    <div className={styles.counter}>3</div>
    </div>
  </div>
  </div>
  )
}

export default Navbar;
