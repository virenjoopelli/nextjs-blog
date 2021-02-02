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
        <p>Hey! I'm Viren. Here's a little bit about who I am and what I'm up to.</p>
        
        <h3>Work</h3>
        
          <p>🧑🏽‍💻 Currently living in Austin as an Associate Product Manager on the Moderation Experience team at <a href = "https://www.indeed.com/">Indeed</a>, building tools to prevent fraud and protect jobseeker privacy. Before that, I studied economics and philosophy at <a href = "utexas.edu"> UT Austin</a>. </p>
        
        <h3>Life</h3>
          
          <p>✍🏽 Writing on my <Link href = "/writing"><a>blog</a></Link>. Don't really hava a specific niche, just whatever's on my mind. </p>

          <p>📚 Trying to <a href = "https://airtable.com/invite/l?inviteId=invTAFtk6VRvaiJ6H&inviteToken=4e08337d57589651ed469f45d42d41359af02565c18aa9ec7d5931740b3cef1b">read</a> a little bit every day. I'm currently reading <a href = "https://www.goodreads.com/book/show/324750.High_Output_Management">High Output Management</a> by Andy Grove.</p>
          
          <p>🏃🏽‍♂️ Training to <a href = "https://www.strava.com/athletes/27474043">run</a> a 5-minute mile. I still have a (very, very) long way to go, but I’m enjoying the process! My most recent time trial result was 6:49 on Jan 31, 2021.</p>
          
          <p>🎨 Experimenting with different forms of <a href = "https://twitter.com/virenjoopelli/status/1355990745790828544?s=20">digital</a> and <a href = "https://twitter.com/virenjoopelli/status/1299871563102261248?s=20" target="_blank">generative</a> art.</p>
        
        <h3>Contact</h3>
          
          <p>✉️ Definitely reach out if you’re interested in chatting! I love meeting new folks and would be happy to talk about anything that’s on your mind. You can reach me via Twitter or e-mail, although I’ll likely respond faster via the former.</p>
      
      </section>
      <p className = {utilStyles.lastUpdated}> Last updated: January 31, 2021</p>
  </Layout>

    //   <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
    //     <h2 className={utilStyles.headingLg}>Writing</h2>
    //     <ul className={utilStyles.list}>
    //       {allPostsData.map(({ id, date, title }) => (
    //         <li className={utilStyles.listItem} key={id}>
				//   <Link href={`/posts/${id}`}>
				//     <a>{title}</a>
				//   </Link>
				//   <br />
				//   <small className={utilStyles.lightText}>
				//     <Date dateString={date} />
				//   </small>
				// </li>
    //       ))}
    //     </ul>
    //   </section>
    

  )
}