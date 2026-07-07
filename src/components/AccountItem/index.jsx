import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccountItem.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function AccountItem() {
  return (
    <div className={styles.wrapper}>
      <img
        className={styles.avatar}
        src="https://p19-common-sign.tiktokcdn.com/tos-alisg-avt-0068/a39ed4e583c4d259d6fcb3c53f4d8280~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=d64962d0&x-expires=1783490400&x-signature=72N4zWiQF7rkElvVBao9c5gWkqU%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my2"
        alt="Hoaa"
      />
      <div className={styles.info}>
        <p className={styles.name}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={styles.check} icon={faCheckCircle} />
        </p>
        <span className={styles.username}>nguyenvana</span>
      </div>
    </div>
  );
}

export default AccountItem;
