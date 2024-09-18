"use client";

import { LogoReact } from "@styled-icons/ionicons-solid/LogoReact";
import { Vuejs } from "@styled-icons/boxicons-logos/Vuejs";
import { Python } from "@styled-icons/boxicons-logos/Python";
import { Github } from "@styled-icons/bootstrap/Github";
import { Adobexd } from "@styled-icons/simple-icons/Adobexd";
import { Mongodb } from "@styled-icons/simple-icons/Mongodb";
import { Nodejs } from "@styled-icons/boxicons-logos/Nodejs";
import { Hive } from "@styled-icons/fa-brands/Hive";
import { Adobephotoshop } from "@styled-icons/simple-icons/Adobephotoshop";
import { Cisco } from "@styled-icons/simple-icons/Cisco";
import { Redux } from "@styled-icons/boxicons-logos/Redux";
import { Aws } from "@styled-icons/boxicons-logos/Aws";
import {
  Css3,
  Javascript,
  Html5,
  Typescript,
  Figma,
  Flask,
  Docker,
  Sass,
  Markdown,
  Nextdotjs,
  Nuxtdotjs,
  Supabase,
  Firebase,
  Tailwindcss,
  Mui,
} from "@styled-icons/simple-icons";
import { cloneElement } from "react";

const { v4: uuidv4 } = require("uuid");

export const SkillsTable = () => {
  const skills = [
    { name: "HTML", icon: <Html5 />, color: "#e34c26" },
    { name: "JavaScript", icon: <Javascript />, color: "#f0db4f" },
    { name: "TypeScript", icon: <Typescript />, color: "#007acc" },
    { name: "React.js", icon: <LogoReact />, color: "#61DBFB" },
    { name: "Next.js", icon: <Nextdotjs />, color: "#ffffff" },
    { name: "Vue.js", icon: <Vuejs />, color: "#41B883" },
    { name: "Nuxt.js", icon: <Nuxtdotjs />, color: "#41b883" },
    { name: "Python", icon: <Python />, color: "#FFE873" },
    { name: "Flask", icon: <Flask />, color: "#ffffff" },
    { name: "Nodejs", icon: <Nodejs />, color: "#68A063" },
    { name: "MongoDB", icon: <Mongodb />, color: "#4DB33D" },
    { name: "Supabase", icon: <Supabase />, color: "#4DB33D" },
    { name: "Firebase", icon: <Firebase />, color: "#f0db4f" },
    { name: "AWS", icon: <Aws />, color: "#FF9900" },
    { name: "Docker", icon: <Docker />, color: "#0db7ed" },
    { name: "Sass", icon: <Sass />, color: "#B82357" },
    { name: "GIT", icon: <Github />, color: "#ffffff" },
    { name: "CSS", icon: <Css3 />, color: "#2965f1" },
    { name: "TailwindCss", icon: <Tailwindcss />, color: "#4FCCFE" },
    { name: "MUI", icon: <Mui />, color: "#4FCCFE" },
    { name: "Markdown", icon: <Markdown />, color: "#ffffff" },
    { name: "Photoshop", icon: <Adobephotoshop />, color: "#4FCCFE" },
    { name: "Figma", icon: <Figma />, color: "#A259FF" },
    { name: "AdobeXD", icon: <Adobexd />, color: "#B82357" },
    { name: "Cisco", icon: <Cisco />, color: "#049fd9" },
    { name: "Hive", icon: <Hive />, color: "#B82357" },
    { name: "Redux", icon: <Redux />, color: "#764abc" },
  ];

  return (
    <>
      <div className="border-gray-700 border-2 rounded-md p-6 grid grid-cols-3 sm:grid-cols-6 gap-8">
        {skills.map((item) => (
          <div key={uuidv4()} className="flex flex-col items-center">
            <div className="mb-2" style={{ color: item.color }}>
              {cloneElement(item.icon, { size: 48 })}
            </div>
            <div className="text-center">{item.name}</div>
          </div>
        ))}
      </div>
    </>
  );
};
