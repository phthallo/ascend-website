import React from 'react'
import { GetServerSideProps } from 'next'
import ReactMarkdown from 'react-markdown'
import Layout from '../../components/Layout'
import Router from 'next/router'
import { ConstructProps } from '../../components/Construct'

const Construct: React.FC<ConstructProps> = props => {
  let name = props.name
  let content = props.content
  let requires = props.requires

  return (
    <Layout>
      <div>
        <h2>{name}</h2>
        <p>{content}</p>
        <div>{(Object.keys(requires)).map((requirement) => (
          <div>COMPONENT ID: <a href = {`/component/${requirement}`}>{requirement}</a> QUANTITY: {requires[requirement]}</div>
        ))}
      </div>
      </div>
      <style jsx>{`
        .page {
          background: white;
          padding: 2rem;
        }

        .actions {
          margin-top: 2rem;
        }

        button {
          background: #ececec;
          border: 0;
          border-radius: 0.125rem;
          padding: 1rem 2rem;
        }

        button + button {
          margin-left: 1rem;
        }
      `}</style>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`http://localhost:3001/construct/${context.params.id}`)
  const data = await res.json()
  return { props: { ...data } }
}

export default Construct
