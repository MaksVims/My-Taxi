import React from 'react';
import {NextPage} from "next";
import Layout from "@/components/layouts/Layout";
import {ButtonOrder, InputPlaceFrom, InputPlaceTo, MyMap} from "@/components/home";


const Home: NextPage = () => {
  return (
    <Layout title={"My taxi | app"}>
      <MyMap/>
      <section className="max-w-xl absolute mx-auto bottom-5 inset-x-2 sm:left-5 sm:right-5">
        <InputPlaceFrom/>
        <InputPlaceTo/>
        <div className="mb-5 flex flex-nowrap overflow-x-scroll hidden-scroll">
          <ul className="flex flex-nowrap">
            {
              [1, 2, 3, 4, 5].map(item => (
                <li
                  className="mr-2 last:mr-0 bg-white p-2 cursor-pointer"
                  style={{minWidth: '110px'}}
                  key={item}>{item}</li>
              ))
            }
          </ul>
        </div>
        <ButtonOrder/>
      </section>
    </Layout>
  );
};

export default Home;