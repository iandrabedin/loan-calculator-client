import styles from './button.module.scss';

interface ButtonProps {
  text: string;
  onClick: () => void;
}

export const Button = (props: ButtonProps) => {
  const {text, onClick} = props;

  return (
    <button onClick={onClick} className={styles.button}>
      {text}
    </button>
  );
};
