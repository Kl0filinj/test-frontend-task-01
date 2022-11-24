import { useEffect, useState } from 'react';
import { getFilms } from 'services/api';
import { addFilm } from 'services/api';
import Wrapper from './Container';
import DataTable from './DataTable';

export const App = () => {
  const [films, setFilms] = useState([]);

  const addFilmHandler = async newFilm => {
    try {
      const response = await addFilm(newFilm);
      console.log(response);
      setFilms(prevFilms => [...prevFilms, response]);
    } catch (error) {
      console.error(error);
    }
  };

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
      <DataTable films={films} addFilm={addFilmHandler} />
    </Wrapper>
  );
};
