import React from 'react';
import styles from './button.module.css';

interface ButtonProps {
  text: string;
  secondary?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, secondary }) => {
  return (
    <button
      className={`${styles.button} ${secondary ? styles.secondary : styles.primary}`}
    >
      {text}
    </button>
  );
};

export default Button;
