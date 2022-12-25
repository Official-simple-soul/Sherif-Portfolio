import dynamic from "next/dynamic";
const Animator = dynamic(
  import("react-scroll-motion").then((it) => it.Animator),
  { ssr: false }
);

import { ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import Hero from '../components/Hero'
import Simple from '../components/Simple'
import FrontEnd from '../components/FrondEnd'
import WhatIDo from '../components/WhatIDo'
import Skill from '../components/Skill'

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
        <FrontEnd />
      </Animator>
    </ScrollPage>
    <ScrollPage>
      <WhatIDo Animator={Animator} MoveIn={MoveIn} MoveOut={MoveOut}/>
    </ScrollPage>
    <ScrollPage>
      <Skill Animator={Animator} MoveIn={MoveIn} MoveOut={MoveOut}/>
    </ScrollPage>
  </ScrollContainer>
    </div>
  
  )
}