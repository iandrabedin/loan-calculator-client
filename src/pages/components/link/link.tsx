import React from 'react';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';
import style from './link.module.scss';

export const Link = (props: RouterLinkProps) => {
  return <RouterLink {...props} className={style.link}></RouterLink>;
};
