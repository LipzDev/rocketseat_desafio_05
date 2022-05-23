import Author from '../Author';
import Date from '../Date';
import styles from './card.module.scss';

interface CardProps {
  title: string;
  subtitle: string;
  author: string;
  createdAt: string;
}

const Card = ({
  title,
  subtitle,
  createdAt,
  author,
}: CardProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <h1>{title}</h1>
      <p>{subtitle}</p>

      <div className={styles.postInfo}>
        <Date timestamp={createdAt} />
        <Author name={author} />
      </div>
    </div>
  );
};

export default Card;
