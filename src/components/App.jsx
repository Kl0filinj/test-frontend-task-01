import { useEffect, useState } from 'react';
import { getFilms } from 'services/api';
import Wrapper from './Container';
import DataTable from './DataTable';

export const App = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function getFilmsList() {
      // setIsLoading(true);
      const films = await getFilms();
      setFilms(films);
      // setIsLoading(false);
    }
    getFilmsList();
  }, []);
  return (
    <Wrapper>
      <DataTable films={films} />
    </Wrapper>
  );
};
