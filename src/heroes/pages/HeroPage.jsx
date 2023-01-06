import { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getHeroeById } from '../helpers';

export const HeroPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => {
    return getHeroeById(id);
  }, [id]);

  const onNavigateBack = () => {
    navigate(-1, { replace: true });
  };

  if (!hero) {
    return <Navigate to={'/marvel'} />;
  }

  return (
    <div>
      <h1>{hero.superhero}</h1>
      <div className='row mt-5'>
        <div className='col-4 animate__animated animate__bounceInLeft'>
          <img
            src={`/assets/heroes/${id}.jpg`}
            alt={hero.superhero}
            className='img-thumbnail'
          />
        </div>
        <div className='col-8'>
          <h3>{hero.superhero}</h3>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
              <b>Alter ego:</b> {hero.alter_ego}
            </li>
            <li className='list-group-item'>
              <b>Publisher:</b> {hero.publisher}
            </li>
            <li className='list-group-item'>
              <b>First appereance:</b> {hero.first_appearance}
            </li>
          </ul>
          <h5 className='mt-3'>Characters</h5>
          <p>{hero.characters}</p>

          <button
            onClick={onNavigateBack}
            className='btn btn-outline-secondary'
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};
