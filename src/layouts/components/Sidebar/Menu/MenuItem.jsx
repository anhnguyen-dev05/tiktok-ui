import clsx from 'clsx';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';

function MenuItem({ title, to, icon, activeIcon }) {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <div
          className={clsx(styles.menuItem, {
            [styles.active]: isActive,
          })}
        >
          {isActive ? activeIcon : icon}
          <span className={styles.title}>{title}</span>
        </div>
      )}
    </NavLink>
  );
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.node,
  activeIcon: PropTypes.node,
};

export default MenuItem;
