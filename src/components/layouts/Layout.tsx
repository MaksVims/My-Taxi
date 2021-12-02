import React, {FC, useEffect, useState} from 'react';
import Head from "next/head";
import Script from "next/script";
import faviconImg from '/public/images/favicon.ico'
import preLoaderImg from '/public/images/loader.jpg'
import {useActions, useCurrentLocation} from "@/hooks";
import Image from "next/image";

interface ILayout {
  title: string
}

export const API_KEY = process.env.GOOGLE_API_KEY

const Layout: FC<ILayout> = ({children, title}) => {
  const {setUserPlaceLocation, setCurrentLocation} = useActions()
  const [isPreloaderShow, setIsPreloaderShow] = useState<boolean>(false)
  const userLocationLoading = useCurrentLocation((position: GeolocationPosition) => {
    const location = {lat: position.coords.latitude, lng: position.coords.longitude}
    setCurrentLocation(location)
    setUserPlaceLocation(location)
  })

  useEffect(() => {
    setIsPreloaderShow(true)
    const timerId = setTimeout(() => setIsPreloaderShow(false), 1000)
    return () => clearTimeout(timerId)
  }, [])

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={`Page or ${title}`}/>
        <link rel="shortcut icon" href={faviconImg.src} type="image/icon"/>
      </Head>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`}
        strategy={"beforeInteractive"}
      />
      <div className="w-screen h-screen relative overflow-hidden">
        {userLocationLoading || isPreloaderShow ? <Image src={preLoaderImg.src} priority layout="fill"/> : children}
      </div>
    </>
  );
};

export default Layout;