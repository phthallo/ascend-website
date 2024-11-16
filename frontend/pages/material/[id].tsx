import React from 'react'
import { GetServerSideProps } from 'next'
import ReactMarkdown from 'react-markdown'
import Layout from '../../components/Layout'
import Router from 'next/router'
import { MaterialProps } from '../../components/Material'

const Material: React.FC<MaterialProps> = props => {
  let name = props.name
  let content = props.content

  return (
    <Layout>
      <div>
        <h2>{name}</h2>
        <p>{content}</p>

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
  const res = await fetch(`http://localhost:3001/material/${context.params.id}`)
  const data = await res.json()
  return { props: { ...data } }
}

export default Material
