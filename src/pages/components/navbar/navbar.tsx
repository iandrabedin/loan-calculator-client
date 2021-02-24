import {useAuth0} from '@auth0/auth0-react';
import {Button} from '../../components';
import Logo from '../../../assets/logo.svg';
import styles from './navbar.module.scss';

export const Navbar = () => {
  const {loginWithRedirect} = useAuth0();

  return (
    <nav className={styles.nav}>
      <img src={Logo} alt="Loan Calculator logo" />
      <Button onClick={() => loginWithRedirect()}>Log In</Button>
    </nav>
  );
};
