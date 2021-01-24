import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import utilStyles from '../styles/utils.module.css'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import styles from '../components/layout.module.css'

export async function getStaticProps(){
	const allPostsData = getSortedPostsData()
		return {
			props: {
				allPostsData
			}
		}	
}

export default function Home({allPostsData}) {
  return (
  	<Layout>
  	 <div className={styles.container}>
      <Head>
        // <title>{siteTitle}</title>
      </Head>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding0px}`}>
        <h2 className={utilStyles.headingLg}>Writing</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
				  <Link href={`/posts/${id}`}>
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
	</div>
	</Layout>

  )
}