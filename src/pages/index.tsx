/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { GetStaticProps } from 'next';
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

const mock = [
  {
    title: 'Como utilizar Hooks',
    subtitle: 'Pensando em sincronização em vez de ciclos de vida.',
    author: 'Joseph Oliveira',
    createdAt: '15 Mar 2021',
    slug: 'como-utilizar-hooks',
  },
  {
    title: 'Como utilizar Hooks',
    subtitle: 'Pensando em sincronização em vez de ciclos de vida.',
    author: 'Joseph Oliveira',
    createdAt: '15 Mar 2021',
    slug: 'como-utilizar-hooks',
  },
  {
    title: 'Como utilizar Hooks',
    subtitle: 'Pensando em sincronização em vez de ciclos de vida.',
    author: 'Joseph Oliveira',
    createdAt: '15 Mar 2021',
    slug: 'como-utilizar-hooks',
  },
  {
    title: 'Como utilizar Hooks',
    subtitle: 'Pensando em sincronização em vez de ciclos de vida.',
    author: 'Joseph Oliveira',
    createdAt: '15 Mar 2021',
    slug: 'como-utilizar-hooks',
  },
  {
    title: 'Como utilizar Hooks',
    subtitle: 'Pensando em sincronização em vez de ciclos de vida.',
    author: 'Joseph Oliveira',
    createdAt: '15 Mar 2021',
    slug: 'como-utilizar-hooks',
  },
  {
    title: 'Como utilizar Hooks',
    subtitle: 'Pensando em sincronização em vez de ciclos de vida.',
    author: 'Joseph Oliveira',
    createdAt: '15 Mar 2021',
    slug: 'como-utilizar-hooks',
  },
];

export default function Home() {
  return (
    <div className={commonStyles.container}>
      <Header />
      {mock.map((data, index) => (
        <div className={styles.wrapper}>
          <Card
            key={index}
            title={data.title}
            subtitle={data.subtitle}
            createdAt={data.createdAt}
            author={data.author}
          />
        </div>
      ))}

      <div className={styles.showMore}>
        <p>Carregar mais posts</p>
      </div>
    </div>
  );
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient({});
//   // const postsResponse = await prismic.getByType(TODO);

//   // TODO
// };
