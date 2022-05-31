import styles from './styles.module.css';

const SphereComponent = () => {
  return (
    <section className={styles.stage}>
      <figure className={styles.ball}>
        <span className={styles.shadow}></span>
      </figure>
    </section>
  );
};

export default SphereComponent;
