import React, { useEffect } from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({messages, handleClose}) {
  return (
    <ol className={styles.wrapper}>
      {messages.length > 0 && messages.map(message => (
        <li className={styles.toastWrapper} key={message.id}>
          <Toast toast={message} handleClose={handleClose}/>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
