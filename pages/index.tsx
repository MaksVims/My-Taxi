import React from 'react';
import {NextPage} from "next";
import Layout from "@/components/layouts/Layout";
import MyMap from "@/components/home/MyMap";

const Home: NextPage = () => {
  return (
    <Layout title={"My taxi | app"}>
      <MyMap/>
      <section className="bg-white max-w-lg absolute p-2 mx-auto h-48 bottom-5 inset-x-2 sm:left-5 sm:right-5">

      </section>
    </Layout>
  );
};

export default Home;