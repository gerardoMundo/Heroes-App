import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { getHeroesByPublisher } from '../helpers';
import { HeroCard } from './';

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => {
    return getHeroesByPublisher(publisher);
  }, [publisher]);

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
