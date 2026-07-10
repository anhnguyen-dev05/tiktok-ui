import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faCircleNotch,
  faMagnifyingGlass,
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faUser,
  faCoins,
  faGear,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from '@/components/Button';
import styles from './Header.module.scss';
import logo from '@/assets/images/logo.svg';
import { Wrapper as PopoverWrapper } from '@/components/Popover';
import AccountItem from '@/components/AccountItem';
import Menu from '@/components/Menu';
import Image from '@/components/Image';
import { UploadIcon, MessageIcon, InboxIcon } from '@/components/Icons';

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'Tiếng việt',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
  },
];

function Header() {
  const [searchResult, setSearchResult] = useState([]);
  const currentUser = true;

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

  // Handle logic
  const handleMenuChange = (menuItem) => {
    console.log(menuItem);
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '/Hai thu gian',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get coins',
      to: '/coin',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Settings',
      to: '/settings',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Log out',
      to: '/settings',
      separate: true,
    },
  ];

  return (
    <header className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <img src={logo} alt="TikTok" />
        </div>

        <HeadlessTippy
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
        </HeadlessTippy>

        <div className={styles.actions}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 300]} content="Upload video" placement="bottom">
                <button className={styles.actionBtn}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 300]} content="Message" placement="bottom">
                <button className={styles.actionBtn}>
                  <MessageIcon width="2.45rem" />
                </button>
              </Tippy>
              <Tippy delay={[0, 300]} content="Activity" placement="bottom">
                <button className={styles.actionBtn}>
                  <InboxIcon />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button variant="text">Upload</Button>
              <Button variant="primary">Log in</Button>
            </>
          )}

          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <Image
                className={styles.userAvatar}
                alt="Hai thu gian"
                src="https://p19-common-sign.tiktokcdn.com/tos-alisg-avt-0068/a39ed4e583c4d259d6fcb3c53f4d8280~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=d64962d0&x-expires=1783490400&x-signature=72N4zWiQF7rkElvVBao9c5gWkqU%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my2"
              />
            ) : (
              <button className={styles.moreBtn}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
