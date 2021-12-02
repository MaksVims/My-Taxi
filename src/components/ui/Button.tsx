import React, {ButtonHTMLAttributes, FC} from 'react';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  clickHandler: () => void
}

const Button: FC<IButton> = ({children, clickHandler, ...props}) => {
  return (
    <button type="button" onClick={clickHandler} {...props}>
      {children}
    </button>
  );
};

export default Button;