import Tippy from '@tippyjs/react/headless';
import styles from './Menu.module.scss';
import { Wrapper as PopoverWrapper } from '@/components/Popover';
import MenuItem from './MenuItem';

function Menu({ children, items = [] }) {
  const renderItems = () => {
    return items.map((item, index) => <MenuItem key={index} data={item} />);
  };

  return (
    <Tippy
      delay={[0, 700]}
      placement="bottom"
      offset={[-80, 10]}
      interactive
      render={(attrs) => (
        <div className={styles.menuList} tabIndex="-1" {...attrs}>
          <PopoverWrapper className={styles.menuPopover}>{renderItems()}</PopoverWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
