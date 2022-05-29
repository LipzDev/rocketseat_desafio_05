import Link from 'next/link';
import commonStyles from '../../styles/common.module.scss';
import styles from './header.module.scss';

const Header = (): JSX.Element => {
  return (
    <header className={styles.wrapper}>
      <div className={commonStyles.container}>
        <Link href="/">
          <img src="/assets/logo/logo.svg" alt="logo" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
