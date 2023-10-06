import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const useLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (!username || !password) {
      setError('نام کاربری و رمز عبور را وارد کنید.');
      return;
    }

    if (username === 'admin' && password === 'admin') {
      const accessToken = uuidv4(); // ایجاد توکن ساختگی
      localStorage.setItem('access_token', accessToken); // ذخیره توکن در Local Storage
      localStorage.setItem('username', username);
      window.location.href = '/';
    } else {
      setError('نام کاربری یا رمز عبور اشتباه است.');
    }
  };

  return {
    username,
    password,
    error,
    handleUsernameChange,
    handlePasswordChange,
    handleLogin,
  };
};

export default useLogin;
