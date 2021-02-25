import {Button} from '../../components';
import styles from './navbar.module.scss';

interface NavbarProps {
  logo: any;
  handleLog: () => void;
  logText: string;
}

const Navbar = (props: NavbarProps) => {
  const {logo, handleLog, logText} = props;

  return (
    <nav className={styles.nav}>
      <img src={logo} alt="Loan Calculator logo" />
      <Button onClick={() => handleLog()}>{logText}</Button>
    </nav>
  );
};

export default Navbar;
