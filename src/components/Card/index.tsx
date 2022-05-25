import Link from 'next/link';
import Author from '../Author';
import Date from '../Date';
import styles from './card.module.scss';

interface CardProps {
  title: string;
  subtitle: string;
  author: string;
  createdAt: string;
  slug: string;
}

const Card = ({
  title,
  subtitle,
  createdAt,
  author,
  slug,
}: CardProps): JSX.Element => {
  return (
    <Link href={slug || ''}>
      <div className={styles.wrapper}>
        <h1>{title}</h1>
        <p>{subtitle}</p>

        <div className={styles.postInfo}>
          <Date timestamp={createdAt} />
          <Author name={author} />
        </div>
      </div>
    </Link>
  );
};

export default Card;
