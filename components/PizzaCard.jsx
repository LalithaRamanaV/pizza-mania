import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza0.png" alt="image" width="500" height="500" />
      <h1 className={styles.title}>Fresh Pan Pizza</h1>
      <span className={styles.price}>$25</span>
      <p className={styles.desc}>
      Fresh pizza which is made delicious with extra toppings.
      </p>
    </div>
  );
};

export default PizzaCard;