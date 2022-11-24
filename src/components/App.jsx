import { useEffect, useState } from 'react';
import { getFilms } from 'services/api';
import { addFilm } from 'services/api';
import Loader from './Loader';
import InfiniteScroll from 'react-infinite-scroll-component';
import Wrapper from './Container';
import DataTable from './DataTable';

export const App = () => {
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(null);

  const hasMore = totalCount === films.length;
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
      const films = await getFilms(page);
      setFilms(prevFilms => [...prevFilms, ...films.list]);
      setTotalCount(films.totalCount);
    }
    getFilmsList();
  }, [page]);

  return (
    <Wrapper>
      <InfiniteScroll
        dataLength={films.length}
        next={() => setPage(prevState => prevState + 1)}
        hasMore={!hasMore}
        loader={<Loader />}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <DataTable films={films} addFilm={addFilmHandler} />
      </InfiniteScroll>
    </Wrapper>
  );
};
