/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/no-array-index-key */
import { GetStaticProps } from 'next';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import Card from '../components/Card';
import Header from '../components/Header';

import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home({ results }: PostPagination): JSX.Element {
  return (
    <div className={commonStyles.container}>
      <Header />
      {results?.map((content: Post, index: number) => (
        <div className={styles.wrapper} key={index}>
          <Card
            title={content?.data.title}
            subtitle={content?.data.subtitle}
            author={content?.data.author}
            createdAt={format(
              new Date(content?.first_publication_date),
              'dd MMMM yyyy',
              {
                locale: ptBR,
              }
            )}
            slug={content?.uid}
          />
        </div>
      ))}

      <div className={styles.showMore}>
        <p>Carregar mais posts</p>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient({});
  const postsResponse = await prismic.getByType('posts');

  return {
    props: postsResponse,
    revalidate: 60,
  };
};
