import { Link, NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();

  const onLogOut = () => {
    navigate('/login', {
      replace: true,
    });
  };

  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark p-2'>
      <Link className='navbar-brand' to='/'>
        Asociaciones
      </Link>

      <div className='navbar-collapse'>
        <div className='navbar-nav'>
          <NavLink
            className={({ isActive }) => {
              return `nav-item nav-link isActive ${isActive ? 'isActive' : ''}`;
            }}
            to='/marvel'
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) => {
              return `nav-item nav-link isActive ${isActive ? 'isActive' : ''}`;
            }}
            to='/dc'
          >
            DC
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return `nav-item nav-link isActive ${isActive ? 'isActive' : ''}`;
            }}
            to='/search'
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className='navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end'>
        <ul className='nav-item primary d-inline-flex gap-2'>
          <span className='nav-item nav-link text-info'>Gerardo</span>
          <button onClick={onLogOut} className='nav-item nav-link btn btn-info'>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
