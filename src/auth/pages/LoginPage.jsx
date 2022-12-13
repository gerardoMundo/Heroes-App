import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const navigate = useNavigate();

  const onLogin = () => {
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
