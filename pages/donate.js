import React from 'react'
import upiqr from "../assets/upi.jpeg";
import Image from "next/image";

const donate = () => {
  return (
    <div className="relative flex flex-col md:items-center items-center gap-2 md:gap-12 justify-center overflow-hidden h-screen">
    <h2 className="text-2xl md:text-4xl font-semibold">Donate Me</h2>
    <div className="mt-5 lg:col-span-6 rounded-lg">
        <div className="bg-white space-y-5 md:px-10 rounded-xl flex flex-col items-center justify-center md:py-10 p-4 sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                <Image width={300} height={300} src={upiqr} />
        </div>
    </div>
</div>
  )
}

export default donate