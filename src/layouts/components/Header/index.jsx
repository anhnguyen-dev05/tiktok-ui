import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faCircleNotch, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';

import Button from '@/components/Button';
import styles from './Header.module.scss';
import images from '@/assets';
import { Wrapper as PopoverWrapper } from '@/components/Popover';
import AccountItem from '@/components/AccountItem';

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

  return (
    <header className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <img src={images.logo} alt="Tiktok"></img>
          <strong>TikTok</strong>
        </div>

        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={styles.searchResult} tabIndex="-1" {...attrs}>
              <PopoverWrapper>
                <h4 className={styles.searchTitle}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopoverWrapper>
            </div>
          )}
        >
          <div className={styles.search}>
            <input placeholder="Search accounts and videos" />
            <button className={styles.clear}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={styles.loading} icon={faCircleNotch} spin spinReverse />

            <button className={styles.searchBtn}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>

        <div className={styles.actions}>
          <Button variant="text">Upload</Button>
          <Button variant="primary">Log in</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
