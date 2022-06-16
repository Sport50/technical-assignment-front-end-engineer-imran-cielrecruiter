import * as React from 'react';
import { Container, Grid } from '@mui/material';
import ArticalCard from './ArticalCard';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { getArticals } from '../../helpers/helper.js';
import { articalInt } from '../../interface/interface';

const Artical = () => {
  const { isLoading, isError, data, error } = useQuery('posts', getArticals);

  if (isLoading) return <span>Loading...</span>;

  if (isError) return <span>Error: {error?.message}</span>;

  return (
    <div className='articalPage'>
      <Container maxWidth='xl'>
        <div className='articalPage DBlock'>
          <h1>Latest Articals</h1>
          <Grid container spacing={3}>
            {data?.data?.data?.map((artical: articalInt, ind: number) => (
              <Grid key={`articalKey${ind}`} item md={4}>
                <ArticalCard artical={artical} />
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Artical;

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('posts', getArticals);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
