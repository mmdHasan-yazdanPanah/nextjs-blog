import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import axios from 'axios';
import Link from 'next/link';

export async function getStaticProps() {
  const allPostsData = await axios.get(
    'https://my-json-server.typicode.com/mmdHasan-yazdanPanah/db/posts'
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

  return (
    <>
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
    </>
  );
}
