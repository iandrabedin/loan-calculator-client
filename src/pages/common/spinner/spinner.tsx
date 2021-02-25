import styles from './spinner.module.scss';

interface SpinnerProps {
  size?: string;
}

const Spinner = (props: SpinnerProps) => {
  const {size} = props;

  return (
    <div className={`${styles['spinner']} ${styles[size]}`}>
      <div className={styles['spinner-wrapper']}>
        <div className={styles['rotator']}>
          <div className={styles['inner-spin']}></div>
          <div className={styles['inner-spin']}></div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
