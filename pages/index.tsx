import React from 'react';
import {NextPage} from "next";
import Layout from "@/components/layouts/Layout";
import {ButtonOrder, InputPlaceFrom, InputPlaceTo, MyMap} from "@/components/home";
import {IOption} from "./api/types";
import Options from "@/components/home/Options";

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/options')
  if (!res.ok) {
    return {
      notFound: true
    }
  }

  const options = await res.json()
  return {
    props: {
      options
    }
  }
}

interface IHome {
  options: IOption[]
}

const Home: NextPage<IHome> = ({options}) => {
  return (
    <Layout title={"My taxi | app"}>
      <MyMap/>
      <section
        className="max-w-xl absolute mx-auto bottom-5 inset-x-2 sm:left-5 sm:right-5"
        style={{maxWidth: 600}}
      >
        <InputPlaceFrom/>
        <InputPlaceTo/>
        <Options options={options}/>
        <ButtonOrder/>
      </section>
    </Layout>
  );
};

export default Home;