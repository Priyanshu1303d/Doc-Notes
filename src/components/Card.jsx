import React, { useState, useEffect } from "react";
import { PiFilesFill } from "react-icons/pi";
import { PiDownload } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { saveAs } from "file-saver";

function Card({ id, data, reference }) {
  const [inputText, setInputText] = useState(""); 
  const [fileSize, setFileSize] = useState(data.filesize); 

  useEffect(() => {
  
    const savedData = localStorage.getItem(`cardInputText_${id}`);
    if (savedData) {
      setInputText(savedData);
      setFileSize(`${savedData.length} characters`);
    }
  }, [id]);

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);
  
    setFileSize(`${text.length} characters`);

    localStorage.setItem(`cardInputText_${id}`, text);
  };

  const handleDownload = () => {
 
    const blob = new Blob([inputText], { type: "text/plain;charset=utf-8" });

    saveAs(blob, `card_content_${id}.txt`);
  };

  const handleDelete = () => {
  
    localStorage.removeItem(`cardInputText_${id}`);

  };

  return (
    <motion.div
      drag
      dragConstraints={reference} 
      whileDrag={{ scale: 1.2 }}
      dragElastic={1.1}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 40 }}
      className="relative flex-shrink-0 w-60 h-72 rounded-[35px] bg-zinc-900 text-white px-8 py-10 overflow-hidden"
    >
      <PiFilesFill />
 
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        className="text-sm mt-5 leading-tight bg-transparent border-none outline-none text-white"
        placeholder="Type something..."
      />
      <div className="footer absolute bottom-0 w-full left-0 ">
        <div className="flex items-center justify-between mb-3 py-3 px-8 ">
     
          <h5>{fileSize}</h5>
        
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center" style={{ fontSize: "0.9em", color: "#fff" }}>
            {data.close ? <IoClose onClick={handleDelete} /> : <PiDownload onClick={handleDownload} />}
          </span>
        </div>
        {data.tag.isOpen && (
          <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
            <h3 className="text-sm">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
