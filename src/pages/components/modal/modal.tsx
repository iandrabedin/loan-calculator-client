import React from 'react';
import {Dialog, DialogProps} from '@reach/dialog';
import '@reach/dialog/styles.css';

const Modal = (props: DialogProps) => {
  return <Dialog {...props}>{props.children}</Dialog>;
};

export default Modal;
