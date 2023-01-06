import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components/HeroCard';
import { getHeroesByName } from '../helpers';

export const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const heroes = getHeroesByName(q);

  const { searchText, onInputChange, resetForm } = useForm({
    searchText: q,
  });

  const showSearch = q === '';
  const showError = q.length > 0 && heroes.length === 0;

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
          <div
            className='alert alert-primary animate__animated animate__fadeIn'
            style={{ display: showSearch ? '' : 'none' }}
          >
            <h6>Busca a un heroe!</h6>
          </div>
          <div
            className='alert alert-danger animate__animated animate__fadeIn'
            style={{ display: showError ? '' : 'none' }}
          >
            <h6>
              No se encontró el Heroe <b>{q}</b>!
            </h6>
          </div>
          {heroes.map(hero => {
            return <HeroCard key={hero.id} {...hero} />;
          })}
        </div>
      </div>
    </>
  );
};
