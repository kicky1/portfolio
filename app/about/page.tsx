import React from "react";
import { Navigation } from "../components/nav";
import { TimelineCard } from "../components/timelineCard";
import Image from "next/image";
import image from '../../images/krzysio.png'
import { ArrowRight } from "lucide-react";
import { SkillsTable } from "../components/skillsTable";

const { v4: uuidv4 } = require('uuid');

export default async function ProjectsPage() {
	
	const data = [
		{title:'Sevenet S.A.', position: 'Intern', badge:[{name: 'HTML'},{name: 'CSS'}, {name: 'JavaScript'}, {name: 'React'}, {name: 'Vue'}], date:'JUL 2020 - DEC 2020', description:'During my internship, I played a key role in creating comprehensive project documentation, which included technical specifications, user manuals, and other essential supporting materials. Additionally, I actively assisted in developing web applications using React.js and Vue.js, collaborating with the team to troubleshoot and resolve technical issues efficiently. Throughout the process, I effectively utilized project management tools like Redmine to track progress, assign tasks, and maintain seamless communication with team members, ensuring the successful delivery of high-quality products.'},
		{title:'Sevenet S.A.', position: 'Junior Software Developer', badge:[{name: 'Typescript'},{name: 'Axios'}, {name: 'JS ES5'}, {name: 'Mantine'}, {name: 'MUI'}], date:'DEC 2020 - JUL 2022', description:'As a junior team member, I contributed significantly to project documentation and played an integral role in web app development using React.js, Vue.js, and Vanilla JavaScript. Collaborating closely with the team, I actively participated in writing, testing, and debugging code to ensure the functionality and efficiency of the applications. Moreover, I engaged in code reviews and effectively utilized project management tools to streamline progress tracking, ensuring that project timelines and milestones were met successfully.'},
		{title:'Sevenet S.A.', position: 'Mid Software Developer', date:'JUL 2022 - present',badge:[{name: 'TanStack'},{name: 'Nuxt'}, {name: 'Cisco'}, {name: 'Docker'}, {name: 'Vue2'}, {name: 'Figama'}, {name: 'Adobe XD'}], description:'In my capacity as a mid-level software developer, my expertise extended across various domains. I excelled in creating comprehensive documentation for projects and products, which proved invaluable in supporting the software development and delivery process. Additionally, I actively contributed to web app development, utilizing React.js, Vue.js, and Vanilla JavaScript, while effectively engaging in testing and debugging activities. My proficiency in project management allowed me to create project plans, manage timelines and milestones, communicate effectively with stakeholders, and diligently track project progress, ensuring timely and successful delivery. Furthermore, I demonstrated creativity and a keen understanding of user experiences (UX) and user interfaces (UI) through wireframing, prototyping, and designing interfaces that were intuitive and user-friendly. My strong communication skills enabled me to effectively engage with customers, understand their needs and requirements, address concerns and questions, and provide exceptional customer service, contributing to overall product satisfaction and success.'},
	]

	return (
		<div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-7xl mx-auto lg:mx-0">
          <div className="grid grid-cols-2 gap-12">
            <div className="col-span-2 sm:col-span-1">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                About me
              </h2>
              <p className="mt-4 text-zinc-400">
                Hey everyone, I'm Krzysztof Wicki, a <span className="font-bold tracking-tight text-zinc-100">{` mid-level `}</span> 
                frontend developer with a strong passion for creating cutting-edge web applications. With over 
                <span className="font-bold tracking-tight text-zinc-100">{` three years `}</span> of experience in the industry, 
                I've had the opportunity to work on exciting projects and continuously enhance my skills.
                Moreover, I've had the privilege of working closely with clients, engaging in 
                <span className="font-bold tracking-tight text-zinc-100">{` productive communication `}</span> to understand their requirements and create UI/UX designs that align 
                perfectly with their project goals. This collaborative aspect of my work has allowed 
                me to not only develop technical skills but also strengthen my ability to create 
                solutions that truly resonate with users.
              </p>

              <p className="mt-4 text-zinc-400">
                When I'm not immersed in coding, I indulge in various interests and hobbies, 
                such as <span className="font-bold tracking-tight text-zinc-100">{` exploring `}</span> 
                new technologies to stay updated with the latest trends in 
                the tech world, traveling to find joy in discovering new places and experiencing 
                diverse cultures, playing the guitar as my way of relaxing and expressing creativity,
                 maintaining an active lifestyle through regular gym workouts to keep myself energized, 
                 and enjoying sketching architectural designs and exploring imaginative ideas in my 
                 spare time.
              </p>
            </div>
            <div className="col-span-2 sm:col-span-1">
            <div className="mt-4">
              <div className="col-span-12 px-4 space-y-6 sm:col-span-9">
                <div className="flex items-center justify-center col-span-12 space-y-12 relative px-4 col-span-8 space-y-8">
                  <div className=" max-w-md relative border border-zinc-100 before:absolute before:-bottom-2 before:-right-2 before:h-4 before:w-4 before:border-b before:border-zinc-100 before:border-r before:border-zinc-100  before:transition-all before:duration-300 before:ease-in-out after:absolute after:-top-2 after:-left-2 after:h-4 after:w-4 after:border-t after:border-l after:transition-all after:duration-300 after:ease-in-out hover:before:h-[calc(100%+16px)] hover:before:w-[calc(100%+16px)] hover:after:h-[calc(100%+16px)] hover:after:w-[calc(100%+16px)]">
                      <Image src={image.src} alt=""  width={448} height={448} className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className="w-full h-px bg-zinc-800" />
          <div className="max-w-7xl mx-auto lg:mx-0">
            <div className="grid grid-cols-2 gap-12">
              <div className="col-span-2 sm:col-span-1">
                <div className="sticky top-32 z-50">
                  <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                    Experience
                  </h2>
                  <p className="mt-4 text-zinc-400">
                    Throughout my career, I have been involved in creating web a
                    pplications that seamlessly blend functionality and aesthetics. 
                    Leveraging modern front-end frameworks like React and Vue, 
                    I take pride in delivering responsive and user-friendly applications 
                    that leave a lasting impact.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center col-span-2 sm:col-span-1">
                <div className="mt-4">
                  <div className="col-span-12 px-4 space-y-6 sm:col-span-9">
                    <div className="col-span-12 space-y-12 relative px-4 col-span-8 space-y-8 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:bg-gray-700">
                      {data.map((item) => {
                        return (
                          <TimelineCard
                            key={uuidv4()}
                            title={item.title}
                            position={item.position}
                            date={item.date}
                            description={item.description}
                            badge={item.badge}
                          />
                        );
                      })}
                    </div>
                  </div>
                  <div className="mt-4 col-span-12 px-4 space-y-6 sm:col-span-9">
                    <a
                      href={'https://drive.google.com/file/d/1CCrbRInScV14FTeiN-9fPp9v4_HVFtdm/view?usp=sharing'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center font-medium text-zinc-100 hover:underline group"
                    >
                      <span className="mr-2">View Full Résumé</span>
                      <ArrowRight className="transition-transform transform group-hover:translate-x-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div className="w-full h-px bg-zinc-800" />
          <div className="max-w-7xl mx-auto lg:mx-0">
            <div className="grid grid-cols-1 gap-12">
              <div className="col-span-1">
                  <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                    Skills
                  </h2>
                  <p className="mt-4 text-zinc-400">
                    Throughout my adventurous journey as a programmer, I have diligently acquired proficiency in 
                    numerous programming languages, libraries, and frameworks. 
                    The following represent the ones I feel most at ease with.
                  </p>
              </div>
              <div className="flex items-center justify-center col-span-1">
                <div className="mt-4">
                    <div className="col-span-12 space-y-12 relative px-4 space-y-8">
                      <SkillsTable/>
                    </div>
                </div>
              </div>
            </div>
          </div>
        <div className="w-full h-px bg-zinc-800" />
      </div>
    </div>
	);
}