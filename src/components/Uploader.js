import React from "react";
import { BsUpload } from "react-icons/bs";

export default function Uploader() {
  return (
    <div className=" card w-4/5 bg-white p-6 my-10 font-bold text-3xl rounded-3xl shadow-xl">
      <div className="border-4 border-dashed flex justify-center items-center border-sky-700 rounded-3xl ">
        <div className="flex flex-col gap-y-2 items-center justify-center my-36">
          <BsUpload size={50} />
          <span>Insérer une image</span>
        </div>
      </div>
    </div>
  );
}
