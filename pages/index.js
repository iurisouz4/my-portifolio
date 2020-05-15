import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, i'm Iuri Souza. I'm a software engineer at TV Globo. You can
          contact me on{" "}
          <a href="https://www.linkedin.com/in/iurisouz4/">Linkedin</a>.
        </p>
        <p>
          Some useful links:{" "}
          <li>
            <a href="https://github.com/iurisouz4">Github</a>
          </li>
          <li>
            <a href="https://www.facebook.com/iurisouz4">Facebook</a>
          </li>
          <li>
            <a href="https://twitter.com/iurisouz4">Twitter</a>
          </li>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Projects and articles</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
