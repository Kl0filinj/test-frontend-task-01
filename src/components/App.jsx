import { useEffect, useState } from 'react';
import { getFilms } from 'services/api';
import { addFilm } from 'services/api';
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
      // setIsLoading(true);
      const films = await getFilms(page);
      setFilms(prevFilms => [...prevFilms, ...films.list]);
      setTotalCount(films.totalCount);
      // setIsLoading(false);
    }
    getFilmsList();
  }, [page]);

  return (
    <Wrapper>
      <InfiniteScroll
        dataLength={films.length} //This is important field to render the next data
        next={() => setPage(prevState => prevState + 1)}
        hasMore={!hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        // below props only if you need pull down functionality
        // refreshFunction={this.refresh}
        // pullDownToRefresh
        // pullDownToRefreshThreshold={50}
        // pullDownToRefreshContent={
        //   <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
        // }
        // releaseToRefreshContent={
        //   <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
        // }
      >
        <DataTable films={films} addFilm={addFilmHandler} />
      </InfiniteScroll>
    </Wrapper>
  );
};
