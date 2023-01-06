import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HeroByCharacter = ({ characters, alter_ego }) => {
  characters === alter_ego ? <></> : <p className='card-text'>{characters}</p>;
};

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImages = `/assets/heroes/${id}.jpg`;

  return (
    <div className='col'>
      <div className='card'>
        <div className='row no-gutters'>
          <div className='col-4 animate__animated animate__fadeIn'>
            <img src={heroImages} alt={superhero} className='card-img' />
          </div>
          <div className='col-8'>
            <div className='card-body'>
              <h5 className='card-title'>{superhero}</h5>
              <p className='card-text'>{alter_ego}</p>
              <HeroByCharacter alter_ego={alter_ego} characters={characters} />
              <p className='muted-text'>{first_appearance}</p>
              <p className='muted-text'>{publisher}</p>
              <Link to={`/hero/${id}`}>More info...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroCard.propTypes = {
  id: PropTypes.string,
  superhero: PropTypes.string,
  publisher: PropTypes.string,
  alter_ego: PropTypes.string,
  first_appearance: PropTypes.string,
  characters: PropTypes.string,
};
HeroByCharacter.propTypes = {
  characters: PropTypes.string,
  alter_ego: PropTypes.string,
};
