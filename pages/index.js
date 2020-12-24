import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import utilStyles from '../styles/utils.module.css'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'

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
  	 <Layout home>	
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I’m currently an Associate Product Manager on the Moderation Experience team at Indeed, building tools for fraud prevention and employer veritfication. Before that, I studied economics and philosophy at UT Austin. Outside of work, I spend time reading and experimenting with digital and generative art, among other things.</p>
        <p>I’m building this site as a space for myself first - to explore new ideas, cultivate openness, and practice vulnerability. If you’re interested in chatting, feel free to reach out via e-mail or DM me on Twitter. I’m happy to talk about anything.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
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
	</Layout>

  )
}