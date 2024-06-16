'use client'
import Image from "next/image";
import { useState } from "react";
import ModalImage from "./modalImage";

type Props = {
  imageSrc: string;
  name: string;
};

export const GalleryImage = ({ imageSrc, name }: Props) => {
  const [open, setOpen] = useState(false);



  return (
    <>
    <span onClick={() => setOpen(true)} >
    <div className="hover:cursor-pointer max-w-md relative border border-zinc-100 before:absolute before:-bottom-2 before:-right-2 before:h-4 before:w-4 before:border-b before:border-r before:border-zinc-100  before:transition-all before:duration-300 before:ease-in-out after:absolute after:-top-2 after:-left-2 after:h-4 after:w-4 after:border-t after:border-l after:transition-all after:duration-300 after:ease-in-out hover:before:h-[calc(100%+16px)] hover:before:w-[calc(100%+16px)] hover:after:h-[calc(100%+16px)] hover:after:w-[calc(100%+16px)]">
        <Image
          src={imageSrc}
          alt={name}
          width={448}
          height={448}
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 bg-black bg-opacity-50 group-hover:opacity-100">
          <span className="text-white text-lg font-bold">{name}</span>
        </div>
      </div>
      </span>
      <ModalImage open={open} setOpen={setOpen} imageSrc={imageSrc} name={name}/>
    </>
  );
};
