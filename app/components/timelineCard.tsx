"use client";

import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
const { v4: uuidv4 } = require('uuid');

type Props = {
    title: string
    position: string
    date: string
    description: string
    badge?: BadgeSkill[]
}

export const TimelineCard = ({title, position, date, description, badge}: Props) => {
	return (
        <Card className="ease-linear duration-200 border-2 border-transparent hover:border-gray-700 hover:border-2 flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-zinc-100">
            <CardHeader>
                <CardTitle>{title} <span className="text-zinc-400 font-extralight">- {position}</span></CardTitle>
                <CardDescription>{date}</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-zinc-400">{description}</p>
                <div className="flex flex-wrap mt-4">
                    {
                        badge?.map((item) => {
                            return(
                                <Badge key={uuidv4()} className="mt-2 mr-2" variant="outline">{item.name}</Badge>
                            )
                        })
                    }
                </div>
            </CardContent>
        </Card>
	);
};
