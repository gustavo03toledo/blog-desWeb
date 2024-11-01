import React, { useState } from 'react';

function CustomInput({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  confirmValue = '',
  borderRadius = '10px',
  fontSize = '16px',
  color = '#333',
  border = '1px solid #ccc',
  name,
  required = false,
}) {
  const [error, setError] = useState('');

  const validateInput = (e) => {
    const inputValue = e.target.value;

    if (type === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(inputValue)) {
        setError('Por favor, insira um email válido.');
      } else if (name === 'confirmEmail' && confirmValue && inputValue !== confirmValue) {
        setError('Os emails não correspondem.');
      } else {
        setError('');
      }
    } else if (type === 'password') {
      if (inputValue.length < 6) {
        setError('A senha deve ter pelo menos 6 caracteres.');
      } else if (name === 'confirmPassword' && confirmValue && inputValue !== confirmValue) {
        setError('As senhas não correspondem.');
      } else {
        setError('');
      }
    } else if (name === 'name') {
      if (inputValue.length < 2) {
        setError('O nome deve ter pelo menos 2 caracteres.');
      } else {
        setError('');
      }
    }

    if (onChange) onChange(e);
  };

  return (
    <div style={{ marginBottom: '16px' }}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={validateInput}
        style={{
          borderRadius: borderRadius,
          fontSize: fontSize,
          color: color,
          border: border,
          padding: '8px',
          width: '20rem',
        }}
        required={required}
      />
      {error && <span style={{ color: 'red', fontSize: '12px' }}>{error}</span>}
    </div>
  );
}

export default CustomInput;
