import axios from 'axios'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
const ReactMarkdown = require('react-markdown')
const gfm = require('remark-gfm')

export default function Blog() {
  const [blog, setBlog] = useState({})
  const router = useRouter()

  useEffect(() => {
    if (router.query.slug) {
      axios.get(`https://dev.to/api/articles/zaidrehman/${router.query.slug}`).then(res => {
        setBlog(res.data)
        console.log(res.data)
      })
    }
    return () => {
      setBlog([])
    }
  }, [router.query.slug])

  return (
    <div className="container">
      <Head>
        <title>{blog.title} by Zaid Rehman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img src={blog.social_image} alt={blog.title} />
        <p className="description">
          {blog.description}
        </p>
        <p className="description">
          {blog.tag_list}
        </p>
        <div className="grid" dangerouslySetInnerHTML={{ __html: blog.body_html }}></div>
        {/* <ReactMarkdown plugins={[gfm]} children={blog.body_markdown} /> */}
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: cadetblue;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
       
        svg {
          height : 30px;
          width: 30px;
        }

      `}</style>

    </div>
  )
}
