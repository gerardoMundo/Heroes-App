import PropTypes from 'prop-types';
import { getHeroesByPublisher } from '../helpers';
import { HeroCard } from './';

export const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);
  console.log(heroes);
  return (
    <div className='row rows-col-1 row-cols-md-3 g-3'>
      {heroes.map(hero => {
        return <HeroCard key={hero.id} {...hero} />;
      })}
    </div>
  );
};

HeroList.propTypes = {
  publisher: PropTypes.string,
};
