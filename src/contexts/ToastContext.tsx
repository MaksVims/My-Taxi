import React, {FC, useCallback, useContext} from 'react';
import {toast, ToastContainer} from "react-toastify";
import {ToastType} from './types';
import 'react-toastify/dist/ReactToastify.css'

interface IToastContext {
  showToast: (text: string, type: ToastType) => void
}

const ToastContextContainer = React.createContext<IToastContext>({} as IToastContext)

export function useToast(): IToastContext {
  return useContext(ToastContextContainer)
}

const ToastContext: FC = ({children}) => {

  const showToast = useCallback((text: string, type: ToastType) => {
    switch (type) {
      case ToastType.ERROR:
        toast.error(text)
        break;
      case ToastType.SUCCESS:
        toast.success(text)
        break;
    }
  }, [])

  return (
    <ToastContextContainer.Provider value={{showToast}}>
      {children}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        theme="dark"
      />
    </ToastContextContainer.Provider>
  );
};

export default ToastContext;