import Particles from "../components/particles";
import Link from "next/link";
import { TransitionLink } from "../components/transition-link";

const navigation = [
  { name: "About me", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <TransitionLink
              key={item.href}
              href={item.href}
            >
              <div className="duration-200 text-zinc-400 hover:text-zinc-100">
              {item.name}
              </div>
            </TransitionLink>
          ))}
        </ul>
      </nav>
      <div className="w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 " />
      <Particles className="absolute inset-0 -z-10" quantity={500} />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Krzysztof Wicki
      </h1>
      <div className=" w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
        Software Developer with over 7 years of experience in web developing,
          <br />
          currently employed at {" "} 
          <Link
            target="_blank"
            href="https://sevenet.pl/en"
            className="underline duration-500 hover:text-zinc-300"
          >
            Sevenet
          </Link>
          {" "} 
          for more than 4 years
        </h2>
      </div>
    </div>
  );
}
