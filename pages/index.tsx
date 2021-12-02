import React from 'react';
import {NextPage} from "next";
import Layout from "@/components/layouts/Layout";
import MyMap from "@/components/home/MyMap";
import {GoSearch} from 'react-icons/go'


const Home: NextPage = () => {
  return (
    <Layout title={"My taxi | app"}>
      <MyMap/>
      <section className="max-w-xl absolute p-2 mx-auto bottom-5 inset-x-2 sm:left-5 sm:right-5">
        <div className="rounded-md w-full shadow-md bg-white px-3 py-3 mb-5 flex items-center">
          <GoSearch color='#724B99' size={20} className="mr-3"/>
          <input className=" w-full outline-none text-gray-900 font-medium pr-1" type="text"/>
        </div>
        <div className="rounded-md w-full shadow-md bg-white px-3 py-3 mb-5 flex items-center">
          <GoSearch color='#000' size={20} className="mr-3"/>
          <input className=" w-full outline-none text-gray-900 font-medium pr-1" type="text"/>
          <span className="text-gray-400 text-sm absolute right-4">5 min</span>
        </div>
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
        <button className=" bg-black text-white block mx-auto w-2/3 py-1 rounded-md max-w-sm">
          Click
        </button>
      </section>
    </Layout>
  );
};

export default Home;