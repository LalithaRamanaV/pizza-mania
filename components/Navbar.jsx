import Image from "next/image"
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.container}>
     <div className={styles.item}>
      <div className={styles.callButton}>
       <Image src="/img/telephone.png" alt="" width="32" height="32"/>
      </div>
      <div className={styles.texts}>
        <div className={styles.text}>Order Now!</div>
        <div className={styles.text}>9876543210</div>
      </div>
     </div>
     <div className={styles.item}>
      <ul className={styles.list}>
        <li className={styles.listItem}>Homepage</li>
        <li className={styles.listItem}>Products</li>
        <li className={styles.listItem}>Menu</li>
        <li className={styles.listItem}>Event</li>
        <li className={styles.listItem}>Contact</li>
        <li className={styles.listItem}>Blog</li>
      </ul>
     </div>
     <div className={styles.item}></div>
    </div>
  )
}

export default Navbar