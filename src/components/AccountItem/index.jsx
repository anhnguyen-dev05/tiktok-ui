import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styles from './AccountItem.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '@/components/Image';

function AccountItem({ data }) {
  return (
    <Link to={`/profile/${data.nickname}`} className={styles.wrapper}>
      <Image className={styles.avatar} src={data.avatar} alt={data.fullName} />
      <div className={styles.info}>
        <p className={styles.name}>
          <span>{data.fullName}</span>
          {data.tick && <FontAwesomeIcon className={styles.check} icon={faCheckCircle} />}
        </p>
        <span className={styles.username}>{data.nickname}</span>
      </div>
    </Link>
  );
}

export default AccountItem;
