import clsx from 'clsx';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

function Button({ to, href, variant, size, disable, children, rounded, className, ...passProps }) {
  let Comp = 'button';
  const props = {
    ...passProps,
  };

  if (disable) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  const classes = clsx(styles.wrapper, styles[variant], styles[size], className, {
    [styles.disable]: disable,
    [styles.rounded]: rounded,
  });

  return (
    <Comp className={classes} {...props}>
      <span>{children}</span>
    </Comp>
  );
}

export default Button;
