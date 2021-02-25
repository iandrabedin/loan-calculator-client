import {useAuth0} from '@auth0/auth0-react';
import LogoPositive from '../../../../assets/logoNegative.svg';
import {Navbar as CommonNavbar} from '../../../components';

const Navbar = () => {
  const {logout} = useAuth0();

  return (
    <CommonNavbar
      logo={LogoPositive}
      handleLog={() => logout({returnTo: window.location.origin})}
      logText="Log Out"
    />
  );
};

export default Navbar;
