import Link from 'next/link';
import styles from './header.module.scss';

const Header = (): JSX.Element => {
  return (
    <header className={styles.wrapper}>
      <Link href="/">
        <img src="/assets/logo/logo.svg" alt="Logomarca" />
      </Link>
    </header>
  );
};

export default Header;
