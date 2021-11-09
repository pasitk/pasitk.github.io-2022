import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/Link'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id, 'portfolio')
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds('portfolio')
  return {
    paths,
    fallback: false
  }
}

export default function Post({ postData }) {
    return (
      <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <article>
            <div className={`${utilStyles.headingMd} ${utilStyles.light} ${utilStyles.noMarginBottom}`}>My Portfolio: {postData.category}</div>
            <h1 className={`${utilStyles.headingXl} ${utilStyles.superBold} ${utilStyles.noMarginTop}`}>{postData.title}</h1>
            <div className={`${utilStyles.headingSm} ${utilStyles.bold}`}>Original article in {postData.originalLang} language published at: <Link href={postData.originalLink}><a>{postData.publisher}</a></Link></div>
            <div className={`${utilStyles.lightText}`}>{postData.author} <i>(Author)</i>, {postData.photo} <i>(Photographer)</i></div>
            <div className={`${utilStyles.lightText} ${utilStyles.remark}`}>
              <Date dateString={postData.date} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </Layout>
    )
  }