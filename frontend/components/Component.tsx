import React from 'react'
import Router from 'next/router'
import ReactMarkdown from 'react-markdown'

export type ComponentProps = {
  id: number;
  name: string;
  content: string;
  requires: JSON;
}

const Component: React.FC<{Component: ComponentProps}> = ({ Component }) => {
  return (
    <div onClick={() => Router.push('/component/[id]', `/component/${Component.id}`)}>
        <h2>{Component.name}</h2>
        <ReactMarkdown children={Component.content} />
        <style jsx>{`
          div {
            color: inherit;
            padding: 2rem;
          }
        `}</style>
    </div>
  )
}

export default Component