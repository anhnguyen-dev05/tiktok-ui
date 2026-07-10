import clsx from 'clsx';
import Button from '@/components/Button';
import styles from './Menu.module.scss';

function MenuItem({ data, onClick }) {
  const classes = clsx(styles.menuItem, {
    [styles.separate]: data.separate,
  });

  return (
    <Button className={classes} to={data.to} leftIcon={data.icon} onClick={onClick}>
      {data.title}
    </Button>
  );
}

export default MenuItem;
