import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {
  const foregroundRef = useRef(null); 

  const data = [
    {
      desc: "Lorem Ipsum dolor sit amet.",
      filesize: "0.9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Notes", tagColor: "green" },
    },
    {
      desc: "Lorem Ipsum dolor sit amet consectetur adipisicing.",
      filesize: "0.9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download", tagColor: "blue" },
    },
    {
      desc: "Lorem Ipsum dolor sit amet consectetur adipisicing. Lorem Ipsum dolor sit amet consectetur",
      filesize: "0.9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" },
    },
  ];

  return (
    <div ref={foregroundRef} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
      {data.map((item, index) => (
        <Card key={index} data={item} reference={foregroundRef} />
      ))}
    </div>
  );
}

export default Foreground;
