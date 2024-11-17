import React from 'react'
import { GetServerSideProps } from 'next'
import ReactMarkdown from 'react-markdown'
import Layout from '../../components/Layout'
import Router from 'next/router'
import { MaterialProps } from '../../components/Material'

const Material: React.FC<MaterialProps[]> = (props) => {
  return (
    <Layout>
      <div>
      <h2>
          {
            (Object.values(props)).map((prop) => (
          <div>
            <div>{prop.name}</div> 
            <div>Description: {prop.content}</div>
          </div>
          ))}
          </h2>
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

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`http://localhost:3001/material/`)
  const data = await res.json()
  return { props: { ...data } }
}

export default Material
