import styles from './Popover.module.scss';

function wrapper({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}

export default wrapper;
