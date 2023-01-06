import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components/HeroCard';
import queryString from 'query-string';

export const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const { searchText, onInputChange, resetForm } = useForm({
    searchText: '',
  });

  const handleSubmit = e => {
    e.preventDefault();

    if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText}`);

    resetForm();
  };

  return (
    <>
      <h1>Searching Page</h1>

      <hr />

      <div className='row'>
        <div className='col-5'>
          <form onSubmit={handleSubmit} action='submit'>
            <input
              type='text'
              placeholder='Search...'
              className='form-control'
              name='searchText'
              value={searchText}
              autoComplete='off'
              onChange={onInputChange}
            />
            <button className='btn btn-outline-primary mt-2'>Send</button>
          </form>
        </div>

        <div className='col-7'>
          <div className='alert alert-primary'>
            <h6>Heroes encontrados!</h6>
          </div>
          <div className='alert alert-danger'>
            <h6>
              No se encontró <b>{q}</b>!
            </h6>
          </div>
          <HeroCard />
        </div>
      </div>
    </>
  );
};
