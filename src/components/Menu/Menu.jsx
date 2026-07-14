import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import PropTypes from 'prop-types';
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

  const handleBack = () => {
    setHistory((prev) => prev.slice(0, history.length - 1));
  };

  const renderResult = (attrs) => (
    <div className={styles.menuList} tabIndex="-1" {...attrs}>
      <PopoverWrapper className={styles.menuPopover}>
        {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
        <div className={styles.menuBody}>{renderItems()}</div>
      </PopoverWrapper>
    </div>
  );

  // Reset to first page
  const handleResetMenu = () => {
    setHistory((prev) => prev.slice(0, 1));
  };

  return (
    <Tippy
      delay={[0, 700]}
      placement="bottom"
      offset={[-80, 10]}
      hideOnClick={hideOnClick}
      interactive
      render={renderResult}
      onHide={handleResetMenu}
    >
      {children}
    </Tippy>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  hideOnClick: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Menu;
