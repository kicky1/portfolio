import React from "react";
import { Navigation } from "../components/nav";
import { ProjectCard } from "../components/projectCard";

import portfoliov2 from "../../images/portfoliov2.png";
import terraomega from "../../images/terraomega.png";
import commenterimg from "../../images/commenterimg.png";
import omeup from "../../images/1up.png";
import interviewtasks from "../../images/interviewtasks.png";
import bingo from "@/images/bingo.png";
import rickmorty from "@/images/rickmorty.png";

const { v4: uuidv4 } = require("uuid");

export default async function ProjectsPage() {
	
	const data = [
		{title:'1UP', web:'https://oneup-pi.vercel.app/', image:omeup.src, badge:[{name: 'Next.js 13'},{name: 'Typescript'}, {name: 'Zustand'}, {name: 'Mantine'}, {name: 'TanStack'}, {name: 'Supabase'}], github:'https://github.com/Cartel-1UP/1UP-website',  description:'1UP is an application that allows users to browse blogs and interact with them such as liking posts or leaving comments. It was made on behalf of DAO and is connected to the Hive blockchain.'},
    {title: 'Rick&Morty', web:'https://wiki-rickmorty.vercel.app/', image:rickmorty.src, badge:[{name: 'Next.js 14'}, {name: 'Typescript'}, {name: 'GraphQL'}, {name: 'TanStack'}, {name: 'Shadcn'}, {name: 'Tailwind'}], github: 'https://github.com/kicky1/rickmorty-wiki', description: 'Rick and Morty Wiki is an application that allows you to browse and search for characters from the Rick and Morty series. It was made to showcase usage of GraphQL`s API.'},
    {title:'Interview Tasks', web:'https://interviewtasks.vercel.app/', image:interviewtasks.src, badge:[{name: 'Next.js 13'},{name: 'Typescript'}, {name: 'JavaScript'}, {name: 'Tailwind'}], github:'https://github.com/kicky1/interview',  description:'Interview Tasks is a web application with a collection of tasks which can be asked during the interview. It was made to help people prepare for the interview.'},
		{title: 'Bingo', web:'https://kith-bingo.vercel.app/', image:bingo.src, badge:[{name: 'Nextjs 14'},{name: 'Typescript'},{name: 'Shadcn'},{name: 'Clerk'}, {name: 'Drizzly'}, {name: 'Postgress'} ], github:'https://github.com/kicky1/bingo',  description:'Bingo is a web application that allows you to play bingo.'},
    {title:'eTrener',image:'',  badge:[{name: 'Python'}, {name: 'OpenCV'}, {name: 'Tkinter'}, {name: 'Pandas'}, {name: 'Openpose'}], github:'https://github.com/kicky1/eTrener2', description:`Engineering thesis - Image processing based athleets training support system.`},
		{title:'ActivityRecognition',image:'',  badge:[{name: 'Python'}, {name: 'React.js'}, {name: 'CNN'}, {name: 'MLP'}, {name: 'RBM'}, {name: 'Tensorflow'}, {name: 'Keras'}], github:'https://github.com/kicky1/ActivityRecognition', description:`Master thesis - AI system to recognize variability of conditions in the elderly.`},
    {title:'TerraOmega', web:'https://terra-omega.vercel.app/', image:terraomega.src,  badge:[{name: 'Next.js 13'},{name: 'Typescript'}, {name: 'Zustand'}, {name: 'Mantine'}, {name: 'TanStack'}, {name: 'Supabase'}], github:'https://github.com/kicky1/terra_bot', description:`The powerful tool designed for crypto gamers who want to maximize their earnings in the Terracore.`},
		{title:'Commenter', image:commenterimg.src, badge:[{name: 'Next.js 13'}, {name: 'Zustand'}, {name: 'Mantine'}, {name: 'TanStack'}, {name: 'Emotion'}, {name: 'Firebase'}], github:'https://github.com/kicky1/Commenter', description:'Commenter is a simple web application that allows users to leave comments.'},
    {title:'Portfolio', image:portfoliov2.src, badge:[{name: 'Next.js 13'},{name: 'Typescript'}, {name: 'Shadcn'}],  github:'https://github.com/kicky1/portfolio', description:'Portfolio is the page you are currently looking at. It was made to present my person in a simple and clear way.'},
  ]


  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Here you will find several projects that I made during my free time.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />
        <div className="max-w-7xl mx-auto lg:mx-0">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {data.map((item) => {
              return (
                <div key={uuidv4()} className="h-auto">
                  <ProjectCard
                    title={item.title}
                    description={item.description}
                    github={item.github}
                    badge={item.badge}
                    image={item?.image}
                    web={item?.web}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
