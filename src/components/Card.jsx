import React from "react";
import { FaFileImage } from "react-icons/fa6";
import { MdDownload } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.2}
      className=" relative w-60 flex-shrink-0 h-72 rounded-[50px] bg-zinc-700 text-white py-10 px-5 overflow-hidden"
    >
      <FaFileImage />
      <p className="text-sm mt-5 font-semibold leading-tight">{data.desc}</p>
      <motion.div className="footer absolute bottom-0  w-full   left-0">
        <div className="flex items-center justify-between px-8 py-3 mb-5">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-sky-700 rounded-full text-black flex items-center justify-center">
            {data.close ? (
              <IoIosCloseCircleOutline />
            ) : (
              <MdDownload size=".8em" />
            )}
          </span>
        </div>

        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            }  flex items-center justify-center `}
          >
            <h3 className="text-sm font-semibold ">{data.tag.tagTitle}</h3>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default Card;
