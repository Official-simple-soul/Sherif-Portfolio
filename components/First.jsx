import React from 'react'
import dynamic from "next/dynamic";
const Animator = dynamic(
  import("react-scroll-motion").then((it) => it.Animator),
  { ssr: false }
);

import { ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";


export default function First() {
  return (
    <ScrollContainer>
        <ScrollPage>
            <div className='h-screen flex justify-center items-center'>
                <div className="text-center">
                    <h1 className='text-3xl font-bold'><Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator></h1>
                    <h1 className='text-3xl font-bold text-[#4b0303]'><Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator></h1>
                    <p className='mt-12 underline'><Animator animation={MoveOut(1000, 0)}>Scroll down to continue</Animator></p>
                    <p className='mt-12 underline'><Animator animation={MoveOut(1000, 0)}>Enjoy</Animator></p>
                </div>
            </div>
        </ScrollPage>
    </ScrollContainer>
  )
}