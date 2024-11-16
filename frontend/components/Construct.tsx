import React from 'react'
import Router from 'next/router'
import ReactMarkdown from 'react-markdown'

export type ConstructProps = {
  id: number;
  name: string;
  content: string;
  requires: JSON;
}

const Construct: React.FC<{Construct: ConstructProps}> = ({ Construct }) => {
  return (
    <div onClick={() => Router.push('/construct/[id]', `/construct/${Construct.id}`)}>
        <h2>{Construct.name}</h2>
        <ReactMarkdown children={Construct.content} />
        <style jsx>{`
          div {
            color: inherit;
            padding: 2rem;
          }
        `}</style>
    </div>
  )
}

export default Construct