import React from 'react';
import {Dialog, DialogProps} from '@reach/dialog';
import '@reach/dialog/styles.css';

export const Modal = (props: DialogProps) => {
  return <Dialog {...props}>{props.children}</Dialog>;
};
