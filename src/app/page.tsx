'use client';

import About from "@/components/about"
import Tech from "@/components/Tech";
import ProjectsSection from "@/components/ProjectsSection";
import Contact from "@/components/Contact";
import { useEffect, useState } from 'react';

export default function Home() {
  const [phraseData, setPhraseData] = useState({quote: 'Your phrase is loading', author: 'unknown'});
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    async function phrase(){
      const response = await fetch('https://api.themotivate365.com/stoic-quote');
      const data = await response.json()
      setPhraseData(data);
      return data;
    }
    phrase();
  }
  ,[counter])

  return (
    <main>
      <h1 className='mainTitle'>Hello! I&apos;m <span>Alejandro Bernal Marín</span></h1>
      <About phraseData={phraseData} counter={counter} setCounter={setCounter}/>
      <hr />
      <Tech />
      <hr />
      <ProjectsSection />
      <hr />
      <Contact />
    </main>
  )
}
