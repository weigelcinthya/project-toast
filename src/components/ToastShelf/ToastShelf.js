import React, { useEffect } from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider/ToastProvider';

function ToastShelf() {

  const { messages } = React.use(ToastContext)

  return (
    <ol className={styles.wrapper} role='region' aria-live='polite' aria-label='Notification'>
      {messages.length > 0 && messages.map(message => (
        <li className={styles.toastWrapper} key={message.id}>
          <Toast toast={message}/>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
