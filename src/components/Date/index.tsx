import styles from './date.module.scss';

interface DateProps {
  timestamp: string;
}

const Date = ({ timestamp }: DateProps): JSX.Element => {
  return (
    <div className={styles.dateStyle}>
      <img src="/assets/icons/date.svg" alt="Date" />
      <span>{timestamp}</span>
    </div>
  );
};

export default Date;
