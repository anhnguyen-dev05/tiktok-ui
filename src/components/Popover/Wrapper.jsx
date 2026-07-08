import clsx from 'clsx';
import styles from './Popover.module.scss';

function wrapper({ children, className }) {
  return <div className={clsx(styles.wrapper, className)}>{children}</div>;
}

export default wrapper;
