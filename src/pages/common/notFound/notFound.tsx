import React from 'react';
import {Link} from '../../components';

function NotFound() {
  return (
    <>
      <h1>Oops, page not found</h1>
      <Link to="/">Go back home</Link>
    </>
  );
}

export default NotFound;
