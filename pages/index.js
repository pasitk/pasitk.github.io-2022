import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'

const name = 'Pasit Kongkunakornkul'

export async function getStaticProps() {
  const allPortfolioData = getSortedPostsData('portfolio')
  return {
    props: {
      allPortfolioData
    }
  }
}

const myLoader = ({ src, width, quality }) => {
  return `https://pasitk.github.io/${src}?w=${width}&q=${quality || 75}`
}

export default function Home({allPortfolioData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingProfilePicture}>
        <Image
          priority
          src="/images/profile.png"
          className={utilStyles.borderCircle}
          height={144}
          width={144}
          alt={name}
          loader={myLoader}
        />
      </section>
      <section className={utilStyles.headingSm}>
        <h2 className={`${utilStyles.headingLg} ${utilStyles.mainHeadColor}`}>Welcome to Pasit's site!</h2>
        <div className={`${utilStyles.mainHeadColorAfter}`}></div>
        <p><b>Pasit Kongkunakornkul is a multi-skilled journalist working as a freelance data journalist and sometimes contributes in-depth domestic and international feature articles for 'THE STANDARD' online news agency in Thailand.</b></p>
        <p>His primary focus on the data journalism side is domestic issues in Thailand. He has covered several feature articles about environmental and human rights problems since he graduated with his Master's degree. While in-depth domestic and international news reporting, another side of his work, focus on COVID-19, geopolitics, technology, politics, and other general situations. He also was the Chevening scholar who got a scholarship from the UK's government to support his Master's degree study.</p>
        <p>Before joining THE STANDARD in 2019, he worked in two other TV newsrooms in Thailand from 2017 to 2019. He also worked as a front-end developer at The Stock Exchange of Thailand from 2014 to 2017.</p>
        <p>He is available for data journalism, data visualization, or related assignments internationally.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={`${utilStyles.headingLg} ${utilStyles.mainHeadColor}`}>Portfolio <span className={`${utilStyles.remark} ${utilStyles.light}`}>(will be updated further soon...)</span></h2>
        <div className={`${utilStyles.mainHeadColorAfter}`}></div>
        <ul className={utilStyles.list}>
          {allPortfolioData.map(({ id, date, title, publisher, category, originalLink, originalLang, linkOrText }) => (
            <li className={utilStyles.listItem} key={id}>
              {(linkOrText == "L")? 
                <Link href={`${originalLink}`}>
                  <a target="_blank">{title}</a>
                </Link>
              :
                <Link href={`/portfolio/${id}`}>
                  <a>{title}</a>
                </Link>
              }
              <br />
              <small className={`${utilStyles.lightText}`}>{publisher} | {category} • <small className={`${utilStyles.bold}`}><Date dateString={date} /></small>
              </small>
            </li>
          ))}
        </ul>
      </section>
      <section className={utilStyles.headingSm}>
        <h2 className={`${utilStyles.headingLg} ${utilStyles.mainHeadColor}`}>Contact me</h2>
        <div className={`${utilStyles.mainHeadColorAfter}`}></div>
        <p><Link href={`mailto: pasitkong.k@gmail.com`}><a>📧 Email</a></Link>&nbsp;&nbsp;&nbsp;<Link href={`https://www.linkedin.com/in/pasitk/`}><a><Image priority src="/images/LI-In-Bug.png" height={15} width={18} alt="LinkedIn" loader={myLoader} /> LinkedIn</a></Link></p>
      </section>
      <hr className={utilStyles.remark} />
      <section className={`${utilStyles.headingSm} ${utilStyles.remark} ${utilStyles.light}`}>
        <p>(This website is under construction as a part of my self-studying in 'React' JavaScript library and 'Next.js' framework. More information will be updated periodically.)</p>
      </section>
      
    </Layout>
  )
}