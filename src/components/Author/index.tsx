import styles from './author.module.scss';

interface AuthorProps {
  name: string;
}

const Author = ({ name }: AuthorProps): JSX.Element => {
  return (
    <div className={styles.authorStyle}>
      <img src="/assets/icons/author.svg" alt="Author" />
      <span>{name}</span>
    </div>
  );
};

export default Author;
