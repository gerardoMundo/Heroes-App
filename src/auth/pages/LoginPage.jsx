import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const onLogin = () => {
    login('Gerardo Mundo');

    navigate('/marvel', {
      replace: true,
    });
  };

  return (
    <div>
      <h1>Login Page</h1>
      <hr />
      <button onClick={onLogin} className='btn btn-primary'>
        Login
      </button>
    </div>
  );
};
