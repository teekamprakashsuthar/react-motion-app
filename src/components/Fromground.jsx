import React, { useRef } from "react"; // Import useRef
import Card from "./Card";

function Fromground() {
  const ref = useRef(null);

  const data = [
    {
      desc: "Lorem ipsum dolor and I am consectetur adipisicing.",
      filesize: ".10mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "Lorem ipsum dolor and I am consectetur adipisicing.",
      filesize: ".10mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum dolor and I am consectetur adipisicing.",
      filesize: ".10mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
  ];

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5"
    >
      {data.map((item, index) => (
        <Card key={index} data={item} reference={ref} /> 
      ))}
    </div>
  );
}

export default Fromground;
