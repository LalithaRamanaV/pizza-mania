import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard"

const PizzaList = ( {pizzaList}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>The BEST PIZZA in City!!</h1>
      <p className={styles.desc}>
      We deliver fresh pizza with various varities according to the customers taste and choice and also which is devlivered within half an hour.
    </p>
      <div className={styles.wrapper}>
      {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;