import React from 'react'

export default function WhatIDo({Animator, MoveIn, MoveOut}) {
  return (
    <div className='h-screen' id='about'>
        <div style={{ display: "flex", justifyContent: "end", alignItems: "center", height: "100%" }} className='w-[80%] mx-auto'>
            <span style={{ fontSize: "18px" }} className='text-textcolor'>
            <Animator animation={MoveIn(-1000, 0)} className='shadow-lg shadow-[] pl-3 py-1'>I write HTML, CSS, Bootstrap,</Animator>
            <Animator animation={MoveIn(1000, 0)} className='mt-4 shadow-lg shadow-[] pl-3 py-1'>Tailwind, Javascript, ReactJs and NextJs.</Animator>
            <Animator animation={MoveOut(1000, 0)} className='mt-12 shadow-lg shadow-[] pl-3 py-1'> I have 27 months experience working</Animator>
            <Animator animation={MoveOut(-1000, 0)} className='mt-4 shadow-lg shadow-[] pl-3 py-1'>individual projects and team projects</Animator>
            </span>
        </div>
    </div>
  )
}
