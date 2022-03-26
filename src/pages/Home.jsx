import { useEffect, useState } from 'react';
import {
  Button,
  Box,
  Container,
  TextField,
  Grid,
  Pagination,
} from '@mui/material/';
import { Search } from '@mui/icons-material';
import styles from './Home.module.css';
import UserCard from '../component/UserCard';
import { useFetch } from '../hooks/useFetch';

function Home() {
  const [query, setQuery] = useState();
  const [page, setPage] = useState(1);
  const { execute, response, pending } = useFetch(null, {
    lazy: true,
  });

  useEffect(() => {
    if (!query) return;
    const queryParams = `?q=${query}&per_page=3&page=${page}`;
    const url = `https://api.github.com/search/users${queryParams}`;
    execute(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, page]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setQuery(e.target.search.value);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div className={styles.search}>
          <Search />
          <h2>Search for more than 1 GitHub User</h2>
          <p className={styles.results}>
            Search Results #{response?.total_count}
          </p>
        </div>
        {response?.total_count > 5 && (
          <div className={styles.page}>
            <Pagination count={10} onChange={(e, val) => setPage(val)} />
          </div>
        )}
        <div className={styles.input}>
          <TextField
            color='primary'
            fullWidth
            variant='outlined'
            placeholder='Search Users'
            size='small'
            label='Search Users'
            defaultValue={query || ''}
            name='search'
          />
          <Button mt={2} variant='outlined' type='submit' size='medium'>
            Search
          </Button>
        </div>

        <Box my={5}>
          {pending && 'Loading...'}
          <Grid container spacing={2}>
            {!!response?.items?.length &&
              response?.items?.map((user, index) => {
                return (
                  <Grid item key={index}>
                    <UserCard userData={user} />
                  </Grid>
                );
              })}
          </Grid>
        </Box>
      </form>
    </Container>
  );
}

export default Home;
