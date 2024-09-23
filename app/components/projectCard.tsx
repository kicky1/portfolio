"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import placeholder from "../../images/placeholder.png";
import { Button } from "./ui/button";

type Props = {
  title: string;
  description: string;
  github: string;
  badge?: BadgeSkill[];
  image?: string;
  web?: string;
};

export const ProjectCard = ({
  title,
  description,
  github,
  badge,
  image,
  web,
}: Props) => {
  const handleGithubButtonClick = () => {
    window.open(github, "_blank");
  };

  const handleWebButtonClick = () => {
    window.open(web, "_blank");
  };

  return (
    <Card className="min-h-full ease-linear duration-200 border-zinc-700 border-2 flex flex-col relative hover:bg-zinc-800">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="grid grid-cols-7 gap-4">
          <div className="col-span-4">
            <p className="text-zinc-400 h-auto">{description}</p>
          </div>
          <div className="col-span-3">
            <div className="relative w-full h-[120px]">
              <Image
                src={image ? image : placeholder.src}
                alt={"image"}
                fill
                placeholder="blur"
                blurDataURL={image ? image : placeholder.src}
                style={{ backgroundColor: "#313135", borderRadius: "5px",  objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </CardContent>
      <div className="p-4 flex flex-wrap">
        {badge?.map((item, index) => (
          <span
            key={index}
            className="text-sm text-zinc-100 px-2 py-1 rounded-full border-2 border-zinc-700  m-1"
          >
            {item.name}
          </span>
        ))}
      </div>
      <div className="p-4">
        <Button
          variant="outline"
          className="m-1"
          onClick={handleGithubButtonClick}
        >
          Code
        </Button>
        <Button
          variant="outline"
          className="m-1"
          onClick={handleWebButtonClick}
          disabled={!web}
        >
          Live
        </Button>
      </div>
    </Card>
  );
};
