import React from 'react';

// Define the props interface for the Button component
interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // Optional click handler
  children: React.ReactNode; // Content inside the button (text, icons, etc.)
  type?: 'button' | 'submit' | 'reset'; // HTML button type
  disabled?: boolean; // Whether the button is disabled
  className?: string; // Optional CSS class names
}

const Button: React.FC<ButtonProps> = ({ onClick, children, type = 'button', disabled = false, className = '' }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`custom-button ${className}`} // Add a base class and any provided class names
    >
      {children}
    </button>
  );
};

export default Button;