"use client";

import Link from "next/link";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import placeholder from '../../images/placeholder.png'
import { Button } from "./ui/button";

const { v4: uuidv4 } = require('uuid');

type Props = {
    title: string
    description: string
    github: string
    badge?: BadgeSkill[]
    image?: string
    web?: string
}

export const ProjectCard = ({title, description, github, badge, image, web}: Props) => {

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
            <CardContent>
                <div className="grid grid-cols-7 gap-4">
                    <div className="col-span-4"><p className="text-zinc-400 h-auto">{description}</p></div>
                    <div className="col-span-3">
                        <Image 
                            src={image ? image : placeholder.src} 
                            alt={"image"} 
                            width={400}
                            height={400}
                            placeholder="blur"
                            blurDataURL={image ? image : placeholder.src}
                            style={{backgroundColor: '#313135', borderRadius: '5px'}}
                        />
                    </div>
                </div>
                
                <div className="flex flex-wrap mt-4">
                    {/* {
                        badge?.map((item) => {
                            return(
                                <Badge key={uuidv4()} className="mt-2 mr-2" variant="outline">{item.name}</Badge>
                            )
                        })
                    } */}
                    <Button variant="outline" className="m-1" onClick={handleGithubButtonClick}>Code</Button>
                    <Button variant="outline" className="m-1" onClick={handleWebButtonClick} disabled={!web}>Live</Button>
                </div>
            </CardContent>
        </Card>
	);
};
