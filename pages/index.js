import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import axios from 'axios';
import Link from 'next/link';

async function getAllPosts() {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts'
  );
  // const resObj;
  const resArr = response.data.map((item) => {
    return {
      params: {
        id: item.id,
      },
    };
    // return item.id;
  });
  // console.log(response);
  return resArr;
}

export async function getStaticProps() {
  const allPostsData = await axios.get(
    'https://jsonplaceholder.typicode.com/posts'
  );
  const allPostsDataJson = JSON.stringify(allPostsData.data);
  return {
    props: {
      allPostsDataJson,
    },
  };
}

export default function Home({ allPostsDataJson }) {
  allPostsDataJson = JSON.parse(allPostsDataJson);
  // getAllPosts().then((response) => {
  //   console.log(response);
  // });
  // const res = getAllPosts();

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          This is my self IntroDuction:::
          ::::::::::::::::D!@#!~'awdasd(((((()))))))'
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsDataJson.map(({ userId, id, title }) => (
            <li className={utilStyles.listItem} key={id}>
              USERID: {userId}
              <br />
              ID: {id}
              <br />
              TITLE:
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
