import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import axios from 'axios';
import Link from 'next/link';

export default function Home({ allPostsDataJson }) {
  return (
    <Layout home>
      <p>
        This is my self IntroDuction:::
        ::::::::::::::::D!@#!~'awdasd(((((()))))))'
      </p>
      <p>
        (This is a sample website - you’ll be building a site like this on{' '}
        <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
      </p>
    </Layout>
  );
}
