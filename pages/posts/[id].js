import React from 'react';
import Layout from '../../components/layout';
import axios from 'axios';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';

async function getAllPosts() {
  const response = await axios.get(
    'https://my-json-server.typicode.com/mmdHasan-yazdanPanah/db/posts'
  );
  const resArr = response.data.map((item) => {
    const id = item.id.toString();
    return {
      params: {
        id: id,
      },
    };
    // return item.id;
  });
  // console.log(response);
  // const res = Json
  return resArr;
}

export async function getStaticPaths() {
  let paths = await getAllPosts();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postDataRes = await axios.get(
    `https://my-json-server.typicode.com/mmdHasan-yazdanPanah/db/posts/${params.id}`
  );
  const postDataJson = JSON.stringify(postDataRes.data);
  return {
    props: {
      postDataJson,
    },
  };
}

const post = ({ postDataJson }) => {
  const postData = JSON.parse(postDataJson);
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>{postData.id}</div>
      </article>
      <br />
      {postData.body}
    </Layout>
  );
};

export default post;
