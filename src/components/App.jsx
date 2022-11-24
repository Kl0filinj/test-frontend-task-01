import { useEffect, useState } from 'react';
import { getFilms } from 'services/api';
import { addFilm } from 'services/api';
import { Heading } from '@chakra-ui/react';
import { ToastContainer, toast } from 'react-toastify';
import Loader from './Loader';
import InfiniteScroll from 'react-infinite-scroll-component';
import Wrapper from './Container';
import DataTable from './DataTable';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(null);
  const [error, setError] = useState(null);

  const hasNoMore = totalCount === films.length;

  const addFilmHandler = async newFilm => {
    try {
      const response = await addFilm(newFilm);
      if (hasNoMore) {
        setFilms(prevFilms => [...prevFilms, response]);
      }
    } catch (error) {
      toast.error(
        `Something went wrong, try to reload the page, ${error.message}`
      );
      console.error(error);
      setError(error);
    }
  };

  useEffect(() => {
    async function getFilmsList() {
      try {
        const films = await getFilms(page);
        setFilms(prevFilms => [...prevFilms, ...films.list]);
        setTotalCount(films.totalCount);
      } catch (error) {
        toast.error(
          `Something went wrong, try to reload the page, ${error.message}`
        );
        console.error(error);
        setError(error);
      }
    }
    getFilmsList();
  }, [page]);
  return (
    <>
      <Wrapper>
        {error ? (
          <Heading as="h1" size="3xl" textAlign="center">
            Something went wrong, try to reload the page
          </Heading>
        ) : (
          <InfiniteScroll
            dataLength={films.length}
            next={() => setPage(prevState => prevState + 1)}
            hasMore={!hasNoMore}
            loader={<Loader />}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            <DataTable films={films} addFilm={addFilmHandler} />
          </InfiniteScroll>
        )}
      </Wrapper>
      <ToastContainer
        theme="colored"
        position="top-right"
        autoClose={3000}
        closeOnClick
        pauseOnFocusLoss
        draggable
      />
    </>
  );
};
