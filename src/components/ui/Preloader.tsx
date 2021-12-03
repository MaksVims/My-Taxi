import React, {FC} from 'react';
import preLoaderImg from "../../../public/images/loader.jpg";
import Image from "next/image";

const Preloader: FC = () => {
  return (
    <>
      <Image src={preLoaderImg.src} priority layout="fill"/>
    </>
  );
};

export default Preloader;