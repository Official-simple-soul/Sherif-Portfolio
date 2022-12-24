import dynamic from "next/dynamic";
const Animator = dynamic(
  import("react-scroll-motion").then((it) => it.Animator),
  { ssr: false }
);

import { ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import Hero from '../components/Hero'
import Simple from '../components/Simple'

export default function First() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());
  return (
    <div className="px-4">
      <ScrollContainer>
    <ScrollContainer>
        <ScrollPage>
          <Animator animation={batch(Fade(), MoveOut(0, -200))}>
           <Hero />
          </Animator>
        </ScrollPage>
    </ScrollContainer>
    <ScrollPage>
      <Animator animation={ZoomInScrollOut}>
        <Simple />
      </Animator>
    </ScrollPage>
    <ScrollPage>
      <Animator animation={FadeUp}>
        <span style={{ fontSize: "40px" }}>A Front-end developer ⛅️</span>
      </Animator>
    </ScrollPage>
    <ScrollPage>
      <div style={{ display: "flex", justifyContent: "end", alignItems: "center", height: "100%" }} className='w-[80%] mx-auto'>
        <span style={{ fontSize: "18px" }}>
          <Animator animation={MoveIn(-1000, 0)}>I write HTML, CSS, Bootstrap,</Animator>
          <Animator animation={MoveIn(1000, 0)}>Tailwind, Javascript, ReactJs and NextJs.</Animator>
          <Animator animation={MoveOut(1000, 0)}> I have 27 months experience working</Animator>
          <Animator animation={MoveOut(-1000, 0)}>individual projects and team projects</Animator>
        </span>
      </div>
    </ScrollPage>
    <ScrollPage>
      <Animator animation={batch(Fade(), Sticky())}>
        <h1 style={{ fontSize: "40px" }}>Enjoy</h1>

        <h1 style={{ fontSize: "30px" }} className='mt-8'>
          There's more coming soon
        </h1>
      </Animator>
    </ScrollPage>
  </ScrollContainer>
    </div>
  
  )
}