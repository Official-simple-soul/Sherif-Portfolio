import React from 'react';
import WorksDetails from '../Data/MyWork';
import { useState } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import gg from '../public/assets/images/daura.png'
export default function Works() {
  const [activeSlide, setActiveSlide] = useState(1);
  const previousSlide = (id) => {
    id === 1
      ? setActiveSlide(WorksDetails.length)
      : id > 1
      ? setActiveSlide(activeSlide - 1)
      : setActiveSlide(WorksDetails.length - 1);
  };
  let nextSlide = (id) => {
    id === WorksDetails.length
      ? setActiveSlide(1)
      : id < WorksDetails.length
      ? setActiveSlide(activeSlide + 1)
      : setActiveSlide(WorksDetails.length + 1);
  };

  return (
    <section className="h-screen px-4 pl-12" id="work">
      <h1 className="mb-4 text-center  font-bold text-3xl w-80 mx-auto">
        SOME OF MY WORK
      </h1>
      <div>
        {WorksDetails.map((item) => {
          const { id, code, link, image } = item;
          return (
            <div
              key={id}
              className={
                activeSlide === id
                  ? 'flex justify-center item-center relative'
                  : 'hidden'
              }
            >
              <button
                onClick={() => previousSlide(id)}
                className="text-4xl md:text-6xl bg-black text-textcolor rounded-full absolute z-10 left-0 top-32"
              >
                <FiChevronLeft />
              </button>
              <div
                class="mb-4 bg-transparent border-0 work-hover relative"
             
              >
                <Image src={image} alt="word" width={500} height={500} className='rounded-2xl'/>

                <h5 className="absolute hidden">{id}</h5>
                <div className="flex justify-center items-center space-x-4">
                    <Link href={link} target="_blank">
                    <button class="text-[10px] md:text-4xl text-textcolor bg-black border-2 border-primary rounded-lg mt-6 p-2">
                        Go Live
                    </button>
                    </Link>
                    <Link href={code} target="_blank">
                    <button class="text-[10px] md:text-4xl text-textcolor bg-black border-2 border-primary rounded-lg mt-6 p-2  work-title">
                        View Code
                    </button>
                    </Link>
                </div>
              </div>
              <button
                onClick={() => nextSlide(id)}
                className="clicking text-4xl md:text-6xl bg-black rounded-full text-textcolor absolute right-0 top-32"
              >
                <FiChevronRight />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
