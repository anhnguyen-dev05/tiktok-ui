import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faUser,
  faCoins,
  faGear,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import Button from '@/components/Button';
import styles from './Header.module.scss';
import logo from '@/assets/images/logo.svg';
import Menu from '@/components/Menu';
import Image from '@/components/Image';
import { UploadIcon, MessageIcon, InboxIcon } from '@/components/Icons';
import Search from '../Search';
import routesConfig from '@/config/routes';

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
  const currentUser = true;

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
          <Link to={routesConfig.home} className={styles.logoLink}>
            <img src={logo} alt="TikTok" />
          </Link>
        </div>

        <Search />

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
