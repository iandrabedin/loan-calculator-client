import styles from './button.module.scss';

interface ButtonProps {
  children: string;
  onClick: () => void;
}

const Button = (props: ButtonProps) => {
  const {children, onClick} = props;

  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
