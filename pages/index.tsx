import React, {useState} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import Main from '../components/Main'
import Loading from '../components/Loading'

const inter = Inter({ subsets: ['latin'] });
// const Main = import('../components/Main')
export default function Home() {
  const [loading, setLoading] = useState(true);
  return (
    <>
    {
      loading? 
      <Loading loading={loading} setLoading={setLoading}/>
      :
      <>
      <Head>
        <title>Sherif Portfolio</title>
        <meta name="description" content="A Simple one page portfolio by Simple-soul" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/SimpleVectorImage.jpg" />
      </Head>
      <main className="bg-[#000000e1] text-white">
        <Main />
      </main>
      </>
    }
      
    </>
  );
}
