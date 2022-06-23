import Head from 'next/head';
import Layout, { siteTitle } from './../components/layout';
import utilStyles from './../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{'Yassine\'s Blog'}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm <strong>Yassine</strong>, a Full-stack Developer and Web Designer, I'm working on this project to get the basics of Next.js, you don't have to contact me on {' '} <a href="https://github.com/yassine-ct">Github</a>.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}