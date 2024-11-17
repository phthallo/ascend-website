import React from "react";
import { GetServerSideProps } from "next";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/Layout";
import Router from "next/router";
import { MaterialProps } from "../../components/Material";

const Material: React.FC<MaterialProps[]> = (props) => {
  return (
    <Layout>
      <div className="bg-[#232D50] h-screen font-bettervcr text-center flex flex-col items-center text-[#de8af5] pt-10">
        <table className="w-screen">
          <thead>
            <tr>
              <th className="text-3xl px-5">Name</th>
              <th className="text-3xl px-5">Description</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(props).map((prop, index) => (
              <tr key={index} className="text-center">
                <td>{prop.name}</td>
                <td>{prop.content}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`http://localhost:3001/material/`);
  const data = await res.json();
  return { props: { ...data } };
};

export default Material;