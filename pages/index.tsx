import React from 'react';
import {NextPage} from "next";
import Layout from "@/components/layouts/Layout";
import MyMap from "@/components/home/MyMap";

const Home: NextPage = () => {
  return (
    <Layout title={"My taxi | app"}>
      <MyMap/>
    </Layout>
  );
};

export default Home;