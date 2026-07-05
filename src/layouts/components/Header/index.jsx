import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faCircleNotch, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '@/assets';

function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <img src={images.logo} alt="Tiktok"></img>
          <strong>TikTok</strong>
        </div>

        <div className={styles.search}>
          <input placeholder="Search accounts and videos" />
          <button className={styles.clear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          {/* <FontAwesomeIcon className={styles.loading} icon={faCircleNotch} spin spinReverse /> */}

          <button className={styles.searchBtn}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>

        <div className={styles.actions}></div>
      </div>
    </header>
  );
}

export default Header;
