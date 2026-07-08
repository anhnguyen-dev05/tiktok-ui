import clsx from 'clsx';
import Button from '@/components/Button';
import styles from './Menu.module.scss';

function MenuItem({ data }) {
  return (
    <Button className={clsx(styles.menuItem)} to={data.to} leftIcon={data.icon}>
      {data.title}
    </Button>
  );
}

export default MenuItem;
