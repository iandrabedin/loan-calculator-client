import {useAuth0} from '@auth0/auth0-react';
import LogoNegative from '../../../../assets/logoNegative.svg';
import {Navbar as CommonNavbar} from '../../../components';

const Navbar = () => {
  const {loginWithRedirect} = useAuth0();

  return (
    <CommonNavbar
      logo={LogoNegative}
      handleLog={() => loginWithRedirect()}
      logText="Log In"
    />
  );
};

export default Navbar;
