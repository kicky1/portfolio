"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { TransitionLink } from "./transition-link";

const navigation = [
  { name: "About me", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export const Navigation: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting),
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 px-6 border-b ${
          isIntersecting
            ? "border-transparent"
            : "border-zinc-800 backdrop-blur"
        }`}
      >
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className="flex justify-between gap-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <div key={item.href}>
                  {isActive ? (
                    <span className="text-zinc-100 cursor-default">
                      {item.name}
                    </span>
                  ) : (
                    <TransitionLink href={item.href}>
                      <div className="duration-200 text-zinc-400 hover:text-zinc-100">
                        {item.name}
                      </div>
                    </TransitionLink>
                  )}
                </div>
              );
            })}
          </div>

          <Link
            href="/"
            className="duration-200 text-zinc-300 hover:text-zinc-100"
          >
            <ArrowLeft className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </header>
  );
};
