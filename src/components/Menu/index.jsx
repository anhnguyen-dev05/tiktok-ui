import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import { Wrapper as PopoverWrapper } from '@/components/Popover';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';

function Menu({ children, items = [], hideOnClick = false, onChange = () => {} }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;

      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  return (
    <Tippy
      delay={[0, 700]}
      placement="bottom"
      offset={[-80, 10]}
      hideOnClick={hideOnClick}
      interactive
      render={(attrs) => (
        <div className={styles.menuList} tabIndex="-1" {...attrs}>
          <PopoverWrapper className={styles.menuPopover}>
            {history.length > 1 && (
              <Header
                title="language"
                onBack={() => {
                  setHistory((prev) => prev.slice(0, history.length - 1));
                }}
              />
            )}
            <div className={styles.menuBody}>{renderItems()}</div>
          </PopoverWrapper>
        </div>
      )}
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
