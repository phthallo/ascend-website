import Header from "@components/Header";
import { GetServerSideProps } from 'next';
import { MaterialProps } from '@components/Material';

const AllItems: React.FC<MaterialProps[]> = (props) => {
  return (
    <div className="bg-[#111f45] h-full text-[#de8af5] block items-center align-middle text-center font-bettervcr">
      <Header />
      <table className="w-full text-sm table-fixed bdr-left row3 h-screen">
        <thead>
          <tr>
            <th className="text-3xl px-5">ID Number</th>
            <th className="text-3xl px-5">Name</th>
            <th className="text-3xl px-5">Description</th>
          </tr>
        </thead>
        <tbody>
        {
            (Object.values(props)).map((prop) => (
          <tr>
            <td>{prop.id}</td> 
            <td><a href = {`/material/${prop.id}`}>{prop.name}</a></td>
            <td>{prop.content}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`http://localhost:3001/material/`)
  const data = await res.json()
  return { props: { ...data } }
}

export default AllItems;
