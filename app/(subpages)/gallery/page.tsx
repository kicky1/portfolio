import React from "react";
import frog from "../../../images/frog.png";
import pingu from "../../../images/pingu.png";
import drBlight from "../../../images/reaper.png";
import me from "../../../images/me.png";
import furiousChicken from "../../../images/chicken.png";
import alric from "../../../images/alric.gif";
import { GalleryImage } from "@/app/components/galleryImage";
export default async function GalleryPage() {
  const images = [
    { name: "Silfershield Frog", url: frog },
    { name: "The Prince Pingu", url: pingu },
    { name: "Me", url: me },
    { name: "Alric", url: alric },
    { name: "Dr Blight", url: drBlight },
    { name: "Furious Chicken", url: furiousChicken },
  ];

  return (
    <div className="relative pb-16">
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Gallery
          </h2>
          <p className="mt-4 text-zinc-400">
            Here you will find some of my arts.
          </p>
        </div>
        <div className="max-w-7xl mx-auto lg:mx-0">
          <div className=" items-center justify-center grid grid-cols-6 gap-12">
            {images.map((image) => (
              <div
                key={image.name}
                className="col-span-6 sm:col-span-3 md:col-span-2 relative group"
              >
                <GalleryImage imageSrc={image.url.src} name={image.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
