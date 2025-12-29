import React from 'react';
import useEscapeKey from '../../hooks/use-escape-key';
export const ToastContext = React.createContext();

function ToastProvider({children}) {

  const [message, setMessage ] = React.useState('');
  const [variant, setVariant ] = React.useState('notice');
  const [messages, setMessages] = React.useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setMessages([...messages, {id: crypto.randomUUID(), message, variant}]);
    setMessage('')
    setVariant('notice')
  }

  const handleDismiss = (id) => {
    const updatedMessages = messages.filter(message => message.id !== id);
    setMessages(updatedMessages);
  }

  useEscapeKey(() => { setMessages([])});

  const providerValues = {
    message, 
    setMessage, 
    variant, 
    setVariant, 
    messages, 
    setMessages, 
    handleFormSubmit, 
    handleDismiss
  }

  return (
    <ToastContext.Provider value={providerValues}>
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider;
