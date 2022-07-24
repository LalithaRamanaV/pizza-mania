import styles from "../styles/Footer.module.css";
import Image from "next/image"

const  Footer = () => {
  return (
    <div className={styles.container}>
     <div className={styles.item}>
     <Image src="/img/featured02.png" layout="fill" objectFit="cover"alt="" />
     </div>
     <div className={styles.item}>
      <div className={styles.card}>
      <h2 className={styles.motto}>Hurray! Well baked pizzas are here</h2>
      </div>
       <div className={styles.card}>
        <h1 className={styles.title}>Find our restaurant</h1>
        <p className={styles.text}>
        Near Venkatesware Temple,
        Asilmetta
        <br/> Visakhapatnam
        <br/> 012345678
        </p>
        <p className={styles.text}>
        4th lane,
        Beach Road
        <br/> Visakhapatnam
        <br/> 012345678
        </p>
        <p className={styles.text}>
        4th lane,
        Near RK Beach
        <br/> Visakhapatnam
        <br/> 012345678
        </p>
        <p className={styles.text}>
        MVP Colony,
        Near laddu gopal
        <br/> Visakhapatnam
        <br/> 012345678
        </p>
       </div>
        <div className={styles.card}>
         <h1 className={styles.title}>Restaurant timings</h1>
          <p className={styles.text}>
          Monday until Friday
          <br/> 9:00AM-10:00PM
          </p>
          <p className={styles.text}>
          Saturday and Sunday
          <br/> 2:00PM-8:00PM
          </p>
        </div>
     </div>
    </div>
  )
}
export default Footer