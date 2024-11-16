import React from 'react'
import Router from 'next/router'
import ReactMarkdown from 'react-markdown'

export type MaterialProps = {
  id: number;
  name: string;
  content: string;
}

const Material: React.FC<{Material: MaterialProps}> = ({ Material }) => {
  return (
    <div onClick={() => Router.push('/material/[id]', `/material/${Material.id}`)}>
        <h2>{Material.name}</h2>
        <ReactMarkdown children={Material.content} />
        <style jsx>{`
          div {
            color: inherit;
            padding: 2rem;
          }
        `}</style>
    </div>
  )
}

export default Material