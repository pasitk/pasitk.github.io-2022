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
      <section className={utilStyles.bodyExcludeHeader}>
        <aside className={utilStyles.aside}>
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
            <p><b>Pasit Kongkunakornkul is a Financial Graphics Reporter for the Reuters Graphics team at the Reuters news agency. He creates daily breaking news graphics across markets, economics and companies beats worldwide and generates story and graphics ideas from the financial news of the day.</b></p>
            <p>Previously, he worked for THE STANDARD, an online news outlet in Thailand, as a data journalist, in-depth domestic news reporter and international news reporter from 2019 to August 2022. There, his primary focus on data journalism was domestic issues in Thailand. He covered several feature articles about environmental, social, and human rights problems. Meanwhile, in-depth domestic and international news reporting, another side of his work, focused on COVID-19, geopolitics, technology, politics, and other general situations. He also covered significant issues such as COVID-19 and Brexit from the field in the UK during 2019-2020 while he was a Master's degree student in Computational and Data Journalism at Cardiff University. He was the Chevening scholar who got a fully-funded scholarship from the UK's Foreign, Commonwealth and Development Office (FCDO) to support his study that year as well.</p>
            <p>Before he pursued his Master's degree, he worked in Thailand as an online news reporter at BEC-Tero Entertainment, an online news head at GMM25 TV Channel, and the news researcher/scriptwriter for the daily newscast of THE STANDARD online news agency, respectively.</p>
            <p>He graduated with a Bachelor's degree in Computer Engineering in 2014 from Chulalongkorn University in Thailand. He used to be a front-end developer for more than three years at the Stock Exchange of Thailand. He developed web and mobile applications named 'Settrade Streaming' for stock trading in the stock exchange before moving to his current career path in the journalism industry.</p>
          </section>
          <section className={utilStyles.headingSm}>
            <h2 className={`${utilStyles.headingLg} ${utilStyles.mainHeadColor}`}>Contact me</h2>
            <div className={`${utilStyles.mainHeadColorAfter}`}></div>
            <p><Link href={`mailto: pasitkong.k@gmail.com`}><a>📧 Email</a></Link>&nbsp;&nbsp;&nbsp;<Link href={`https://www.linkedin.com/in/pasitk/`}><a><Image priority src="/images/LI-In-Bug.png" height={15} width={18} alt="LinkedIn" loader={myLoader} /> LinkedIn</a></Link></p>
          </section>
        </aside>
        <main className={utilStyles.main}>
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
          <hr className={utilStyles.remark} />
          <section className={`${utilStyles.headingSm} ${utilStyles.remark} ${utilStyles.light}`}>
            <p>(This website is under construction as a part of my self-studying in 'React' JavaScript library and 'Next.js' framework. More information will be updated periodically.)</p>
          </section>
        </main>
      </section>
      
    </Layout>
  )
}