import React from "react";
import { GetServerSideProps } from "next";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/Layout";
import Header from "../../components/Header";

import Router from "next/router";
import { ConstructProps } from "../../components/Construct";

const Construct: React.FC<ConstructProps[]> = (props) => {
  return (
    <Layout>
      <Header />
      <div className="bg-[#111f45] h-screen font-bettervcr text-center flex flex-col items-center text-[#de8af5] pt-10">
        <table className="w-screen">
          <thead>
            <tr>
              <th className="text-3xl px-5">Name</th>
              <th className="text-3xl px-5">Description</th>
              <th className="text-3xl px-5">ID / QTY</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(props).map((prop) => (
              <tr key={prop.name}>
                <td className="text-2xl px-5">{prop.name}</td>
                <td>{prop.content}</td>
                <td>
                  {Object.keys(prop.requires).map((requirement) => (
                    <div key={requirement}>
                      COMPONENT ID: <a href={`/component/${requirement}`}>{requirement}</a>, QUANTITY: {prop.requires[requirement]}
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`http://localhost:3001/construct/`);
  const data = await res.json();
  return { props: { ...data } };
};

export default Construct;
